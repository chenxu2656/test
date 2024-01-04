var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入.env
require('dotenv').config()
// 连接数据库
require('./model/tools/connectDatabase')
// 用户操作
const User = require('./routes/User');
// 文章操作
const ems = require('./routes/ems')
// 文件夹操作
const emi = require('./routes/emi')
const errhandle = require('./middleware/errhandle')
var app = express()
// 允许跨域 否则 前台请求可能会报错
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    next()
  });
app.use(logger('dev'));
// 处理json数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// token 校验中间件
// app.use(require('./middleware/tokenCheck'))
app.use('/api/user', User);
app.use('/api/ems',ems)
app.use('/api/emi',emi)
app.use(errhandle)
module.exports = app;
