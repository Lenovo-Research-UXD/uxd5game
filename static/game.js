var stage, drawStage, w, h, loader, startLoader, lateLoader, endLoader;
var background, waterSheet, explodeSheet, painting, music, startCanvas, mouth_explode, star, bgm, handleMove, initalScore, loadText, star_number_sm, star_number, loadLine;
var currentX, currentY, currentWidth, touchX, touchY;
var hasDrawn = false,
	hasClicked = false;
var scaleY, ratio;
var peopleLists = [], timeoutList = [];
var lifeValue = 10;
var ROLE_SCALE = 650 * 0.8 / 300;
var score = 0;
var mouth_gray;
var oldArray = [];
var networkType = "unknown";
var feedback = {},
	stats = {};
var timeoutDev, timeoutPM, timeoutBoss;
var pageUrl = window.location.href.split('#')[0];
var pagePath = window.location.pathname;
var trainee, pm, dev, boss;
var textIndex = 0;
var hasStarted = false;
const ACTOR_WIDTH = 300;
const heightScale = 1157/1280;
var shareTitle, shareContent, shareImage, result_bg_dark, hor2ver;
var startTime, endTime;


if(!window.localStorage.hasOwnProperty("enableTutorial")){
	window.localStorage.setItem("enableTutorial", true)
}

ratio = 1157 / 720;

//console.log(window.innerHeight, window.innerWidth)

var loadCanvas = document.getElementById("loadCanvas");
loadCanvas.height = window.innerHeight;
loadCanvas.width = window.innerHeight / ratio;
//loadCanvas.width = window.innerWidth;
stage = new createjs.Stage(loadCanvas);

h = stage.canvas.height;
//w = h / ratio
scaleY = h / 1157;

console.log(navigator.userAgent)

if(navigator.userAgent.indexOf("iPhone")<0 && navigator.userAgent.indexOf("Android")<0){
	w = h / ratio
	var windowWidth = window.innerWidth;
	$('.game-board').css("left", (windowWidth-w)/2)
}
else if(window.innerHeight < window.innerWidth){ 
    alert("竖着玩姿势更帅！")
    window.location.href = location.href+'?time='+((new Date()).getTime());
}
else{
	w = stage.canvas.width;
	$('.game-board').css({"width":"100%", "height":"100%"})
}


stats.path = pagePath;

console.log(window.localStorage.getItem("enableTutorial"))

switch (pagePath){
	case "/ch0":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch1":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch2":
		shareTitle = "我就喜欢你看不惯我，又打不死我的样子！";
		shareContent = "快点我呀，你好坏哦";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch3":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch4":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch5":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch6":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch7":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch8":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch9":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch10":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch11":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch12":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch13":
		shareTitle = "墙裂推荐！设计师的专属游戏";
		shareContent = "这是丧逼设计师开发的最不靠谱游戏，已火爆设计圈。系好安全带，我们要起飞了。";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch14":
		shareTitle = "秘笈：点击口水后，结果竟然变成这样!";
		shareContent = "墙裂推荐！设计师的专属游戏";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch15":
		shareTitle = "我妈玩完这个游戏，准备转行做设计了！";
		shareContent = "你妈喊你回家做设计～";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
	case "/ch16":
		shareTitle = "我就喜欢你看不惯我，又打不死我的样子！";
		shareContent = "快点我呀，你好坏哦";
		shareImage = "http://uxd5-game.iego.cn/_assets/art/share_icon.png";
		break;
}
function configureSharing(result){
	$.ajax({
	type: "POST",
	url: "/sign",
	data: {
		url: pageUrl
	},
	success: function(data) {
		if(result){
			var spendTime = endTime-startTime
			var rankPercentage = parseInt((result.total-result.rank)*100/result.total)
			if(rankPercentage>=99)
				shareTitle = "没想到！我竟撑了"+(spendTime/1000).toFixed(2)+"秒，成功跻身全球前"+rankPercentage+"%,名列"+result.rank+"。"
			else
				shareTitle = "没想到！我竟撑了"+(spendTime/1000).toFixed(2)+"秒，超过全球"+rankPercentage+"%的设计师。"
		}

		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: data.appId, // 必填，公众号的唯一标识
			timestamp: data.timestamp, // 必填，生成签名的时间戳
			nonceStr: data.noncestr, // 必填，生成签名的随机串
			signature: data.signature, // 必填，签名，见附录1
			jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareQZone',
					'getNetworkType'
				] // 必填，需要使用的JS接口列表，
		});

		wx.ready(function() {

			wx.getNetworkType({
				success: function(res) {
					networkType = res.networkType; //stats defined in game.js
				}
			});

			wx.onMenuShareTimeline({
				title: shareTitle, // 分享标题
				link: pageUrl,
				imgUrl: shareImage // 分享图标
			});
			// 获取“分享给朋友”按钮点击状态及自定义分享内容接口
			wx.onMenuShareAppMessage({
				title: shareTitle,
				desc: shareContent,
				link: pageUrl,
				imgUrl: shareImage,
				type: 'link', // 分享类型,music、video或link，不填默认为link
			});

			wx.onMenuShareQQ({
			    title: shareTitle, // 分享标题
			    desc: shareContent, // 分享描述
			    link: pageUrl, // 分享链接
			    imgUrl: shareImage, // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			       // 用户取消分享后执行的回调函数
			    }
			});

			wx.onMenuShareQZone({  
	            title: shareTitle, // 分享标题  
	            desc: shareContent, // 分享描述  
	            link: pageUrl, // 分享链接  
	            imgUrl: shareImage, // 分享图标  
	            success: function () {   
	               // 用户确认分享后执行的回调函数  
	            },  
	            cancel: function () {   
	               // 用户取消分享后执行的回调函数  
	            }  
        	});

		});

		wx.error(function(res) {
			JSON.stringify(res)
		});

	},

	error: function(err) {
		console.log(err)
			//请求出错处理
	}
});
}

configureSharing(false);

