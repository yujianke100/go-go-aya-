class Ccontrol{
     keys(keycode){
         if(ayaKnocked == 1)
            return;
         if(keycode == 90 && loopNum % 5 == 0){
             create.createDanmaku(1);
             if(level >= 3){
                 create.createDanmaku(2);
             }
             if(level >= 6){
                 create.createDanmaku(3);
                 create.createDanmaku(4);
             }
             if(level >= 9){
                 create.createDanmaku(5);
                 create.createDanmaku(6);
             }
         }
        //  if(keycode == 88 && specialCardNum > 0){
             
        //  }

        if((keycode == 37) && ayaLeft > 0){ //left
            ayaLeft = ayaLeft - ayaSpeed + shiftSpeed;
        }
        if((keycode == 38) && ayaTop >= 110){ //top
            ayaTop = ayaTop - ayaSpeed + shiftSpeed;
        }
        if((keycode == 39) && ayaLeft <= 575){ //right
            ayaLeft = ayaLeft + ayaSpeed - shiftSpeed;
        }
        if((keycode == 40) && ayaTop < 850){ //button
            ayaTop = ayaTop + ayaSpeed - shiftSpeed;
        }
     }
     buttonControl(){
        startBtn.addEventListener("click", function(){
            if(btnFlag == 0){
                clean.initClean();
                animation();
            }
            else if(btnFlag == 1){
                startBtn.innerHTML = "继续";
                btnFlag = 2;
                startBtn.style.left = "130px";
                startBtn.style.top = "400px";
            }
            else if(btnFlag == 2){
                btnFlag = 1;
                startBtn.innerHTML = "暂停";
                startBtn.style.left = "550px";
                startBtn.style.top = "50px";
                animation();
            }
        });
        cheatBtn.addEventListener("click", function(){
            level = 9;
        });
        specialCardSwitch.addEventListener("click", function(){
            if(specialCardSwitchFlag == 0){
                specialCardSwitchFlag = 1;
                bEffect.clearRect(0, 0, 640, 960);
                specialCardSwitch.innerHTML = `开启特殊符卡特效`;
            }
            else{
                specialCardSwitchFlag = 0;
                specialCardSwitch.innerHTML = `关闭特殊符卡特效`;
            }
        });
        waterfallSwitch.addEventListener("click", function(){
            if(waterfallSwitchFlag == 0){
                waterfallSwitchFlag = 1;
                waterfallSwitch.innerHTML = `开启瀑布特效`;
            }
            else{
                waterfallSwitchFlag = 0;
                waterfallSwitch.innerHTML = `关闭瀑布特效`;
            }
        });
        specialCardShadowSwitch.addEventListener("click", function(){
            if(specialCardShadowSwitchFlag == 0){
                specialCardShadowSwitchFlag = 1;
                specialCardShadowSwitch.innerHTML = `开启特殊符卡阴影特效`;
            }
            else{
                specialCardShadowSwitchFlag = 0;
                specialCardShadowSwitch.innerHTML = `关闭特殊符卡阴影特效`;
            }
        });
        outBtn.addEventListener("click", function(){
            localStorage.clear();
            alert("已退出！");
            window.location.href = "./logIn/SignIn.html";
        });
     }
     KeyboardControl(){
        document.addEventListener("keydown",function(e){
            if(ayaKnocked == 1)
                return;
            if(e.keyCode == 80 || e.keyCode == 27){
                if(btnFlag == 1){
                    startBtn.innerHTML = "继续";
                    btnFlag = 2;
                    startBtn.style.left = "130px";
                    startBtn.style.top = "400px";
                }
                else if(btnFlag == 2){
                    btnFlag = 1;
                    startBtn.innerHTML = "暂停";
                    startBtn.style.left = "550px";
                    startBtn.style.top = "50px";
                    animation();
                }
            }
            else if(btnFlag == 0 && e.keyCode == 13 && !window.buttonIsFocused){
                clean.initClean();
                animation();
            }
            else if(btnFlag != 1){
                return;
            }
            else if(specialCardFlag == 0 && e.keyCode == 88 && specialCardNum > 0){
                shockSize = 1;
                specialCardVoice.src = "./sound/specialCard.mp3";
                specialCardFlag = 1;
                powerCircleFlag = 1;
                specialCardNum -= 1;
                specialCardChangeFlag = 0;
                specialCardHappened = 0;
            }
            else if(e.keyCode == 16){
                ayaFlag = 1;
                shiftSpeed = 4;
            }
            else if(keyArray.indexOf(e.keyCode) < 0){
                keyArray.push(e.keyCode);
                keyArray.sort()
            }
        })
        
        document.addEventListener("keyup",function(e){
            if(e.keyCode == 16){
                ayaFlag = 0;
                slowEffectSizeChangeFlag = 0;
                shiftSpeed = 0;
                return
            }
            keyIndex = keyArray.indexOf(e.keyCode);   
            if(keyIndex >= 0){
                keyArray.splice(keyIndex, 1);
                keyArray.sort()
            }
        })
     }
 }