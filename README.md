
**Prepare environment**

```vim
> npm install
> bower install
> cd bower_components/highlight
> npm install
> node tools/build.js -t all
```

**Use case**

Use marked basic api
```vim
> node test1-basic
```

Use Highlight
```vim
> node test2-highlight
> node test3-highlight
```

Use MathJax for LaxTex
```vim
> node test4-mathJax
```

Use Highlight & MathJax
```vim
> node test5-combine
```

***

**Extend Marked Functional**
- Add `[TOC]`
- Add parse meta header,such as:

```
---
title: readme
tags: marked,extend
description:article meta headers
---
```

```vim
> node test6-extend
```

**Final Effect**
```vim
> node test7-extend-final
```