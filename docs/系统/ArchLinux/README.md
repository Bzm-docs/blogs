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

# 引言

## 参考资料

- [Arch Linux下需要清理垃圾吗？](https://zhuanlan.zhihu.com/p/164947206)



## My Arch

### Ranger

| 快捷键  | 作用                                      |
| ------- | ----------------------------------------- |
| []      | 上下移动父文件夹                          |
| H，L    | 历史记录中退回，滚回                      |
| S       | 终端进入该文件夹                          |
| M       | 新建文件夹                                |
| Shift+1 | 调出shell                                 |
| zh      | 显示隐藏文件                              |
| zf      | 过滤                                      |
| o       | 排序（如os，按文件大小排序）              |
| cw      | 重命名文件                                |
| a       | 重命名文件（光标文件后缀前）              |
| A       | 重命名文件（光标文件名最后）              |
| v       | 选中所有（空格单个选中或取消选中）（）    |
| y       | 复制相关                                  |
| p       | 粘贴相关                                  |
| d       | 删除相关                                  |
| dU      | 文件夹大小                                |
| C       | 压缩文件（选中输入压缩名称）              |
| X       | 解压缩文件（yy复制要解压的文件，X解压缩） |

### st

| 快捷键       | 作用 |      |
| ------------ | ---- | ---- |
| Ctrl+Shift+C | 复制 |      |
| Ctrl+Shift+V | 粘贴 |      |
|              |      |      |

修改透明度：`config.h`文件中的

```shell
/* bg opacity */
float alpha = 0.75;
```



### dwn

| 快捷键       | 作用 |      |
| ------------ | ---- | ---- |
| Ctrl+Shift+C | 复制 |      |
| Ctrl+Shift+V | 粘贴 |      |
|              |      |      |



### fzf

[模糊搜索神器fzf](https://segmentfault.com/a/1190000011328080)

| 快捷键 | 作用                   |      |
| ------ | ---------------------- | ---- |
| CTRL-T | 打开fzf窗口            |      |
| CTRL-R | 列出history命令        |      |
| ALT-C  | 列出当前文件夹下的目录 |      |