function init() {

	var loadManifest = [{
		src: "load_text.png",
		id: "load_text"
	},{
		src: "load_lines.png",
		id: "load_lines"
	},{
		src: "load_text2.png",
		id: "load_text2"
	},{
		src: "logo.png",
		id: "logo"
	},{
		src: "hor2ver.png",
		id: "hor2ver"
	},{
		src: "result_bg_dark.png",
		id: "result_bg_dark"
	}];

	var manifest = [{
		src: "audio/bgm.mp3",
		id: "bgm"
	}, {
		src: "audio/appear.mp3",
		id: "appear"
	}, {
		src: "audio/drop.mp3",
		id: "drop"
	}, {
		src: "audio/explode.wav",
		id: "explode"
	}, {
		src: "audio/open_mouth.mp3",
		id: "open_mouth"
	}, {
		src: "audio/result.mp3",
		id: "result"
	}, {
		src: "audio/score.mp3",
		id: "score"
	}, {
		src: "audio/shutup.mp3",
		id: "shutup"
	}, {
		src: "start_mouth.png",
		id: "start-mouth"
	}, {
		src: "start_actor.png",
		id: "start-actor"
	}, {
		src: "title.png",
		id: "title"
	}, {
		src: "start_guide.png",
		id: "guide"
	}, {
		src: "explode.png",
		id: "explode"
	}, {
		src: "wording.png",
		id: "wording"
	}, {
		src: "actors.png",
		id: "actor"
	}, {
		src: "title.png",
		id: "title"
	}, {
		src: "intern.png",
		id: "intern"
	}, {
		src: "intern2.png",
		id: "intern2"
	}, {
		src: "boss-1.png",
		id: "boss-1"
	}, {
		src: "boss-2.png",
		id: "boss-2"
	}, {
		src: "boss-3.png",
		id: "boss-3"
	}, {
		src: "boss-4.png",
		id: "boss-4"
	}, {
		src: "boss-5.png",
		id: "boss-5"
	}, {
		src: "boss-6.png",
		id: "boss-6"
	}, {
		src: "dev-1.png",
		id: "dev-1"
	}, {
		src: "dev-2.png",
		id: "dev-2"
	}, {
		src: "dev-3.png",
		id: "dev-3"
	}, {
		src: "pm-1.png",
		id: "pm-1"
	}, {
		src: "pm-2.png",
		id: "pm-2"
	}, {
		src: "pm-3.png",
		id: "pm-3"
	}, {
		src: "bg.png",
		id: "background"
	},{
		src: "bg_dark.png",
		id: "background_dark"
	},{
		src: "painting.png",
		id: "painting"
	}, {
		src: "painting2.png",
		id: "painting2"
	}, {
		src: "painting3.png",
		id: "painting3"
	}, {
		src: "painting_explode.png",
		id: "painting_explode"
	}, {
		src: "painting_explode2.png",
		id: "painting_explode2"
	}, {
		src: "painting_explode3.png",
		id: "painting_explode3"
	}, {
		src: "dribble_big.png",
		id: "dribble_big"
	}, {
		src: "dribble_small.png",
		id: "dribble_sm"
	}, {
		src: "water.png",
		id: "water"
	}, {
		src: "music.png",
		id: "music"
	}, {
		src: "title.png",
		id: "title"
	}, {
		src: "increased_score.png",
		id: "increased_score"
	}, {
		src: "star_number.png",
		id: "star_number"
	}, {
		src: "0_b.png",
		id: "0_b"
	}, {
		src: "1_b.png",
		id: "1_b"
	}, {
		src: "2_b.png",
		id: "2_b"
	}, {
		src: "3_b.png",
		id: "3_b"
	}, {
		src: "4_b.png",
		id: "4_b"
	}, {
		src: "5_b.png",
		id: "5_b"
	}, {
		src: "6_b.png",
		id: "6_b"
	}, {
		src: "7_b.png",
		id: "7_b"
	}, {
		src: "8_b.png",
		id: "8_b"
	}, {
		src: "9_b.png",
		id: "9_b"
	},{
		src: "tutorial_icon_1.png",
		id: "tutorial_icon_1"
	},{
		src: "tutorial_icon_2.png",
		id: "tutorial_icon_2"
	},{
		src: "tutorial_txt_1.png",
		id: "tutorial_txt_1"
	},{
		src: "tutorial_txt_2.png",
		id: "tutorial_txt_2"
	}];

	startLoader = new createjs.LoadQueue(false);
	startLoader.loadManifest(loadManifest, true, "_assets/art/");
	startLoader.addEventListener("complete", function() {

	result_bg_dark = new createjs.Bitmap(startLoader.getResult("result_bg_dark"));

	//detect the orientation of mobile device
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
	    if (window.orientation === 90 || window.orientation === -90){ 	        
	        alert("竖着玩姿势更帅！")
	    }
	}, false);

		var loadTextSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [startLoader.getResult("load_text")],
			"frames": {
				"regX": 0,
				"height": 240,
				"count": 0,
				"regY": 0,
				"width": 360
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"play": [0, 7, null, 1]
			}
		});

		var loadLineSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [startLoader.getResult("load_lines")],
			"frames": {
				"regX": 0,
				"height": 579,
				"count": 0,
				"regY": 0,
				"width": 360
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"play": [0, 23, "play", 1]
			}
		});

		
		loadLine = new createjs.Sprite(loadLineSheet,"play");
		loadResource(loadLine, "loadLine", 0, 0, 2, false, true)
		var loadText = new createjs.Sprite(loadTextSheet);
		loadResource(loadText, "loadText", 0, 160*scaleY, 2, false, true)

		var loadText2 = new createjs.Bitmap(startLoader.getResult("load_text2"));
		var logo = new createjs.Bitmap(startLoader.getResult("logo"));

		loadResource(loadText2, "loadText2", (w - loadText2.getBounds().width * scaleY) / 2, (1280 - 350) * scaleY, 1, false, true);
		loadResource(logo, "logo", (w - logo.getBounds().width * scaleY) / 2, (1280 - 200) * scaleY, 1, false, true)

		var loadTextInterval = setInterval(function() {
			textIndex++;
			loadText.gotoAndStop(textIndex)
		}, 5000)

		loader = new createjs.LoadQueue(false);
		loader.installPlugin(createjs.Sound);

		var progress;

		loader.on("progress", function(event) {
			//console.log("Progress:", loader.progress, event.progress);
			if (progress)
				stage.removeChild(progress)
			progress = new createjs.Text(Math.floor(loader.progress * 100) + "%", "30px Arial", "#ffffff");
			loadResource(progress, "progress", (w - progress.getBounds().width * scaleY) / 2, 885 * scaleY, 1, false, true)
				//mouth_gray.x = initialMouthGrayX + mouth_gray.getTransformedBounds().width * loader.progress
		});

		loader.addEventListener("complete", function() {

			setTimeout(function(){
				clearInterval(loadTextInterval)
				loadLine.stop();
				handleComplete();
				$("#loadCanvas").css({
					"opacity":"0",
					"transition": "opacity 2s",
					"-moz-transition": "opacity 2s",
					"-webkit-transition": "opacity 2s",
					"-o-transition": "opacity 2s"
				})
			}, 1000)

			setTimeout(function(){
				$("#loadCanvas").hide();
			}, 3000)
			
		});

		loader.loadManifest(manifest, true, "_assets/art/");

		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 24;
		createjs.Ticker.on("tick", tick);

		function tick() {
			stage.update();
		}

	});
}


function updateScore(score) {
	if (oldArray.length == 0)
		stage.removeChild(initalScore)

	var scoreArray = score.toString().split("").reverse(),
		initial_num_x = w - 10 * scaleY;

	// console.log(oldArray)
	for (index in oldArray) {
		console.log(stage.getChildIndex(oldArray[index]))
			//if(stage.getChildByName(i+"_b"))
		stage.removeChild(oldArray[index])
	}

	oldArray = []

	for (index in scoreArray) {
		var number = new createjs.Bitmap(loader.getResult(scoreArray[index] + "_b"));
		oldArray.push(number)
		initial_num_x = initial_num_x - number.getBounds().width * scaleY
		loadResource(number, scoreArray[index] + "_b", initial_num_x, 20 * scaleY, 1, false, true)
	}
}

function handleMouseDown(event) {
	oldPt = new createjs.Point(drawStage.mouseX, drawStage.mouseY);
	oldMidPt = oldPt.clone();
	drawStage.addEventListener("stagemousemove", handleMouseMove);

	touchX = drawStage.mouseX;
	touchY = drawStage.mouseY;

	currentX = drawStage.mouseX;
	currentY = drawStage.mouseY;

	checkTouchedDribble(touchX, touchY)
	checkTouchedVolume(touchX, touchY)
}

function handleMouseMove(event) {
	var midPt = new createjs.Point(oldPt.x + drawStage.mouseX >> 1, oldPt.y + drawStage.mouseY >> 1);
	drawingCanvas.graphics.clear().setStrokeStyle(30, 'round', 'round').beginStroke("#FFFFFF").moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

	oldPt.x = drawStage.mouseX;
	oldPt.y = drawStage.mouseY;
	oldMidPt.x = midPt.x;
	oldMidPt.y = midPt.y;
	drawStage.update();

	//checkTouchedDribble(drawStage.mouseX, drawStage.mouseY)
}

function handleMouseUp(event) {
	currentWidth = Math.abs(drawStage.mouseX - currentX)
	currentX = (drawStage.mouseX + currentX) / 2
	currentY = (drawStage.mouseY + currentY) / 2

	drawStage.removeEventListener("stagemousemove", handleMouseMove);
	drawStage.clear();

	checkTouchedPeople(currentX, currentY, currentWidth)
	//checkTouchedDribble(currentX, currentY)
}

