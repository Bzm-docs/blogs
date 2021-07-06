---
date: 2020-04-08
autoIgnore: false
autoSort: 1000
# 1. autoGroup-1: 数组方法
categories:
  - 前端
tags:
  - JavaScript
isShowComments: true
publish: true
---

# ES6 模块化

前端模块化是前端工程化的基石。时下，大前端时代中对模块的运用更是无处不在。

## 1.1. 概述

## 1.2. export 命令

### 1.2.1. 导出变量

```js
export var a = "123";
```

相对上面，更推荐使用下面方式

```js
var b = "bbb";
export { b };
```

### 1.2.2. 导出函数

```js
export function test(content) {
    console.log(content)
```

### 1.2.3. 导出类

```js
export class Person {
  run() {
    console.log("在奔跑");
  }
}
```

### 1.2.4. export default

某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名

> export default 在同一个模块中，不允许同时存在多个

```js
export default function() {
  console.log("export default");
}
```

::: details 导入的时候就可以自己命名了

```js
import my from "./a1.js";
my();
```

:::

## 1.3. import 命令

### 1.3.1. 导入变量

```js
import { a } from "./a1.js";
console.log(a);
```

### 1.3.2. 导入函数

```js
import { test } from "./a1.js";
test("hello");
```

### 1.3.3. 导入类

```js
import { Person } from "./a1.js";
const p = new Person();
p.run();
```

### 1.3.4. 模块的整体加载

有时候，需要导入的比较多的，可以使用*来指定一个对象，所有输出值都加载到这个对象上。

```js
import * as my from './a1.js';
my.test('as');

const p = new my.Person();
p.run();
```

