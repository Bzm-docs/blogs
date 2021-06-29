---
title: README
date: 2019-08-08
isShowComments: true
publish: false
---

这个是摘要666

<!-- more -->

# README

[[toc]]

## Front Matter

```yaml
---
title: 烤鸭的做法
date: 2021-05-08
autoIgnore: false
autoSort: 1000
#autoGroup-1: 数组方法
categories:
 - 烹饪
tags:
 - 烤
isShowComments: true
publish: true
sticky:
- 1
---
```

##  自定义容器（默认主题）

```markdown
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::

##  代码块中的行高亮

~~~markdown
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

- 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`

## Markdown语法

`代码块`

**加粗**

<u>下划线</u>

*斜体*

![image-20210601151241151](media/README.assets/image-20210601151241151.png)

[Maven](/docs/hou-duan/java/maven)
