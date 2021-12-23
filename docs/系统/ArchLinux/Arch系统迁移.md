---
date: 2022-01-24
autoIgnore: false
autoSort: 1000
categories:
  - 系统
tags:
  - ArchLinux
isShowComments: true
publish: true
---

# Arch 系统迁移到固态

## 问题

### 固态无法识别

硬盘模式需要改为ahci

[关于主板的硬盘模式中 IDE、AHCI 和 RAID 模式的区别](https://www.52help.net/hkb/347.mhtml)

### 没有启动条目

在某些主板安装完成后，你会发现没有启动条目。这是因为某些主板的 UEFI 固件在显示 UEFI NVRAM 引导条目之前，需要在特定的位置存放可引导文件，不支持自定义存放 `efi` 文件

## 参考资料

- [Arch Linux 系统迁移到全新的 SSD 固态硬盘](https://poemdear.com/2019/10/31/arch-linux-%E7%B3%BB%E7%BB%9F%E8%BF%81%E7%A7%BB%E5%88%B0%E5%85%A8%E6%96%B0%E7%9A%84ssd%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98/)
