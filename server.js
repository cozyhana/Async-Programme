var express = require('express');
var app = express();
const server = require('http').createServer(app)
var bodyParser = require('body-parser');
var path = require('path');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.json()

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})
app.get('/promise.html', function (req, res) {
  res.sendFile(__dirname + "/" + "promise.html");
})
app.use(urlencodedParser);
app.post('/index', function (req, res) {
  setTimeout(() => { res.end('index') }, 4000)
})
app.post('/user', function (req, res) {
  setTimeout(() => { res.end('user') }, 3000)
})
app.post('/pwd', function (req, res) {
  res.end('pwd')
})

server.listen(12345)
console.log('success')
