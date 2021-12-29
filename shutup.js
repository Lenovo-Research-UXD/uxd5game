var express = require('express');
const fs = require('fs');
const path = require('path');

const https = require('https');

var router = express.Router();
var jade = require('jade');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var configDB = require('./config/db');

var app = express();

app.set('view engine', 'jade'); // 设置模板引擎
app.set('views', './views'); // 设置模板相对路径(相对当前目录)

app.locals.basedir = './';

var port = 3001;

mongoose.connect(configDB.url, function (err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful!');
  }
});

//中间件定义
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ secret: 'app_1' }));

const index = require('./router/index');
app.use('/', index);

//静态资源
app.use(express.static('./static'));

const options = {
  key: fs.readFileSync('./static/_assets/certificate/xiaohuiai.key'),
  cert: fs.readFileSync('./static/_assets/certificate/xiaohuiai.crt'),
};

var httpsServer = https.createServer(options, app);

//启动服务
httpsServer.listen(port, function () {
  console.log('服务启动成功！请访问 https://localhost:' + port + '/ar');
});
