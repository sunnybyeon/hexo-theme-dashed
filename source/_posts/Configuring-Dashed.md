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
