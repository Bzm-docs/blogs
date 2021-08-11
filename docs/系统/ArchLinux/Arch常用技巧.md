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



[使用rdesktop远程连接Windows（Failed to connect, CredSSP required by server (check if server has disabled old TLS versions, if yes use -V option) .）](https://blog.csdn.net/qq_37274323/article/details/82086031)