function handleComplete() {
	// $("#loadCanvas").hide();
	//Start page canvas
	$("#startCanvas").show();
	startCanvas = document.getElementById("startCanvas");
	startCanvas.height = window.innerHeight;
	startCanvas.width = window.innerHeight / ratio;
	stage = new createjs.Stage(startCanvas);

	var startActorSheet = new createjs.SpriteSheet({
		framerate: 30,
		"images": [loader.getResult("start-actor")],
		"frames": {
			"regX": 0,
			"height": 546,
			"count": 0,
			"regY": 0,
			"width": 360
		},
		// define two animations, run (loops, 1.5x speed) and jump (returns to run):
		"animations": {
			"play": [0, 2, "play", 0.1]
		}
	});

	var startMouthSheet = new createjs.SpriteSheet({
		framerate: 30,
		"images": [loader.getResult("start-mouth")],
		"frames": {
			"regX": 0,
			"height": 170,
			"count": 0,
			"regY": 0,
			"width": 270
		},
		// define two animations, run (loops, 1.5x speed) and jump (returns to run):
		"animations": {
			"play": [0, 25, null, 1]
		}
	});

	explodeSheet = new createjs.SpriteSheet({
		framerate: 24,
		"images": [loader.getResult("explode")],
		"frames": {
			"regX": 0,
			"height": 450,
			"count": 0,
			"regY": 0,
			"width": 400
		},
		// define two animations, run (loops, 1.5x speed) and jump (returns to run):
		"animations": {
			"explode": [0, 16, null, 1]
		}
	});


	var startActor = new createjs.Sprite(startActorSheet, "play");
	var startMouth = new createjs.Sprite(startMouthSheet, "play");
	var title = new createjs.Bitmap(loader.getResult("title"));
	var wording = new createjs.Bitmap(loader.getResult("wording"));
	var guide = new createjs.Bitmap(loader.getResult("guide"));


	loadResource(loadLine, "loadLine", 0, 0, 2, false, true)
	loadResource(startActor, "startActor", 0, h - startActor.getBounds().height * scaleY * 2 * heightScale, 2, false, true);
	loadResource(startMouth, "startMouth", (w + startMouth.getBounds().width * scaleY*2)/ 2, 492 * scaleY * heightScale, 2, true, true);
	startMouth.gotoAndStop(0);
	loadResource(title, "title", (w - title.getBounds().width * scaleY * 2) / 2, 107 * scaleY * heightScale, 2, false, true);

	//var mouthWidth = startMouth.x + startMouth.getTransformedBounds().width - guide.getBounds().width*scaleY;
	var mouthWidth = startMouth.getTransformedBounds().width;

	loadResource(guide, "guide", mouthWidth, 750 * scaleY * heightScale, 2, false, true);
	loadResource(wording, "wording", (w - wording.getBounds().width * scaleY * 2) / 2, h - 68 * scaleY - wording.getBounds().height * scaleY * 2 * heightScale, 2, false, true);

	createjs.Tween.get(guide, {
			loop: true
		})
		.to({
			x: (w - startMouth.getBounds().width * scaleY * 2) / 2
		}, 2000, createjs.Ease.quartInOut)

	handleMove = function(event) {
		var currentX;
		guide.visible = false;
		if (event.changedTouches)
			currentX = event.changedTouches[0].clientX
		else
			currentX = stage.mouseX

		console.log(currentX)

		var fullMouthWidth = mouthWidth + guide.getTransformedBounds().width
		if (currentX > w-fullMouthWidth && currentX < w) {
			var ratio = (fullMouthWidth-currentX) / fullMouthWidth
			startMouth.gotoAndStop(parseInt(25 * ratio));
			if (ratio > 0.7) {
				stage.removeAllEventListeners();
				$("#startCanvas").unbind();
				$("#startCanvas").hide();
				if (!hasStarted) {
					startGame();
					hasStarted = true;
				}
			}
		}
	}

	stage.addEventListener("stagemousedown", function(event) {
		guide.visible = false;
		stage.addEventListener("stagemousemove", handleMove)
	});

	stage.addEventListener("stagemouseup", function(event) {
		guide.visible = true;
		stage.removeEventListener("stagemousemove", handleMove);
	})

	// for touch event
	startCanvas.addEventListener("touchstart", function() {
		guide.visible = false;
		startCanvas.addEventListener("touchmove", handleMove, false);
	}, false);
	startCanvas.addEventListener("touchend", function() {
		guide.visible = true;
		startCanvas.removeEventListener("touchmove", handleMove);
	}, false);
	startCanvas.addEventListener("touchcancel", function() {
		guide.visible = true;
		startCanvas.removeEventListener("touchmove", handleMove);
	}, false);


	function startGame() {
		lifeValue = 10;
		score = 0;
		feedback = {};
		stats = {};
		stats.network = networkType;
		stats.path = pagePath;
		stats.device = navigator.userAgent;
		oldArray = [];
		peopleLists = [];
		$("#testCanvas").show()
		$("#drawCanvas").show()
		startTime = (new Date()).getTime()

		if (!bgm) {
			bgm = createjs.Sound.play("bgm", {
				loop: -1
			});
			bgm.volume = bgm.volume * 0.7;
		} else {
			bgm.play();
		}

		//Start game canvas
		var canvas_1 = document.getElementById("testCanvas");
		canvas_1.height = window.innerHeight;
		canvas_1.width = window.innerHeight / ratio;
		//stage.clear();
		stage = new createjs.Stage(canvas_1);


		var canvas_2 = document.getElementById("drawCanvas");
		canvas_2.height = window.innerHeight;
		canvas_2.width = window.innerHeight / ratio;

		if(!drawStage){
			drawStage = new createjs.Stage(canvas_2);
			// grab canvas width and height for later calculations:		

			drawStage.autoClear = false;

			createjs.Touch.enable(drawStage);
			drawStage.enableDOMEvents(true);
			drawingCanvas = new createjs.Shape();

			drawStage.addEventListener("stagemousedown", handleMouseDown);
			drawStage.addEventListener("stagemouseup", handleMouseUp);

			drawStage.addChild(drawingCanvas);
			//drawStage.update();
		}
		
		// Add the initial elements to stage
		background = new createjs.Bitmap(loader.getResult("background_dark"));
		loadResource(background, "background", 0, 0, 1, false, true);

		waterSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [loader.getResult("water")],
			"frames": {
				"regX": 0,
				"height": 180,
				"count": 0,
				"regY": 0,
				"width": 180
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"fade": [0, 21, null, 1]
			}
		});

		var musicSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [loader.getResult("music")],
			"frames": {
				"regX": 0,
				"height": 180,
				"count": 0,
				"regY": 0,
				"width": 180
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"play": [0, 13, "play", 1]
			}
		});

		var internSheet = new createjs.SpriteSheet({
			"framerate": 24,
			"images": [loader.getResult("intern"), loader.getResult("intern2")],
			"frames": {
				"regX": 0,
				"height": 300,
				"count": 0,
				"regY": 0,
				"width": 300
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"run": [0, 15, null, 1],
				"speak": [16, 47, null, 1],
				"back": [15, 0, null, 1],
				"explode": [48, 68, null, 1],
			}
		});

		var bossSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [loader.getResult("boss-1"), loader.getResult("boss-2"), loader.getResult("boss-6"), loader.getResult("boss-3"), loader.getResult("boss-4"), loader.getResult("boss-5")],
			"frames": {
				"regX": 0,
				"height": 300,
				"count": 0,
				"regY": 0,
				"width": 300
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"run": [0, 15, null, 1],
				"speak": [16, 47, null, 1],
				"back": [15, 0, null, 1],
				"open": [48, 81, null, 1],
				"speak2": [82, 129, null, 1],
				"explode": [130, 150, null, 1],
			}
		});

		var pmSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [loader.getResult("pm-1"), loader.getResult("pm-2"), loader.getResult("pm-3")],
			"frames": {
				"regX": 0,
				"height": 300,
				"count": 0,
				"regY": 0,
				"width": 300
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"run": [0, 15, null, 1],
				"speak": [16, 47, null, 1],
				"back": [15, 0, null, 1],
				"explode": [48, 68, null, 1],
			}
		});

		var devSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [loader.getResult("dev-1"), loader.getResult("dev-2"), loader.getResult("dev-3")],
			"frames": {
				"regX": 0,
				"height": 300,
				"count": 0,
				"regY": 0,
				"width": 300
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"run": [0, 15, null, 1],
				"speak": [16, 47, null, 1],
				"back": [15, 0, null, 1],
				"explode": [48, 73, null, 1],
			}
		});


		paintSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [loader.getResult("painting"), loader.getResult("painting2"), loader.getResult("painting3"), loader.getResult("painting_explode"), loader.getResult("painting_explode2"), loader.getResult("painting_explode3")],
			"frames": {
				"regX": 0,
				"height": 340,
				"count": 0,
				"regY": 0,
				"width": 440
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"appear": [0, 0, null, 1],
				"dribble1": [1, 8, null, 1],
				"dribble2": [9, 16, null, 1],
				"dribble3": [17, 24, null, 1],
				"dribble4": [25, 32, null, 1],
				"dribble5": [33, 40, null, 1],
				"dribble6": [41, 48, null, 1],
				"dribble7": [49, 56, null, 1],
				"dribble8": [57, 64, null, 1],
				"dribble9": [65, 72, null, 1],
				"dribble10": [73, 80, "destory", 1],
				"destory": [81, 133, null, 1]
			}
		});


		trainee = new createjs.Sprite(internSheet);
		trainee.name = "trainee"
		pm = new createjs.Sprite(pmSheet);
		pm.name = "pm"
		dev = new createjs.Sprite(devSheet);
		dev.name = "dev"
		boss = new createjs.Sprite(bossSheet);
		boss.name = "boss"

		var endManifest = [{
			src: "button_again_1.png",
			id: "button_again_1"
		}, {
			src: "button_again_2.png",
			id: "button_again_2"
		}, {
			src: "button_share_1.png",
			id: "button_share_1"
		}, {
			src: "button_share_2.png",
			id: "button_share_2"
		}, {
			src: "flag_forwords.png",
			id: "flag_forwords"
		}, {
			src: "flag.png",
			id: "flag"
		}, {
			src: "number.png",
			id: "number"
		}, {
			src: "ending_bg.png",
			id: "ending_bg"
		}, {
			src: "star.png",
			id: "star"
		}, {
			src: "results.png",
			id: "results"
		}, {
			src: "score_title.png",
			id: "score_title"
		}, {
			src: "share_indicator.png",
			id: "share_indicator"
		}, {
			src: "introducing.png",
			id: "introducing"
		}, {
			src: "infor.png",
			id: "infor"
		}, {
			src: "close.png",
			id: "close"
		}];

		endLoader = new createjs.LoadQueue(false);
		endLoader.loadManifest(endManifest, true, "_assets/art/");

		var btnAgain_1, btnAgain_2, btnShare_1, btnShare_2, btnFeedback_1, btnFeedback_2, flagBody, flag, 
		star_1, star_2, number_1, number_2, number_3, number_4, score_title, results, share_indicator, introducing, infor, close;
		endLoader.addEventListener("complete", function() {
			var flagSheet = new createjs.SpriteSheet({
				framerate: 24,
				"images": [endLoader.getResult("flag")],
				"frames": {
					"regX": 0,
					"height": 210,
					"count": 0,
					"regY": 0,
					"width": 320
				},
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
				"animations": {
					"waving": [0, 24, null, 1]
				}
			});

			var resultsSheet = new createjs.SpriteSheet({
				framerate: 24,
				"images": [endLoader.getResult("results")],
				"frames": {
					"regX": 0,
					"height": 193,
					"count": 0,
					"regY": 0,
					"width": 208
				},
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
				"animations": {
					"calculate": [0, 14, null, 1]
				}
			});

			var starSheet = new createjs.SpriteSheet({
				framerate: 24,
				"images": [endLoader.getResult("star")],
				"frames": {
					"regX": 0,
					"height": 35,
					"count": 0,
					"regY": 0,
					"width": 35
				},
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
				"animations": {
					"blink": [0, 30, "blink", 1]
				}
			});

			var numberSheet = new createjs.SpriteSheet({
				framerate: 24,
				"images": [endLoader.getResult("number")],
				"frames": {
					"regX": 0,
					"height": 47,
					"count": 0,
					"regY": 0,
					"width": 38
				},
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
				"animations": {
					"set0": [0, 0, null, 1],
					"set1": [0, 1, null, 1],
					"set2": [0, 2, null, 1],
					"set3": [0, 3, null, 1],
					"set4": [0, 4, null, 1],
					"set5": [0, 5, null, 1],
					"set6": [0, 6, null, 1],
					"set7": [0, 7, null, 1],
					"set8": [0, 8, null, 1],
					"set9": [0, 9, null, 1],
				}
			});


			flag = new createjs.Sprite(flagSheet, "waving");
			star_1 = new createjs.Sprite(starSheet, "blink");
			star_2 = star_1.clone()
			star_3 = star_1.clone()
			number_1 = new createjs.Sprite(numberSheet);
			number_2 = number_1.clone();
			number_3 = number_1.clone();
			number_4 = number_1.clone();
			results = new createjs.Sprite(resultsSheet);

			btnAgain_1 = new createjs.Bitmap(endLoader.getResult("button_again_1"));
			btnAgain_2 = new createjs.Bitmap(endLoader.getResult("button_again_2"));
			btnShare_1 = new createjs.Bitmap(endLoader.getResult("button_share_1"));
			btnShare_2 = new createjs.Bitmap(endLoader.getResult("button_share_2"));
			flagBody = new createjs.Bitmap(endLoader.getResult("flag_forwords"));
			score_title = new createjs.Bitmap(endLoader.getResult("score_title"));
			share_indicator = new createjs.Bitmap(endLoader.getResult("share_indicator"));
			introducing = new createjs.Bitmap(endLoader.getResult("introducing"));
			infor = new createjs.Bitmap(endLoader.getResult("infor"));
			close = new createjs.Bitmap(endLoader.getResult("close"));
		})

		painting = new createjs.Sprite(paintSheet, "appear");

		// show the result page when the painting crashes

		painting.addEventListener("animationend", function() {

			if (painting.currentAnimation == "dribble10") {
				bgm.stop();
				for (index in peopleLists) {
					stage.removeChild(peopleLists[index]);
				}
				stage.removeAllEventListeners();
				clearTimeout(timeoutDev)
				clearTimeout(timeoutPM)
				clearTimeout(timeoutBoss)
			} else if (painting.currentAnimation == "destory") {
				endTime = (new Date()).getTime()

				stats.time = new Date().toLocaleString();
				stats.hour = new Date().toLocaleTimeString('en-US', {
					hour12: false
				}).substring(0, 2)
				stats.score = score;
				stats.network = networkType;
				stats.device = navigator.userAgent;
				$.ajax({
					url: '/addStat',
					type: 'POST',
					contentType: 'application/json',
					data: JSON.stringify(stats),
					dataType: 'json',
					success: function(res) {
						console.log(stats)
					},
					error: function() {
						console.log(stats);
						console.log("writing error!");
					}
				});

				setTimeout(function() {
					$("#testCanvas").hide();
					$("#drawCanvas").hide();
					showResult(score);
					$("#endCanvas").show();
				}, 2000);
			}
		})


		var calLevel = function(score) {
			if (score >= 0 && score <= 50) {
				results.gotoAndStop(14)
				shareTitle = "我在设计圈里是：啥也不是！";
				shareContent = "墙裂推荐！设计师的专属游戏";
			} else if (score > 50 && score <= 100) {
				results.gotoAndStop(13)
				shareTitle = "老板说我：你的上一份工作是快递小哥吗？";
				shareContent = "墙裂推荐！设计师的专属游戏";
			} else if (score > 100 && score <= 200) {
				results.gotoAndStop(12)
				shareTitle = "我在设计圈里是：新东方烹饪学校毕业的设计研究生";
				shareContent = "墙裂推荐！设计师的专属游戏";
			} else if (score > 200 && score <= 300) {
				results.gotoAndStop(11)
				shareTitle = "老板说我：设计做的不错，芙蓉姐姐答应嫁给你了";
				shareContent = "墙裂推荐！设计师的专属游戏";
			} else if (score > 300 && score <= 400) {
				results.gotoAndStop(10)
				shareTitle = "老板说我：骨骼惊奇，乃设计界的洪七公";
				shareContent = "墙裂推荐！设计师的专属游戏";
			} else if (score > 400 && score <= 450) {
				results.gotoAndStop(9)
				shareTitle = "老板说我：明明可以靠颜值吃饭，偏偏要用设计征服世界";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 450 && score <= 500) {
				results.gotoAndStop(8)
				shareTitle = "我在设计圈里是：江南皮革厂的首席设计师";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 500 && score <= 550) {
				results.gotoAndStop(7)
				shareTitle = "我在设计圈里是：蓝翔挖掘机学校毕业专业抠图师";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 550 && score <= 600) {
				results.gotoAndStop(6)
				shareTitle = "老板说我：设计做的不错，公司的设计总监快坐不住了";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 600 && score <= 700) {
				results.gotoAndStop(5)
				shareTitle = "我在设计圈里是：拉面师傅转行";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 700 && score <= 800) {
				results.gotoAndStop(4)
				shareTitle = "我在设计圈里是：吓尿别人的设计鬼手";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 800 && score <= 900) {
				results.gotoAndStop(3)
				shareTitle = "我在设计圈里是：后厂村设计院院士";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 900 && score <= 1200) {
				results.gotoAndStop(2)
				shareTitle = "我在设计圈里是：东莞妇联首席美工";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 1200 && score <= 1500) {
				results.gotoAndStop(1)
				shareTitle = "老板说我：距离首席设计师只差一个大嘴巴";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			} else if (score > 1500) {
				results.gotoAndStop(0)
				shareTitle = "我在设计圈里是：下一个乔布斯";
				shareContent = "墙裂推荐！设计师的专属游戏！";
			}
			$.ajax({
					url: '/getRank?score='+score,
					type: 'GET',
					contentType: 'application/json',
					dataType: 'json',
					success: function(res) {
						configureSharing(res);
					},
					error: function() {
						console.log("writing error!");
					}
				});
		}

		var showResult = function(score) {

			var endCanvas = document.getElementById("endCanvas");
			var end_explode = new createjs.Sprite(explodeSheet);
			var end_explode_2 = new createjs.Sprite(explodeSheet);
			
			endCanvas.height = window.innerHeight;
			endCanvas.width = window.innerHeight / ratio;
			stage = new createjs.Stage(endCanvas);

			var canvas = $("#endCanvas"),
				ctxWidth = canvas.attr("width"),
				ctxHeight = canvas.attr("height");

			//canvas.css("background-image", "url(" + $(endLoader.getResult("star_bg")).attr("src") + ")")
			stage = new createjs.Stage(canvas[0]);

			var endBackground = new createjs.Bitmap(endLoader.getResult("ending_bg"));
			loadResource(endBackground,"endBackground",0,0,2,false,true)

			loadResource(star_1, "star1", 20 * scaleY * 2, h / 2, 2, false, true)
			loadResource(star_2, "star2", w - 20 * scaleY - star_2.getBounds().width * scaleY * 2, h / 3, 2, false, true)
			loadResource(star_3, "star3", w - 50 * scaleY - star_2.getBounds().width * scaleY * 2, h / 1.5, 2, false, true)

			loadResource(flagBody, "flag-body", (w - flagBody.getBounds().width * scaleY * 2) / 2, -flagBody.getBounds().height * scaleY * 2 / 5, 2, false, true)
			loadResource(flag, "flag", (w - flag.getBounds().width * scaleY * 2) / 2, 4 * flagBody.getBounds().width * scaleY * 2 / 5 - 10, 2, false, true)
			flag.gotoAndPlay("waving")

			loadResource(score_title, "score_title", 160 * scaleY, 60 * scaleY, 1, false, true)
			loadResource(results, "results", 160 * scaleY, 327 * scaleY, 2, false, true)
			calLevel(score)

			createjs.Tween.get(flagBody)
				.to({
					y: 0
				}, 500, createjs.Ease.linear)

			createjs.Tween.get(flag)
				.to({
					y: flagBody.getTransformedBounds().height - 1
				}, 500, createjs.Ease.linear)
				.call(function() {
					var result = createjs.Sound.play("result");

					//var repeated_times = 2;

					loadResource(end_explode, "explode", w / 2, h / 2, 1.625, false, true);
					end_explode.gotoAndPlay("explode")
					var explode = createjs.Sound.play("explode");


					loadResource(end_explode_2, "explode", w / 2 - 300 * scaleY, h / 2 - 300 * scaleY, 1.625, false, true);
					end_explode_2.gotoAndPlay("explode")
					var explode = createjs.Sound.play("explode");


					end_explode.addEventListener("animationend", function() {
						loadResource(end_explode, "explode", w / 2 - 20 * (1 + 10 * Math.random() * scaleY), h / 2 + 10 * (1 + 15 * Math.random() * scaleY), 1.625, false, true);
						setTimeout(function() {
							end_explode.gotoAndPlay("explode")
						}, 500);
					})

					end_explode_2.addEventListener("animationend", function() {
						loadResource(end_explode_2, "explode", w / 2 - 300 * scaleY - 20 * (1 + 10 * Math.random() * scaleY), h / 2 + 10 * (1 + 15 * Math.random() * scaleY), 1.625, false, true);
						setTimeout(function() {
							end_explode_2.gotoAndPlay("explode")
						}, 1500);
					})
				})

			loadResource(btnShare_1, "btnShare_1", 36 * scaleY, h - (30 + btnShare_1.getBounds().height * scaleY * 2), 2, false, true)
			loadResource(btnShare_2, "btnShare_2", 36 * scaleY, h - (30 + btnShare_2.getBounds().height * scaleY * 2), 2, false, false)

			loadResource(btnAgain_1, "btnAgain_1", w - 36 * scaleY - btnAgain_1.getBounds().width * scaleY * 2, h - (30 + btnAgain_1.getBounds().height * scaleY * 2), 2, false, true)
			loadResource(btnAgain_2, "btnAgain_2", w - 36 * scaleY - btnAgain_2.getBounds().width * scaleY * 2, h - (30 + btnAgain_2.getBounds().height * scaleY * 2), 2, false, false)

			introducing.visible=false
			stage.addEventListener("stagemousedown", function() {
				var localCoor1 = btnAgain_1.globalToLocal(stage.mouseX, stage.mouseY)
				var localCoor2 = infor.globalToLocal(stage.mouseX, stage.mouseY)
				var localCoor3 = close.globalToLocal(stage.mouseX, stage.mouseY)
				var localCoor4 = introducing.globalToLocal(stage.mouseX, stage.mouseY)

				if (btnAgain_1.hitTest(localCoor1.x, localCoor1.y)) {
					btnAgain_2.visible = true
				}
				else if (infor.hitTest(localCoor2.x, localCoor2.y)) {
					introducing.visible=true
					infor.visible=false
					close.visible=true
					share_indicator.visible=false
				}
				else if (close.hitTest(localCoor3.x, localCoor3.y)) {
					introducing.visible=false
					infor.visible=true
					close.visible=false
					share_indicator.visible=true
				}
				else if (introducing.visible && introducing.hitTest(localCoor4.x, localCoor4.y)) {
					console.log(introducing.visible,localCoor4.x, localCoor4.y)
					if(localCoor4.x<360 && localCoor4.y>(890-80)){
					    window.location.href = 'http://research.lenovo.com?time='+((new Date()).getTime());
					}
					else if(localCoor4.x>380 && localCoor4.y>(1017-200)){
					    window.location.href = 'http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU3NjE0NDY5MA==#wechat_redirect';
					}
				}
				else{
					stage.removeChild(end_explode, end_explode_2)
					loadResource(result_bg_dark, "result_bg_dark", 0 ,0, 2, false, true)
					loadResource(share_indicator, "share_indicator", w-(share_indicator.getBounds().width+30)*scaleY ,4*scaleY, 1, false, true)
					loadResource(infor, "infor", 44*scaleY ,h-(infor.getBounds().height+50)*scaleY, 1, false, true)
					loadResource(introducing, "introducing", 46*scaleY ,98*scaleY, 1, false, false)
					loadResource(close, "close", w-(close.getBounds().width+46)*scaleY ,26*scaleY, 1, false, false)
				}
			})

			stage.addEventListener("stagemouseup", function() {
				var localCoor1 = btnAgain_1.globalToLocal(stage.mouseX, stage.mouseY)
				var localCoor2 = btnShare_1.globalToLocal(stage.mouseX, stage.mouseY)
				if (btnAgain_1.hitTest(localCoor1.x, localCoor1.y)) {
					btnAgain_2.visible = false
					$("#endCanvas").hide()
					startGame();
				}

				if (btnShare_1.hitTest(localCoor2.x, localCoor2.y)) {
					btnShare_2.visible = false;
					//stage.removeChild(end_explode, end_explode_2)
					//loadResource(result_bg_dark, "result_bg_dark", 0 ,0, 2, false, true)
					//loadResource(share_indicator, "share_indicator", w/2+50*scaleY ,30*scaleY, 1, false, true)

					// var content = prompt("欢迎吐槽:)");
					// if (content) {
					// 	feedback.timestamp = new Date().toLocaleString();
					// 	feedback.content = content;
					// 	feedback.score = score;

					// 	$.ajax({
					// 		url: '/addFeedback',
					// 		type: 'POST',
					// 		contentType: 'application/json;charset=utf-8',
					// 		data: JSON.stringify(feedback),
					// 		dataType: 'json',
					// 		success: function(res) {
					// 			confirm("感谢你宝贵的意见!")
					// 		},
					// 		error: function() {
					// 			console.log("writing error!");
					// 		}
					// 	});
					// }
				}
			})

			var numberWidth = number_1.getBounds().width;

			loadResource(number_1, "number_1", 160 * scaleY, 137 * scaleY, 2, false, true)
			loadResource(number_2, "number_2", (160 + (32 + numberWidth * 2) * 1) * scaleY, 137 * scaleY, 2, false, true)
			loadResource(number_3, "number_3", (160 + (32 + numberWidth * 2) * 2) * scaleY, 137 * scaleY, 2, false, true)
			loadResource(number_4, "number_4", (160 + (32 + numberWidth * 2) * 3) * scaleY, 137 * scaleY, 2, false, true)

			var scoreArray = score.toString().split("").reverse()

			if (scoreArray[0])
				number_4.gotoAndPlay("set" + scoreArray[0])
			else
				number_4.gotoAndPlay("set0")
			if (scoreArray[1])
				number_3.gotoAndPlay("set" + scoreArray[1])
			else
				number_3.gotoAndPlay("set0")
			if (scoreArray[2])
				number_2.gotoAndPlay("set" + scoreArray[2])
			else
				number_2.gotoAndPlay("set0")
			if (scoreArray[3])
				number_1.gotoAndPlay("set" + scoreArray[3])
			else
				number_1.gotoAndPlay("set0")

		}

		music = new createjs.Sprite(musicSheet, "play");

		var start_explode = new createjs.Sprite(explodeSheet, "explode");
		loadResource(start_explode, "start_explode", (w - start_explode.getBounds().width * scaleY * 2) / 2, (h - start_explode.getBounds().height * scaleY * 2) / 2, 2, false, true);
		start_explode.addEventListener("animationend", function() {
			stage.removeChild(start_explode)
		})
		var explode = createjs.Sound.play("explode");

		loadResource(painting, "painting", (w - painting.getBounds().width * scaleY * 2 * 0.9) / 2, h, 2, false, true);
		loadResource(music, "music", (w - music.getBounds().width * scaleY * 0.6), h - music.getBounds().height * scaleY * 0.6, 0.6, false, true);

		mouth_explode = new createjs.Sprite(explodeSheet)
		loadResource(mouth_explode, "mouth_explode", 0, 0, 1.625, false, false);


		initalScore = new createjs.Bitmap(loader.getResult("0_b"));
		loadResource(initalScore, "0_b", w - 100 * scaleY, 20 * scaleY, 1, false, true)

		star_number_sm = new createjs.Bitmap(loader.getResult("star_number"));
		loadResource(star_number_sm, "star_number_sm", w - 250 * scaleY, 20 * scaleY, 1, false, true)
		star_number = new createjs.Bitmap(loader.getResult("star_number"));
		loadResource(star_number, "star_number", 0, 0, 1.5, false, false)

		var increasedScoreSheet = new createjs.SpriteSheet({
			framerate: 24,
			"images": [loader.getResult("increased_score")],
			"frames": {
				"regX": 0,
				"height": 54,
				"count": 0,
				"regY": 0,
				"width": 123
			},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"add10": [0, 0, null, 1],
				"add20": [1, 1, null, 1],
				"add30": [2, 2, null, 1],
				"add40": [3, 3, null, 1]
			}
		});

		increased_score = new createjs.Sprite(increasedScoreSheet)
		loadResource(increased_score, "increased_score", 0, 0, 1, false, false)


		// intialize the tutorial
		function startTutorial() {
			window.localStorage.setItem("enableTutorial",false)
			var tutor = trainee.clone()
			peopleLists.push(tutor)
			loadResource(tutor, "tutor", -tutor.getBounds().width * scaleY * ROLE_SCALE / 3, 0, ROLE_SCALE, false, true);

			var tutorial_icon_1 = new createjs.Bitmap(loader.getResult("tutorial_icon_1"));
			var tutorial_icon_2 = new createjs.Bitmap(loader.getResult("tutorial_icon_2"));
			var tutorial_txt_1 = new createjs.Bitmap(loader.getResult("tutorial_txt_1"));
			var tutorial_txt_2 = new createjs.Bitmap(loader.getResult("tutorial_txt_2"));

			loadResource(tutorial_icon_1, "tutorial_icon_1", 140 * scaleY, 260 * scaleY, 0.8, false, true);
			loadResource(tutorial_icon_2, "tutorial_icon_2", (230+tutorial_txt_2.getBounds().width) * scaleY, 414 * scaleY, 1, false, true)
			loadResource(tutorial_txt_1, "tutorial_txt_1", 270 * scaleY, (280+tutorial_txt_1.getBounds().height) * scaleY, 1, false, true);
			loadResource(tutorial_txt_2, "tutorial_txt_2", 214 * scaleY, 390 * scaleY, 1, false, true)

			peopleComeOut(tutor, 300, true)
			createjs.Tween.get(painting)
				.to({
					y: h - painting.getBounds().width * scaleY * 0.77 * 2
				}, 1000, createjs.Ease.linear)

		}

		if(window.localStorage.getItem("enableTutorial")=="true")
			startTutorial();
		else{
			background.image = loader.getResult("background")
			createjs.Tween.get(painting)
				.to({
					y: h - painting.getBounds().width * scaleY * 0.77 * 2
				}, 1000, createjs.Ease.linear)
			loadActors(trainee.clone(), trainee.clone())
		}

	}
}

