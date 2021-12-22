## Git学习

### 1、Git简介

`Git`是一个**开源的分布式版本控制系统**，可以有效、高速地处理从很小到非常大的项目版本管理。



[git添加/删除远程仓库](https://blog.csdn.net/zhezhebie/article/details/78761417)

[Git同步本地项目到GitHub](https://www.jianshu.com/p/7c836f2d5c66)

[git push 免密码](https://todebug.com/Tips/)

[git status 显示中文和解决中文乱码](https://blog.csdn.net/u012145252/article/details/81775362)

[Git命令详解](https://juejin.im/post/5cdea2d5f265da1b91636122)

[Git的撤销和回滚命令总结](https://www.jianshu.com/p/38921d19ba0a)

##### 1、Clone 项目到本地

```shell
git clone https://gitee.com/BuZM/test.git
```

##### 2、查看远程仓库

```shell
git remote -v
```

##### 3、git add

-   `git add .` 操作的对象是当前目录下的所有变更（增+改+删），`.` 表示当前目录。
-   `git add -A` 操作的对象是整个工作区的所有变更（增+改+删），无论当前位于哪个目录下。
-   `git add -u` 操作的对象是整个工作区已经跟踪的变更（update: 只包括更新和删除，不包括新增），无论当前位于哪个目录下。

```shell
git add -A
```

##### 4、git push

`git push` 命令会把本地版本库的git对象上传到远程版本库，并用本地分支引用更新远程版本库对应分支的引用。

```shell
git push

$ git push -u origin master（分支名）
```

##### 5、git pull

```
git pull origin master
```



##### 6、 git restore

```shell
git restore --worktree .
```

7、git remote

```shell
git remote add origin 
```



#### 高效寻找开源项目

```markdown
# 按照项目名/仓库名搜索（大小写不敏感）
in:name xxx 
# 按照README搜索（大小写不敏感）
in:readme xxx
# 按照description搜索（大小写不敏感）
in:description xxx
# stars数大于xxx
stars:>xxx
# forks数大于xxx
forks:>xxx
# 编程语言为xxx
language:xxx
# 最新更新时间晚于YYYY-MM-DD
pushed:>YYYY-MM-DD
```



## 🐞



