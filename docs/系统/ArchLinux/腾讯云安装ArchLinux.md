---
date: 2021-07-28
autoIgnore: false
autoSort: 1000
categories:
 - 系统
tags:
 - ArchLinux
isShowComments: true
publish: true
---

# 腾讯云安装ArchLinux

### 下载镜像至根目录

```shell
cd /
```

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/archlinux-2021.07.01-x86_64.iso
```

```shell
mv arch* arch.iso
```

### 编辑GRUB配置文件，加入 arch.iso 启动项

部分系统的该文件路径为 /boot/grub2/grub.cfg

```shell
vim /boot/grub/grub.cfg
```

```
 set timeout=600
 menuentry "Archlinux Live (x86_64)" {
     insmod iso9660
     set isofile=/arch.iso
     loopback lo0 ${isofile}
     linux (lo0)/arch/boot/x86_64/vmlinuz-linux archisolabel=ARCH_202107 img_dev=/dev/vda1 img_loop=${isofile} earlymodules=loop
     initrd (lo0)/arch/boot/x86_64/initramfs-linux.img
 }
```