function peopleComeOut(role, duration, isLeft) {
	if (role) {
		var roleWidth = role.getTransformedBounds().width;
		var roleHeight = role.getTransformedBounds().height;

		var mouthExplodeWidth = mouth_explode.getTransformedBounds().width;
		var dribble_frequency,dribble_drop_duration;
		if(role.name=="trainee"){
			dribble_frequency=3
			dribble_drop_duration=1500
		}
		else if(role.name=="dev"){
			dribble_frequency=3
			dribble_drop_duration=1300
		}
		else if(role.name=="pm"){
			dribble_frequency=2
			dribble_drop_duration=1300
		}
		else if(role.name=="pm" || role.name=="boss"){
			dribble_frequency=2
			dribble_drop_duration=1100
		}
		
		var dribble_sm = new createjs.Bitmap(loader.getResult("dribble_sm")),
			dribble_sm_2 = dribble_sm.clone(),
			dribble_bg = new createjs.Sprite(waterSheet, "fade");
		
		role.dribbles = dribble_bg;

		var roleStartTo_x

		loadResource(dribble_sm, role.name + "dribble_sm", 0, 0, 1, false, false)
		loadResource(dribble_sm_2, role.name + "dribble_sm_2", 0, 0, 1, true, false)
		if (isLeft) {
			loadResource(dribble_bg, role.name + "dribble_bg", 0, 0, 1, false, false)
			if(role.name=="tutor" || isLeft)
				roleStartTo_x = -10*(1 + scaleY * Math.random())
			else
				roleStartTo_x = -110 * scaleY * Math.random()
		} else {
			loadResource(dribble_bg, role.name + "dribble_bg", 0, 0, 1, true, false)
			roleStartTo_x = w + 110 * scaleY * Math.random()
		}

		role.exploded = false;
		role.appeared = false;

		if (role.name == "boss")
			role.hasFirstShut = false;

		role.gotoAndPlay("run");
		var initial_y = role.y


		var rounds = 1
		role.addEventListener("change", function() {
			if (role.currentFrame == 1 && !role.appeared) {
				role.exploded = false;
				var appear = createjs.Sound.play("appear");
				createjs.Tween.get(role)
					.to({
						x: roleStartTo_x
					}, duration, createjs.Ease.backOut)
					.call(function(){
						role.appeared = true;
					})
			} else if (role.currentFrame == 20) {
				rounds++
				if (rounds % dribble_frequency == 0 && !role.exploded)
					dribbleDown(role)
			} else if (role.currentFrame == 83 && !role.exploded) {
				dribbleDown(role)
			} else if (role.currentAnimation == "explode") {
				role.exploded = true;
			}
		})

		role.addEventListener("animationend", function() {
			if (role.currentAnimation == "run") {
				role.gotoAndPlay("speak")
			} else if (role.currentAnimation == "speak") {
				role.gotoAndPlay("speak")
			} else if (role.currentAnimation == "open") {
				var open_mouth = createjs.Sound.play("open_mouth");
				role.gotoAndPlay("speak2");
			} else if (role.currentAnimation == "speak2") {
				role.gotoAndPlay("speak2");
			} else if (role.currentAnimation == "explode") {
				console.log("after exploded")
				explodeAction(role)
				rounds = 1
			}
		})

		function dribbleDown(role) {

			if (role!=undefined) {
				if (role.name != "tutor") {
					var dribble_bg_x;
					if (isLeft) {
						dribble_sm.x = role.x + roleWidth / 2 * 1.1;
						dribble_sm_2.x = role.x + roleWidth / 2 * 0.9;
						dribble_bg.x = role.x + roleWidth / 2 * 0.7;
						dribble_bg_x = w / 2 * 0.7;
					} else {
						dribble_sm.x = role.x - roleWidth / 2 * 0.8;
						dribble_sm_2.x = role.x - roleWidth / 2 * 1.1;
						dribble_bg.x = role.x - roleWidth / 3;
						dribble_bg_x = w / 2 * 1.3;
					}

					dribble_sm.y = role.y + roleHeight / 2;
					dribble_sm.rotation = -20
					dribble_sm.visible = true;
					dribble_sm.alpha = 1;
					createjs.Tween.get(dribble_sm)
						.to({
							x: dribble_sm.x * 1.1,
							y: dribble_sm.y + 20 * scaleY,
							alpha: 0
						}, dribble_drop_duration, createjs.Ease.linear)

					dribble_sm_2.y = role.y + roleHeight / 2;
					dribble_sm_2.rotation = 20
					dribble_sm_2.visible = true;
					dribble_sm_2.alpha = 1;
					createjs.Tween.get(dribble_sm_2)
						.to({
							x: dribble_sm_2.x * 0.9,
							y: dribble_sm.y + 20 * scaleY,
							alpha: 0
						}, dribble_drop_duration, createjs.Ease.linear)

					dribble_bg.y = role.y + roleHeight / 2 * 0.9;
					dribble_bg.visible = true;
					dribble_bg.gotoAndStop(0)
					createjs.Tween.get(dribble_bg)
						.to({
							x: dribble_bg_x,
							y: h * 0.7
						}, dribble_drop_duration, createjs.Ease.linear)
						.call(function() {
							dribble_bg.visible = false;
							var drop = createjs.Sound.play("drop");

							if (lifeValue > 0 && dribble_bg.currentFrame == 0) {
								lifeValue--;
								painting.gotoAndPlay("dribble" + (10 - lifeValue))
							}
						})
				}

			}

		}

		function explodeAction(role) {
			
			if (role.name != "tutor") {
				var role_x;
				if (isLeft) {
					mouth_explode.x = role.x;
					star_number.x = role.x + mouthExplodeWidth / 2;
					role_x = -roleWidth;


				} else {
					mouth_explode.x = role.x - roleWidth;
					star_number.x = role.x - roleWidth + mouthExplodeWidth / 2;
					role_x = w + roleWidth;
				}

				star_number.alpha = 1;
				star_number.scaleX = 1;
				star_number.scaleY = 1;

				star_number.y = role.y + mouthExplodeWidth / 2;
				star_number.visible = true;
				createjs.Tween.get(star_number)
					.to({
						x: w - 250 * scaleY,
						y: 20 * scaleY,
						alpha: 0.5,
						scaleX: 1 / 1.5,
						scaleY: 1 / 1.5
					}, 500, createjs.Ease.linear)
					.call(function() {
						var scoreSound = createjs.Sound.play("score");
						star_number.visible = false;
						increased_score.x = w / 2;
						increased_score.y = 20 * scaleY;
						increased_score.visible = true;
						createjs.Tween.get(increased_score)
							.to({
								y: 0,
								alpha: 0.5
							}, 800, createjs.Ease.linear)
							.call(function() {
								increased_score.visible = false
							})
						updateScore(score)
					})

				if (score == 50) {
					loadActors(dev.clone(), trainee.clone(), dev.clone(), trainee.clone())
				} else if (score == 100) {
					loadActors(pm.clone(), dev.clone(), pm.clone(), trainee.clone())
				} else if (score == 150) {
					loadActors(dev.clone(), pm.clone(), trainee.clone(), dev.clone())
				} else if (score == 200) {
					loadActors(pm.clone(), dev.clone(), boss.clone(), trainee.clone())
				} else if (score == 250) {
					loadActors(trainee.clone(), boss.clone(), dev.clone(), pm.clone())
				} else if (score == 400) {
					loadActors(boss.clone(), pm.clone(), dev.clone(), trainee.clone(), dev.clone(), trainee.clone())
				} else if (score == 450) {
					loadActors(pm.clone(), dev.clone(), boss.clone(), boss.clone(), trainee.clone(), dev.clone())
				} else if (score == 700) {
					loadActors(boss.clone(), pm.clone(), pm.clone(), dev.clone(), boss.clone(), boss.clone())
				} else if (score == 800) {
					loadActors(boss.clone(), dev.clone(), pm.clone(), boss.clone(), dev.clone(), pm.clone(), trainee.clone(), boss.clone())
				} else if (score == 1000) {
					loadActors(boss.clone(), boss.clone(), boss.clone(), boss.clone(), pm.clone(), pm.clone(), pm.clone(), pm.clone())
				}

				createjs.Tween.get(role)
					.to({
						x: role_x
					}, duration, createjs.Ease.cubicOut)
					.wait(1000 * (1 + Math.random()))
					.call(function() {
						role.appeared = false
						if (role.y >= initial_y)
							role.y = role.y - 100*scaleY * Math.random();
						else
							role.y = role.y + 100*scaleY * Math.random();
						role.gotoAndPlay("run");
					})
			}
			mouth_explode.y = role.y;
			mouth_explode.visible = true;
			mouth_explode.gotoAndPlay("explode");
			var explode = createjs.Sound.play("explode");

		}

	}
}

