---
title: "如何使用 Jacman 主题"
categories:
  - Jekyll
tags:
  - Jekyll
  - Jacman
date: 2015-09-20
read_time: true
comments: true
share: true
related: true
toc: true
description: "Jacman 是一款扁平化，有着响应式设计的 Jekyll 主题。本文介绍 Jacman 主题的配置指南与常见问题。"
---

## 主题介绍

Jekyll-Jacman 是为 [Jekyll](http://jekyllrb.com) 设计的一款清新且具有响应式的主题，拥有更丰富的特性并支持了很多的国内服务。Jacman 始于 [Jacman](https://github.com/wuchong/jacman) 移植而来。

<!-- more -->

## 配置指南

Jacman 主题提供了丰富的配置属性，可以实现您对主题的自定义。配置文件 `_config.yml` 位于主题根目录下。

```
##### 菜单
menu:
  主页: /
  归档: /archives
  关于: /about

#### 控件
widgets:
- category
- tag
- links
- rss

#### RSS
rss: /atom.xml

#### 图片相关
imglogo:
  enable: true
  src: img/logo.png
favicon: img/favicon.ico
apple_icon: img/jacman.jpg
author_img: img/author.jpg
banner_img: img/banner.jpg

close_aside: false

#### 首页相关
index:
  expand: true
  excerpt_link: Read More

#### 作者信息
author:
  name: ## 作者名
  intro_line1:  "Hello ,I'm Larry Page in Google."
  intro_line2:  "This is my blog,believe it or not."

#### 目录
toc:
  article: true
  aside: true

#### 友情链接
links:
  码农圈: https://coderq.com,一个面向程序员交流分享的新一代社区
  Jark's Blog: http://wuchong.me

#### 评论
duoshuo_shortname:
disqus_shortname:

#### 分享按钮
jiathis:
  enable: false
  id:
  tsina:

#### 网站统计
google_analytics:
  enable: false
  id:
  site:
baidu_tongji:
  enable: false
  sitecode:
cnzz_tongji:
  enable: false
  siteid:

#### 杂项
ShowCustomFont: true
fancybox: true
totop: true

#### 自定义搜索
google_cse:
  enable: false
  cx:
baidu_search:
  enable: false
  id:
  site: http://zhannei.baidu.com/cse/search
tinysou_search:
  enable: false
  id: "4ac092ad8d749fdc6293"
```

### 属性功能

- **菜单 menu**：默认没有启用 `/tags` 和 `/categories` 页面，如果需要启用请在博客目录下分别建立 `tags` 和 `categories` 文件夹，每个文件夹中分别包含一个 `index.md` 文件。

- **控件 widgets**：提供了 7 种小工具，包括标签、分类、RSS、友情链接、微博秀。

- **图片相关 Image**：可以设置网站相关图片，例如网站图标（`favicon`）、网站 logo（`imglogo`）、作者头像（`author_img`）。

- **首页显示模式 Index**：支持卡片式和文章展开式两种模式。

- **目录 toc**：是否启用在文章中或侧边栏中的目录功能。

- **评论 comments**：支持多说和 Disqus 评论系统。

- **数学公式 mathjax**：支持 LaTeX 数学公式，在 front-matter 中加 `mathjax: true` 即可。

- **返回顶部 totop**：右下角返回顶部按钮。

## 常见问题

- **Q：图片默认都是居左的，我怎么设置能让图片居中呢？**
  > 使用 `<img src="" style="display:block;margin:auto"/>` 的 HTML 标签。

- **Q：如何建立一篇图片类文章（Gallery Post）？**
  > 新建 Markdown 文件，将 `front-matter` 的 `layout` 改为 `photo`，并添加 `photos` 列表。

- **Q：为什么修改了配置文件/发表了博文，解析出来的却是乱码呢？**
  > 请将你的配置文件/markdown 文件保存成 `UTF-8` 格式。
