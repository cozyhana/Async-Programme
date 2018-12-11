/**
 * ajax 是异步的，但是一个接口的参数会需要使用另一个接口返回的数据。
 * 回调：增加了函数的嵌套深度也造成一定的逻辑混乱
 * 困境：一个接口的参数会需要使用另外几个接口返回的数据
 * 回调：就会造成回调地狱
 */

/**
 * 异步编程解决方案 Promise
 * 优势：比传统的解决方案——回调函数和事件，更合理和更强大
 * 
 */

/**
 *then
 *promise.then(undefined, onRejected) 
 */
// var promise = new Promise(function (resolve, reject) {
//   resolve("传递给then的值");
// });
// promise.then(function (value) {
//   console.log('value:', value);
// }

/**
 *catch
 *promise.then(undefined, onRejected) 
 */
// var promise = new Promise(function (resolve, reject) {
//   // resolve("传递给then的值");
//   reject("传递给catch的值");
// });
// promise.then(function (value) {
//   console.log('value:', value);
// }).catch(function (error) {
//   console.error('error:', error);
// });

/**
 * Promise.resolve()
 * 根据接收到的参数不同，返回不同的promise对象  
 * 大概分为三类:
 * -接收到promise对象参数的时候: 返回的还是接收到的promise对象
 * -接收到thenable类型的对象的时候: 返回一个新的promise对象，这个对象具有一个 then 方法
 * -接收的参数为其他类型的时候（包括JavaScript对或null等）: 返回一个将该对象作为值的新promise对象
 */

// var taskName = "task 1";
// var obj = {
//   "name": "cozy"
// };
// asyncTask(JSON.stringify(obj)).then(function (result) {
//   console.log("result:", result)
// }).catch(function (error) {
//   console.log("error:", error)
// })

// function asyncTask(name) {
//   return Promise.resolve(name).then(function (result) {
//     return "Done!" + result
//   })
// }

/**
 * Promise.reject(object)
 * 和Promise.resolve不同的是，即使Promise.reject接收到的参数是一个promise对象，该函数也还是会返回一个全新的promise对象 
 */
// var r = Promise.reject(new Error("error"));
// console.log(r === Promise.reject(r));// false

/**
 * Promise.all([])
 * 生成并返回一个新的promise对象
 * 参数传递promise数组中所有的promise对象都变为resolve的时候，该方法才会返回，新创建的promise则会使用这些promise的值。
 * 如果参数中的任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象。
 */
// var promise = new Promise(function (resolve, reject) {
//   setTimeout(reject(1), 1)
// })
// var p1 = promise.then(function (value) {
//   return value
// }),
//   p2 = Promise.resolve(2),
//   p3 = Promise.resolve(3);
// Promise.all([p1, p2, p3]).then(function (results) {
//   console.log(results);  // [1, 2, 3]
// }).catch(function (error) {
//   console.log(error)
// });


/**
 * Proimse.race([])
 * 生成并返回一个新的promise对象。
 * 参数 promise 数组中的任何一个promise对象如果变为resolve或者reject的话，该函数就会返回，并使用这个promise对象的值进行resolve或者reject。
 */
// var promise = new Promise(function (value) {
//   setTimeout(resolve(1), 1000)
// })
// var p1 = promise
//   .then(function (result) {
//     return result
//   })
//   .catch(function (error) { }),
//   p2 = Promise.resolve(2),
//   p3 = Promise.resolve(3);

// Promise.race([p1, p2, p3])
//   .then(function (results) {
//     console.log('results:', results);
//   })
//   .catch(function (error) {
//     console.log('error:', error)
//   })