function loadActors(actor1, actor2, actor3, actor4, actor5, actor6, actor7, actor8) {
	
	for (index in peopleLists) {
		stage.removeChild(peopleLists[index])
	}
	for (index in timeoutList){
		clearTimeout(timeoutList[index])
	}
	peopleLists = [];
	timeoutList = [];
	if (arguments.length == 2) {
		peopleLists.push(actor1, actor2)
		console.log(peopleLists, timeoutList)
		loadResource(actor1, actor1.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.3*Math.random(), ROLE_SCALE, false, true);
		loadResource(actor2, actor2.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.3*Math.random(), ROLE_SCALE, true, true);
		stage.swapChildren(actor2, star_number_sm)

		timeoutList[0] = setTimeout(function() {
			peopleComeOut(actor1, 300, true)
		}, 1500)
		timeoutList[1] = setTimeout(function() {
			peopleComeOut(actor2, 300, false)
		}, 500)
	} else if (arguments.length == 4) {
		peopleLists.push(actor1, actor2, actor3, actor4)
		loadResource(actor1, actor1.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, false, true);
		loadResource(actor2, actor2.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.2+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor3, actor3.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, true, true);
		loadResource(actor4, actor4.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.2+0.1*Math.random()), ROLE_SCALE, true, true);
		stage.swapChildren(actor3, star_number_sm)
		timeoutList[0] = setTimeout(function() {
			peopleComeOut(actor1, 300, true)
		}, 500)
		timeoutList[1] = setTimeout(function() {
			peopleComeOut(actor2, 300, true)
		}, 1500)
		timeoutList[2] = setTimeout(function() {
			peopleComeOut(actor3, 300, false)
		}, 3000)
		timeoutList[3] = setTimeout(function() {
			peopleComeOut(actor4, 300, false)
		}, 3500)
	} else if (arguments.length == 6) {
		peopleLists.push(actor1, actor2, actor3, actor4, actor5, actor6)
		loadResource(actor1, actor1.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, false, true);
		loadResource(actor2, actor2.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.1+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor3, actor3.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.3+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor4, actor4.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, true, true);
		loadResource(actor5, actor5.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.1+0.1*Math.random()), ROLE_SCALE, true, true);
		loadResource(actor6, actor6.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.3+0.1*Math.random()), ROLE_SCALE, true, true);
		stage.swapChildren(actor4, star_number_sm)
		timeoutList[0] = setTimeout(function() {
			peopleComeOut(actor1, 300, true)
		}, 500)
		timeoutList[1] = setTimeout(function() {
			peopleComeOut(actor2, 300, true)
		}, 1500)
		timeoutList[2] = setTimeout(function() {
			peopleComeOut(actor3, 300, true)
		}, 2000)
		timeoutList[3] = setTimeout(function() {
			peopleComeOut(actor4, 300, false)
		}, 2500)
		timeoutList[4] = setTimeout(function() {
			peopleComeOut(actor5, 300, false)
		}, 3000)
		timeoutList[5] = setTimeout(function() {
			peopleComeOut(actor6, 300, false)
		}, 3500)
	} else if (arguments.length == 8) {
		peopleLists.push(actor1, actor2, actor3, actor4, actor5, actor6, actor7, actor8)
		loadResource(actor1, actor1.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, false, true);
		loadResource(actor2, actor2.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.1+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor3, actor3.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*0.1*Math.random(), ROLE_SCALE, true, true);
		loadResource(actor4, actor4.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.1+0.1*Math.random()), ROLE_SCALE, true, true);
		loadResource(actor5, actor5.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.2+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor6, actor6.name, -ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.2+0.1*Math.random()), ROLE_SCALE, false, true);
		loadResource(actor7, actor7.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.3+0.1*Math.random()), ROLE_SCALE, true, true);
		loadResource(actor8, actor8.name, w + ACTOR_WIDTH * scaleY * ROLE_SCALE / 3, h*(0.3+0.1*Math.random()), ROLE_SCALE, true, true);
		stage.swapChildren(actor3, star_number_sm)

		timeoutList[0] = setTimeout(function() {
			peopleComeOut(actor1, 300, true)
		}, 500)
		timeoutList[1] = setTimeout(function() {
			peopleComeOut(actor2, 300, true)
		}, 1000)
		timeoutList[2] = setTimeout(function() {
			peopleComeOut(actor3, 300, false)
		}, 1500)
		timeoutList[3] = setTimeout(function() {
			peopleComeOut(actor4, 300, false)
		}, 2000)
		timeoutList[4] = setTimeout(function() {
			peopleComeOut(actor5, 300, true)
		}, 2500)
		timeoutList[5] = setTimeout(function() {
			peopleComeOut(actor6, 300, true)
		}, 3000)
		timeoutList[6] = setTimeout(function() {
			peopleComeOut(actor7, 300, false)
		}, 3500)
		timeoutList[7] = setTimeout(function() {
			peopleComeOut(actor8, 300, false)
		}, 4000)
	}

}

