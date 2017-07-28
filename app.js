var express = require('express'),
	jade = require('jade'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	cookieSession = require('cookie-session'),
	mongoose = require('mongoose'),
	configDB = require('./config/db');

var app = express();

app.set('view engine', 'jade'); // 设置模板引擎
app.set('views', './views');  // 设置模板相对路径(相对当前目录)

app.locals.basedir = './'

var port = 3000;

mongoose.connect(configDB.url, function (err) {
    if (err) {
        console.log("connection error", err);

    } else {
        console.log('connection successful!');
    }
});

//中间件定义
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieSession({secret: 'app_1'}));
app.use(express.logger());
app.use(express.compress());

//静态资源
app.use(express.static('./static'));

//启动服务
app.listen(port, function() {
	console.log('服务启动成功！请访问 http://localhost:' + port);
});


//启动路由分发
require('./router/index').init(app);

