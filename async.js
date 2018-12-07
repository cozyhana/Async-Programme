/**
 * 异步函数 同步运行
 */

/**
 * async
 * 含义：generator 的语法糖 
 */
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data)
    });
  });
};

// const gen = function* () {
//   yield readFile('./1.txt')
//     .then(function (value) {
//       console.log(value.toString())
//     });
//   yield readFile('./2.txt')
//     .then(function (value) {
//       console.log(value.toString())
//     });
// };

// var hw = gen()

// hw.next()
// hw.next()



const asyncReadFile = async function () {
  const f1 = await readFile('./1.txt');
  const f2 = await readFile(f1);
  console.log(f1.toString());
  console.log(f2.toString());
};
asyncReadFile();

/**
 * 基本用法
 * async函数返回一个 Promise 对象，
 * ----可以使用then方法添加回调函数。
 * ----当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 */
// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }

// asyncPrint('hello world', 1000);

// async function f() {
//   throw new Error('出错了');
// }

// f().catch(
//   v => console.log(v),
//   e => console.log(e)
// )