var checkTouchedPeople = function(touchX, touchY, width) {
	for (index in peopleLists) {
		var localCoor = peopleLists[index].globalToLocal(touchX, touchY)
		if (peopleLists[index].hitTest(localCoor.x, localCoor.y) && !peopleLists[index].exploded) {
			console.log(peopleLists[index].name)
			if (checkMouth2(currentX, currentY, width, peopleLists[index])) {
				if (peopleLists[index].name == "boss") {
					if (peopleLists[index].hasFirstShut == false) {
						console.log("first boss detected")
						peopleLists[index].gotoAndPlay("open");
					    peopleLists[index].hasFirstShut = true;
					} else if (peopleLists[index].hasFirstShut == true) {
						console.log("second boss detected")
						peopleLists[index].exploded = true;
						peopleLists[index].gotoAndPlay("explode");
						var shutup = createjs.Sound.play("shutup");
						peopleLists[index].hasFirstShut = false;
						score += 10;
					}
				} else {
					peopleLists[index].exploded = true;
					peopleLists[index].gotoAndPlay("explode");
					var shutup = createjs.Sound.play("shutup");
					if (peopleLists[index].name != "tutor")
						score += 10;
				}
			}
		}
	}
}

function checkMouth2(x, y, width, role) {
	var MOUTH_H = 70 / 2.17,
		MOUTH_Y = 260 / 2.17,
		mouthY = MOUTH_Y + MOUTH_H / 2,
		result;

	// console.log(role.name, role.globalToLocal(x,y).x, mouthX, role.globalToLocal(x,y).y, mouthY, role.scaleX, scaleY)
	var mouthWidth = role.getTransformedBounds().width / 3
	if (Math.abs(1 - role.globalToLocal(x, y).y / mouthY) < 0.2 && width / mouthWidth > 0.7) {
		result = true;

		//start the game after finishing the tutorial
		if (role.name == "tutor") {
			role.gotoAndPlay("explode");
			var shutup = createjs.Sound.play("shutup");
			stage.removeChild(stage.getChildByName("tutorial_txt_1"),stage.getChildByName("tutorial_txt_2"),stage.getChildByName("tutorial_icon_1"),stage.getChildByName("tutorial_icon_2"))
			
			setTimeout(function(){
				createjs.Tween.get(background)
					.to({
						alpha: 0
					}, 500, createjs.Ease.linear)
					.call(function() {
						background.image = loader.getResult("background")
						loadActors(trainee.clone(), trainee.clone())
					})
			}, 3000)
		}
	} else
		result = false;

	//console.log(result)
	return result
}

