var wechat_cfg = require('../config/wechat.cfg');
var cache = require('memory-cache');
var sha1 = require('sha1'); //签名算法
var signature = require('../sign/signature');
var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/stat',function(req,res){
	res.render('stat');
});

router.get('/ch0',function(req,res){
	res.render('ch0');
});

router.get('/ch1',function(req,res){
	res.render('ch1');
});

router.get('/ch2',function(req,res){
	res.render('ch2');
});

router.get('/ch3',function(req,res){
	res.render('ch3');
});

router.get('/ch4',function(req,res){
	res.render('ch4');
});

router.get('/ch5',function(req,res){
	res.render('ch5');
});

router.get('/ch6',function(req,res){
	res.render('ch6');
});

router.get('/ch7',function(req,res){
	res.render('ch7');
});

router.get('/ch8',function(req,res){
	res.render('ch8');
});

router.get('/ch9',function(req,res){
	res.render('ch9');
});

router.get('/ch10',function(req,res){
	res.render('ch10');
});

router.get('/ch11',function(req,res){
	res.render('ch11');
});

router.get('/ch12',function(req,res){
	res.render('ch12');
});

router.get('/ch13',function(req,res){
	res.render('ch13');
});

router.get('/ch14',function(req,res){
	res.render('ch14');
});

router.get('/ch15',function(req,res){
	res.render('ch15');
});

router.get('/ch16',function(req,res){
	res.render('ch16');
});

router.get('/ar',function(req,res){
	res.render('ar');
});

router.post('/sign',function(req,res){
	//var url = req.protocol + '://' + req.host + req.path;
	// var url = req.protocol + '://' + req.host + req.originalUrl; //获取当前url
	signature.sign(req.body.url,function(signatureMap){
		signatureMap.appId = wechat_cfg.appid;
		signatureMap.url = req.body.url;
		res.send(signatureMap);
	});
});

router.post("/addStat", function(req, res){
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

router.post("/submitForm", function(req, res){
	var form = new FormData({
		client_name:req.body.client_name,
		city:req.body.city,
		contact_method:req.body.contact_method,
		contact_info:req.body.contact_info
	});
	console.log(req.body);
	form.save(function(err) {
		if(err) res.send(err);
		res.json({message: "form submitted"});
	});
});

router.get("/getStat", function(req, res){
    User.find({},function (err, user) {
        if (err)
            res.send(err);
        else
        	res.json(user)
    })
});

router.get("/getRank", function(req, res){
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

router.get('/count',function(req,res){
	var total
	res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
	})
	
	setInterval(function () {
		User.find({},function (err, user) {
			total = user;
	    })
		res.write("data: " + JSON.stringify(total) + "\n\n");
    }, 1000);
});

module.exports = router;

