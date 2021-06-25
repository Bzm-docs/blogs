# vuepress使用

```fortran
---
title: first page in category1
date: 2021-5-28
tags:
 - vuepress
categories:
 -  vuepress
---
```

## sidebar

```js
module.exports ={
    //分模块管理
    '/docs/test/': require("../docs/test/sidebar"),
}
```

```js
module.exports = [
    '', //README.md

    //分组
    {
        title: 'group1',
        collapsable: true,  //是否可折叠
        children: [
            'theme',
            'plugin',
        ]
    },
]
```

