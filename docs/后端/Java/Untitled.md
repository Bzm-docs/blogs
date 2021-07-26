---
date: 2021-07-22
autoIgnore: false
autoSort: 1000
#autoGroup-1: 数组方法
categories:
  - 后端
tags:
  - Java
isShowComments: true
publish: true
---

# DO,DTO,VO,POJO

## 为什么会出现这些O？

我们知道，这些 O 不管叫什么名字，其本质都还是对象（Object），既然本质都一样，为什么非要给他们套上各种马甲？

- 编程工程化的发展，出现一套合理的体系
- 项目结构更加清晰

> 让软件编程更加合理、更加规范、更加高效

## 有哪些 O？

### DAO

DAO（Data Access Objects）：数据访问对象，和上面那些 O 不同的是，其功能是用于进行数据操作的。通常不会用于描述数据实体

### PO

PO（Persistant Object）：持久对象，一个 PO 的数据结构对应着库中表的结构，表中的一条记录就是一个 PO 对象

### VO

VO（ View Object）：显示层对象，通常是 Web 向模板渲染引擎层传输的对象

## 参考文章

- [DO,DTO,VO,POJO 敖丙还不知道？](https://mp.weixin.qq.com/s/yUveVZ3QHxXMaxbm4ryHXQ)