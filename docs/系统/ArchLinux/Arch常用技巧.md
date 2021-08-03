---
date: 2021-08-02
autoIgnore: false
autoSort: 1000
categories:
 - 系统
tags:
 - ArchLinux
isShowComments: true
publish: true
---

# Arch常用技巧

### pacman

清理系统中无用的依赖包

```shell
pacman -R $(pacman -Qtdq)
```

