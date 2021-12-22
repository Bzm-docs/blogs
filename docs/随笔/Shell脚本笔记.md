# Shell脚本笔记

###### 检测yum是否可用

```shell
# 检测yum是否可用
[ $(yum repolist | awk '/repolist/{print$2}' | sed 's/,//') -eq 0 ] && echo 'your yum has problem' && exit 2
```



###### 配置本地yum源

```shell
#!/bin/bash

mkdir /etc/yum.repos.d/centos-bak
mv /etc/yum.repos.d/CentOS-* /etc/yum.repos.d/centos-bak/  
touch /etc/yum.repos.d/dvd.repo     

mkdir /opt/centos     
mount /dev/sr0 /opt/centos   
echo "/dev/sr0  /opt/centos     iso9660 defaults        0 0">>/etc/fstab

cat <<eee >/etc/yum.repos.d/dvd.repo
[centos]
name=centos
baseurl=file:///opt/centos
gpgcheck=0
eee

yum clean all    
yum repolist
```

###### 配置网络yum

```shell
#!/bin/bash

mkdir /etc/yum.repos.d/centos-bak
mv /etc/yum.repos.d/CentOS-* /etc/yum.repos.d/centos-bak/
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
yum clean all 
```



```shell
#!/bin/bash
read_file='/root/configuration-list'

echo "读取文件 ${read_file} 中..."

name=`awk -F = '/name/{print $2}' $read_file `

echo ${name}
```

###### case语法

```shell
while true;
	do
	    read -p "请输入要执行的操作编号:" num
        case $num in
        1)
         InstallJdkAndTomcat
         ;;
         2)
         InstallMysql
          ;;
         3)
         InstallNodeJS
          ;;
        9)
          echo "jj"
          ;;
        0)
          exit
          ;;
        *)
            echo "请输入存在编号操作"
        esac
	done
```

获得当前函数名

```shell
$FUNCNAME 得到当前函数名

${FUNCNAME[1]} 得到上一层函数名 如果上层没有函数调用 则为空
```



###### 从一个文件读取内容

```shell
#! /bin/bash
filename="/test/filename.txt"
cat>"${filename}"<<EOF
hello world
6666
EOF
```

###### 判断是否成功

```shell
if [[ $? == 0 ]];
    then
        echo "安装成功"
    else
        echo "安装失败"
    fi
```

######  判断服务是否启动

```shell
#!/bin/bash
#检查服务状态，是否安装
read -p "请输入要检测的服务：" SERVICE
netstat -anp | grep $SERVICE &> /dev/null
if [ $? -eq 0 ]
then
  	echo "$SERVICE服务已经启动！"
else
  	rpm -q $SERVICE &> /dev/null
 
  	if [ $? -eq 0 ]
  	then
		echo "$SERVICE服务已安装，正在启动...."
      	service  $SERVICE  start
  	else
		echo "该服务未安装！"
 	fi
fi
```
