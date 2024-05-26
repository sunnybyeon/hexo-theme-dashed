hexo.extend.helper.register(
    "this_category_tree",
    (currentTree, categories, depth = 1) => {
        const categoriesArrary = categories.toArray();
        const result = currentTree.length
            ? [
                  categoriesArrary.find(
                      (category) =>
                          category.parent === undefined &&
                          category.slug === currentTree[0]
                  ),
              ]
            : [categories.findOne({ parent: undefined })];
        for (let i = 1; i < (depth < 1 ? 1 : depth); i++) {
            if (!result[i - 1]) break;
            result.push(
                currentTree.length > i
                    ? categoriesArrary.find(
                          (category) =>
                              category.parent === result[i - 1]._id &&
                              category.slug ===
                                  currentTree.slice(0, i + 1).join("/")
                      )
                    : categories.findOne({ parent: result[i - 1]._id })
            );
        }
        if (result.length > 1 && !result[result.length - 1]) {
            result.pop();
        }
        return result;
    }
);
hexo.extend.helper.register("post_categories", (categories) => {
    const roots = categories.find({ parent: undefined });
    const results = [];
    function getChildren(parents) {
        const children = categories.find({
            parent: parents[parents.length - 1]._id,
        });
        if (children.length) {
            return children
                .map((category) => getChildren([...parents, category]))
                .flat();
        } else {
            return [parents];
        }
    }
    roots.forEach((root) => {
        getChildren([root]).forEach((categoryTree) =>
            results.push(categoryTree)
        );
    });
    return results;
});
hexo.extend.helper.register("list_child_categories", (root) => {
    const url_for = hexo.extend.helper.get("url_for").bind(hexo);
    function listChild(parent) {
        const children = hexo.locals
            .get("categories")
            .find({ parent: parent._id });
        return children.length > 0
            ? `<ul>${children.reduce((list, child) => {
                  const childList = listChild(child);
                  return (
                      list +
                      "<li>" +
                      (childList ? "<details><summary>" : "") +
                      `<a href="${url_for(child.path)}"><span>${
                          child.name
                      }</span></a>` +
                      (childList ? "</summary>" : "") +
                      childList +
                      (childList ? "</details>" : "") +
                      `</li>`
                  );
              }, "")}</ul>`
            : "";
    }
    const rootChildList = listChild(root);
    return (
        `<li>` +
        (rootChildList ? "<details><summary>" : "") +
        `<a href="${url_for(root.path)}"><span>${root.name}</span></a>` +
        (rootChildList ? "</summary>" : "") +
        rootChildList +
        (rootChildList ? "</details>" : "") +
        `</li>`
    );
});
