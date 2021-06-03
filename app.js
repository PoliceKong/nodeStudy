//引入需要的依赖文件
const express = require('express'); //服务器包
const logger = require('morgan'); //日志包
const cors = require('cors'); //跨域访问包
const route = require('./routers/index');

//初始化依赖文件
logger.format('morgan-log', '[morgan-log] :method :url :status');
const myapp = express();
const mycors = cors();
const port = 3000;

//使用依赖文件
myapp.use(logger('morgan-log'));
myapp.use(mycors); //实现服务器允许跨域访问
myapp.use(express.static(__dirname + './src')); //定义服务器的静态资源目录
myapp.use(express.json()); //设置读取json的环境

//路由拦截器函数
route(myapp);

//监听网络请求
myapp.listen(port, () => {
  'use strict';
  console.log('服务器启动成功' + 'http://localhost :3000');
});
