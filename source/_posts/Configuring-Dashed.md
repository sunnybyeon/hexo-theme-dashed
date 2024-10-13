---
title: Configuring Dashed
date: 2023-10-27 23:43:03
categories:
    - Documentation
---

You can configure Dashed with settings in the theme config file. For more information about theme config files, please check [Configuration | Hexo](https://hexo.io/docs/configuration#Alternate-Theme-Config "Configuration Documentation for Hexo - Alternate Theme Config").

## Favicon

The favicon for your blog. Defaults to nothing.

```YAML _config.dashed.yml
favicon: /favicon.svg
```

## Cover

The cover image for the Home page. Defaults to nothing.

```YAML _config.dashed.yml
cover: /cover.png
```

## Menu

### Home Page

The menu list for the Home page. Defaults to the following.

The Tags, Categories, Archives page path depends on the `tag_dir`, `category_dir`, and the `archive_dir` value in the `_config.yml` file.

```YAML _config.dashed.yml
menu:
    Posts: /posts
    Tags: /tags
    Categories: /categories
    Archives: /archives
```

### Header

The menu list for the header. Defaults to the `menu` option.

```YAML _config.dashed.yml
header_menu:
    Posts: /posts
    Tags: /tags
    Categories: /categories
    Archives: /archives
```

## Category Depth

The depth of which to display categories on the Posts page. Defaults to 1.

```YAML _config.dashed.yml
posts_category_depth: 1
```

## Do Not Show Common Parent Categories

_Added in `v1.4.0`._

Whether or not to show common parent categories when listing posts under the category. Defaults to `true`.

```YAML _config.dashed.yml
do_not_show_parent_category: true
```

<figure class="config-figure">
    <div>
        {% img /images/do_not_show_parent_category_true.png %}
        {% img /images/do_not_show_parent_category_false.png %}
    </div>
    <figcaption>True <span style="color: grey;">vs</span> False</figcaption>
</figure>
<style>
    .config-figure {
        margin: 0;
    }
    .config-figure div {
        display: flex;
    }
    .config-figure div img {
        min-width: 0;
    }
    .config-figure figcaption {
        font-size: 0.9rem;
        text-align: center;
        color: #4d4d4d;
    }
</style>
