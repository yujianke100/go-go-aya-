var draw = new Cdraw();
var create = new Ccreate();
var control = new Ccontrol();
var clean = new Cclean();
var knock = new Cknock();
var msg = new Cmsg();
var info = new Cinfo();
var tmpInfo = localStorage.getItem("userInformation");
var name = tmpInfo.split(",")[0];
var pass = tmpInfo.split(",")[1];

control.buttonControl();
control.KeyboardControl();
msg.showUser();

function animation(){
    requestAnimationFrame(function(){
        if(ayaKnocked == 0 && firstAyaLock == 0){
            var ayaOldLeft = ayaLeft;
            var keyArrayLength = keyArray.length;
            if(keyArrayLength > 0){
                for(i = 0; i < keyArrayLength; i++){
                    control.keys(keyArray[i]);
                }
            }
            if(ayaOldLeft < ayaLeft || (ayaLeft >= 575 && keyArray.indexOf(39) != -1)){
                ayaModeFlag = 1;
            }
            else if(ayaOldLeft > ayaLeft || (ayaLeft <= 0 && keyArray.indexOf(37) != -1)){
                ayaModeFlag = -1;
            }
            else{
                ayaModeFlag = 0;
                // if(keyArray.indexOf(38) == -1 && keyArray.indexOf(40) == -1)
                //     shiftSpeed = 4;
            }
        }

        if(crowArryLength < 7 + level){
            // create.createCrow(0);
            create.createCrow(Math.floor(Math.random()*9) - 4);
        }
        if(oldMsg[0] != score || oldMsg[1] != level || oldMsg[2] != ayaNum || oldMsg[3] != specialCardNum){
            msg.helpRefresh();
            oldMsg = {score, level, ayaNum, specialCardFlag};
        }
        clean.totalClean()
        if(ayaKnocked == 0){
            draw.totalDraw()
        }
        knock.danmakuKnock();
        if(specialCardFlag == 0 && firstAyaFlag == 0){
            knock.ayaKnock();
        }
        loopNum ++;
        if(loopNum > 10000){
            loopNum = 0;
        }
        if(btnFlag == 1){
            animation();
        }
    })  
  }
