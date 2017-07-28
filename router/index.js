exports.init = function (app) {
	var wechat_cfg = require('../config/wechat.cfg');
	var http = require('http');
	var cache = require('memory-cache');
	var sha1 = require('sha1'); //签名算法
	var signature = require('../sign/signature');
	var User = require('../models/user');
	
	app.get('/stat',function(req,res){
		res.render('stat');
	});

	app.get('/ch0',function(req,res){
		res.render('ch0');
	});

	app.get('/ch1',function(req,res){
		//var url = req.protocol + '://' + req.host + req.path;
		// var url = req.protocol + '://' + req.host + req.originalUrl; //获取当前url
		// signature.sign(url,function(signatureMap){
		// 	signatureMap.appId = wechat_cfg.appid;
		// 	res.render('index',signatureMap);
		// });
		res.render('ch1');
	});

	app.get('/ch2',function(req,res){
		res.render('ch2');
	});

	app.get('/ch3',function(req,res){
		res.render('ch3');
	});

	app.get('/ch4',function(req,res){
		res.render('ch4');
	});

	app.get('/ch5',function(req,res){
		res.render('ch5');
	});

	app.get('/ch6',function(req,res){
		res.render('ch6');
	});

	app.get('/ch7',function(req,res){
		res.render('ch7');
	});

	app.get('/ch8',function(req,res){
		res.render('ch8');
	});

	app.get('/ch9',function(req,res){
		res.render('ch9');
	});

	app.get('/ch10',function(req,res){
		res.render('ch10');
	});

	app.get('/ch11',function(req,res){
		res.render('ch11');
	});

	app.get('/ch12',function(req,res){
		res.render('ch12');
	});

	app.get('/ch13',function(req,res){
		res.render('ch13');
	});

	app.get('/ch14',function(req,res){
		res.render('ch14');
	});

	app.get('/ch15',function(req,res){
		res.render('ch15');
	});

	app.get('/ch16',function(req,res){
		res.render('ch16');
	});

	app.post('/sign',function(req,res){
		//var url = req.protocol + '://' + req.host + req.path;
		// var url = req.protocol + '://' + req.host + req.originalUrl; //获取当前url
		signature.sign(req.body.url,function(signatureMap){
			signatureMap.appId = wechat_cfg.appid;
			signatureMap.url = req.body.url;
			res.send(signatureMap);
		});
	});

	// app.post("/addFeedback", function(req, res){
	//   var date = new Date();
	//   var fs = require('fs');
	//   var stream = fs.createWriteStream('./static/feedback.txt', {
	// 	  flags: 'a',
	// 	  encoding: 'utf8',
	//   });
	//   stream.once('open', function(fd) {
	//     stream.write(JSON.stringify(req.body)+",");
	//     stream.end();
	//   });
	//   res.json(204);
	// });


	// app.post("/addStat", function(req, res){
	//   var date = new Date();
	//   var fs = require('fs');
	//   var stream = fs.createWriteStream('./static/stats.txt', {
	//   	  flags: 'a',
	// 	  encoding: 'utf8',
	//   });
	//   stream.once('open', function(fd) {
	//     stream.write(JSON.stringify(req.body)+",");
	//     stream.end();
	//   });
	//   res.json(204);
	// });

	app.post("/addStat", function(req, res){
		var user = new User({
	        path: req.body.path,
	        device: req.body.device,
		    time: req.body.time,
		    hour: req.body.hour,
		    network: req.body.network,
		    score: req.body.score
		});
	  	console.log(req.body)
        user.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: "user profile is updated"})
        })
	});

	app.get("/getStat", function(req, res){
        User.find({},function (err, user) {
            if (err)
                res.send(err);
            else
            	res.json(user)
        })
	});

	app.get("/getRank", function(req, res){
        User.find({},function (err, user) {
            if (err)
                res.send(err);
            else{
            	var scoreList = []
            	for(index in user){
            		scoreList.push(user[index].score)
            	}
            	var rank = scoreList.sort(function(a, b){
            		return b-a
            	}).indexOf(parseInt(req.query.score))
            	res.json({"rank": rank, "total":scoreList.length})
            }
        })
	});
};
