/**
 * 异步函数 同步运行
 */

/**
 * async 依次读取两个文件
 */
// const fs = require('fs');

// const readFile = function (fileName) {
//   return new Promise(function (resolve, reject) { //结合Promise
//     fs.readFile(fileName, function (error, data) {
//       if (error) return reject(error);
//       resolve(data)
//     });
//   });
// };

// const asyncReadFile = async function () {
//   const f1 = await readFile('./1.txt');
//   const f2 = await readFile(f1);
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

// asyncReadFile();

