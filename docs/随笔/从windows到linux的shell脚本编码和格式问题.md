# 从windows到linux的shell脚本编码和格式问题

## 问题

![image-20201103111937470](media/从windows到linux的shell脚本编码和格式问题.assets/image-20201103111937470.png)

> 没有这样的文件或目录？？明明是存在的

然后打开脚本发现，文件格式居然是dos!因为是在idea编写，然后上传上去的。

![image-20201103112137068](media/从windows到linux的shell脚本编码和格式问题.assets/image-20201103112137068.png)

## 解决

只需要设置文件格式`:set ff=unix`就好

![image-20201103112559385](media/从windows到linux的shell脚本编码和格式问题.assets/image-20201103112559385.png)

查询文件格式  `:set ff`