var checkTouchedDribble = function(touchX, touchY) {
	for (index in peopleLists) {
		if (peopleLists[index].dribbles) {
			var localCoor = peopleLists[index].dribbles.globalToLocal(touchX, touchY)
				//|| ((touchX - peopleLists[index].dribbles.x < 10 * scaleY) && (touchY - peopleLists[index].dribbles.y < 10 * scaleY))
			if (peopleLists[index].dribbles.hitTest(localCoor.x, localCoor.y)) {
				peopleLists[index].dribbles.gotoAndPlay("fade");
			}
		}

	}
}

var checkTouchedVolume = function(touchX, touchY) {
	var localCoor = music.globalToLocal(touchX, touchY)
	if (music.hitTest(localCoor.x, localCoor.y)) {
		if (createjs.Sound.muted) {
			createjs.Sound.muted = false;
			music.gotoAndPlay(0)
		} else {
			createjs.Sound.muted = true;
			music.gotoAndStop(0)
		}
	}
}


var loadResource = function(role, name, x, y, scale, isReversed, isVisible) {
	if(role){
		if (isReversed)
			role.scaleX = -scaleY * scale;
		else
			role.scaleX = scaleY * scale;
		role.scaleY = scaleY * scale;
		role.x = x;
		role.y = y;
		role.name = name;
		role.exploded = false;
		role.visible = isVisible;
		stage.addChild(role)
	}
}