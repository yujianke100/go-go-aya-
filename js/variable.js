//selector
const ayaCanvas =document.querySelector("#ayaCanvas");
const danmakuCanvas =document.querySelector("#danmakuCanvas");
const crowCanvas =document.querySelector("#crowCanvas");
const effectCanvas = document.querySelector("#effectCanvas");
const specialCardCanvas = document.querySelector("#specialCardCanvas");
const powerCircleCanvas = document.querySelector("#powerCircleCanvas");
const biu = document.querySelector("#biu");
const danmakuVoice = document.querySelector("#danmakuVoice");
const specialCardVoice = document.querySelector("#specialCardVoice");
const corwVoice = document.querySelector("#crowVoice");
const waterfallSwitch = document.querySelector("#waterfallSwitch");
const specialCardSwitch = document.querySelector("#specialCardSwitch");
const specialCardShadowSwitch = document.querySelector("#specialCardShadowSwitch");
const outBtn = document.querySelector("#outBtn");
// const waterfallCanvas = document.querySelector('#waterfall');

// waterfallCanvas.width = 640;
// waterfallCanvas.height = 960;

const showMsg = document.querySelector("#msgRefresh");

const startBtn = document.querySelector("#startBtn");
const cheatBtn = document.querySelector("#cheatBtn");

const gameOverP = document.querySelector("#gameOverP");

//ctx
var aya = ayaCanvas.getContext("2d");
var danmaku = danmakuCanvas.getContext("2d");
var crow = crowCanvas.getContext("2d");
var effect = effectCanvas.getContext("2d");
var ayaEffect = effectCanvas.getContext("2d");
var danmakuEffect = effectCanvas.getContext("2d");
var specialCard = specialCardCanvas.getContext("2d");
var powerCircle = powerCircleCanvas.getContext("2d");


specialCard.translate(320, 480);
//IMG
const ayaImg = new Image();
ayaImg.src = "pic/pl03.png";

const redAyaImg = new Image();
redAyaImg.src = "pic/aya_red.png";

const danmakuImg = new Image();
danmakuImg.src = "pic/maple.png";

const crowImg = new Image();
crowImg.src = "pic/crow.png";

const magicImg = new Image();
magicImg.src = "pic/eff_magicsquare.png";

//AYA VAR
var ayaLeft = 300;
var ayaTop = 960;
// var ayaWidth = 90;
// var ayaHeight = 90;
const ayaWidth = 32;
const ayaHeight = 48;
var ayaSpeed = 7;
var shiftSpeed = 0;
var ayaFlag = 0;
var red = 20;
var ayaKnocked = 0;
var ayaAngle = 0;
var ayaOldLeft = 300;
var ayaOldTop = 850;
var ayaAngleSpeed = Math.PI / 180 * 1;
var firstAyaFlag = 1;
var firstAyaLock = 0;
var firstAyaTop = 960;
var ayaNumInit = 1;
var ayaNum = ayaNumInit;
var ayaNumFlag = 0;
var ayaFlashTime = 40;
const ayaGodTimeInit = 150;
var ayaGodTime = ayaGodTimeInit;
var ayaAlpha = 1;
var selectAya = new Array();
var ayaI = 0;
var ayaModeFlag = 0;

for(i = 7; i >= 0; i --){
    selectAya.push([i * ayaWidth, ayaHeight]);
}
for(i = 0; i <= 7; i ++){
    selectAya.push([i * ayaWidth, 0]);
}
for(i = 0; i <= 7; i ++){
    selectAya.push([i * ayaWidth, ayaHeight * 2]);
}

//SLOWEFFECT VAR
var slowEffectSizeChange = -70;
var slowEffectSizeChangeSpeed = 10;
var slowEffectSizeChangeFlag = 0;
const slowEffectImg = new Image();
slowEffectImg.src = "./pic/eff_sloweffect.png";
const slowEffectWidth = 64;
const slowEffectHeight = 64;
var slowEffectAngelSpeed = 2 * Math.PI / 180;
var slowEffectAngel = 0;

//DANMAKU VAR
var danmakuWidth = 30;
var danmakuHeight = 30;
var danmakuRealWidth = 374;
var danmakuRealHeight =395
var danmakuArry = new Array();
var danmakuArryLength = 0;
var danmakuSpeed = 20;
var danmakuChangepx = 0;
var specialDanmakuSpeedArray = new Array(0, 0, 0, 0, 0, 0, 0);
var specialDanmakuSpeed = 0;
var danmakuCoor = 20;

//CROW VAR
var crowWidth = 90;
var crowHeight = 90;
var crowArry = new Array();
var crowArryLength = 0;
var crowSpeed = 5;
var specialCrowSpeed = 1;
var blood = 10;


//EFFICT
var effectArray = new Array();
var AyaEffect = effectCanvas.getContext("2d");
var AyaEffectInfo = new Array(0, 0.5); // R ALPHA
var effectWidth = 90;
var effectHeight = 90;
var effectArrayLength = 0;

var danmakuEffectArray = new Array();
var danmakuEffectArrayLength = 0;

//SPECIAL CARD VAR
const specialCardInfoInit = new Array(0, 4600, 1200, 1400, 1600, 1800, 2000, 2500, 3000, 4000, 4200, 4400); //alpha Size1, Size2, Size3 ....
var specialCardInfo = [...specialCardInfoInit];
var specialCardFlag = 0;
var specialCardHappened = 0;
var specialCardWaiteTime = 500;
var specialCardChangeFlag = 0;

//POWER CIRCLE VAR
var powerCircleInfo = new Array(50, 0); //R alpha
var powerCircleHappened = 0;
var powerCircleWaitTimeInit = 125;
var powerCircleWaitTime = powerCircleWaitTimeInit;
var powerCircleFlag = 0;
var b = document.getElementById("bCanvas");
bEffect = b.getContext("2d");

//OTHERS
var keyArray = new Array(6);
var keyIndex;

var loopNum = 0;
var gameSpeed = 9;
var score = 0;
var lastScore = 0;
var scoreFlag = 0;
var level = 1;
var l,t,h,w;
var btnFlag = 0;
var i,j;

var tmp;

var specialCardNum = 1;
var oldMsg = new Array(0, 0, 0, 0); //score level ayanum specialcardnum

const shock = document.querySelector('body');
var shockFlag = true;
var shockSize = 0;
var delayFlag = 500;


var waterfallSwitchFlag = 0;
var specialCardSwitchFlag = 0;
var specialCardShadowSwitchFlag = 1;


//logIn
var scoreArray = new Array();