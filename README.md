# 异步编程方案

 >1. 回调
 >2. Promise 对象
 >3. async await
   
## 回调
(1) 对于回调函数 我们用Jquery的ajax获取数据时 都是以回调函数方式获取的数据

```
$.get(url, (data) => {
    console.log(data)
)
```

(2) 如果说当我们需要发送多个异步请求, 并且每个请求之间需要相互依赖, 那这时我们只能以嵌套方式来解决,造成 "回调地狱"
```
$.get(url, data1 => {
    console.log(data1)
    $.get(data1.url, data2 => {
        console.log(data1)
    })
})

```

**这样一来，在处理越多的异步逻辑时，就需要越深的回调嵌套，这种编码模式的问题主要有以下几个：**

>1. 代码逻辑书写顺序与执行顺序不一致，不利于阅读与维护。
>2. 异步操作的顺序变更时，需要大规模的代码重构。
>3. 回调函数基本都是匿名函数，bug 追踪困难。
>4. 回调函数是被第三方库代码（如上例中的 ajax ）而非自己的业务代码所调用的，造成了 IoC 控制反转。


## Promise 处理多个相互关联的异步请求
 > **定义：** Promise是抽象异步处理对象以及对其进行各种操作的组件
 
 >**功能**：可以将复杂的异步处理轻松地进行模式化

 **推荐资料**

 > [JavaScript Promise迷你书](http://liubin.org/promises-book/#__3)
 
 >[ECMAScript6 入门 -- Promise](http://es6.ruanyifeng.com/#docs/async)

### 方法
>`Pomise.then`

>`Pomise.catch`

>`Pomise.resolve`

>`Pomise.reject`

>`Pomise.all`

>`Pomise.race()`

 示例代码： `promise.js`
 

## async 和 await 结合Promise 使用
>async 函数，使得异步操作变得更加方便

>async 函数是什么？一句话，它就是 Generator 函数的语法糖。

示例：依次次读取两个文件 `async.js`

## 需求
> - 多个接口串行发送 `index.html`
> - 所接口完成后，才进行下一步操作 `promise.html`





