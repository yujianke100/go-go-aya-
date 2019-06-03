class Cdraw{
    drawAngle(canvas, img, l, t, w, h, angle){
        canvas.translate(l + w / 2, t + h / 2);
        canvas.rotate(angle);
        canvas.drawImage(img, -w / 2, -h / 2, w, h);
        canvas.rotate(-angle);
        canvas.translate( -(l + w / 2), -(t + h / 2));
    }
    drawSlowEffectAngel(l, t, w, h, angle){
        aya.translate((l + slowEffectWidth / 2),( t + slowEffectHeight / 2));
        aya.rotate(angle);
        aya.drawImage(slowEffectImg, 0, 0, slowEffectWidth, slowEffectHeight, -w , -h, w * 2, h * 2);
        aya.rotate(-angle);
        aya.translate( -(l + slowEffectWidth / 2), -(t + slowEffectHeight / 2));
    }



    drawAya(){
        if(firstAyaFlag == 1){
            firstAyaLock = 1;
            ayaFlashTime -= 1;
            ayaKnocked = 0;
            if(ayaFlashTime <= 0){
                ayaFlashTime = 50;
            }
            if(ayaFlashTime > 20){
                aya.globalAlpha = 0.5;
            }
            else{
                aya.globalAlpha = 1;
            }
            if(ayaGodTime == ayaGodTimeInit){
                ayaTop -= 2;
            }
            if(ayaTop <= 850){
                firstAyaLock = 0;
                ayaGodTime -= 1;
                if(ayaGodTime <= 0){
                    firstAyaFlag = 0;
                    aya.globalAlpha = 1;
                    ayaGodTime = ayaGodTimeInit;
                }
            }
        }
        info.getAyaInfo();
        aya.clearRect(0, 0, 640, 960);
        aya.drawImage(ayaImg, selectAya[ayaI][0], selectAya[ayaI][1], ayaWidth, ayaHeight, ayaLeft, ayaTop, ayaWidth * 2, ayaHeight * 2);
    }

    drawSlowEffect(){
        slowEffectAngel += slowEffectAngelSpeed;
        if(slowEffectAngel > 2 * Math.PI){
            slowEffectAngel = 0;
        }
        this.drawSlowEffectAngel(ayaLeft + 1, ayaTop + 15, slowEffectSizeChange + slowEffectWidth, slowEffectSizeChange + slowEffectHeight, slowEffectAngel)
        this.drawSlowEffectAngel(ayaLeft + 1, ayaTop + 15, slowEffectSizeChange + slowEffectWidth, slowEffectSizeChange + slowEffectHeight, -slowEffectAngel)
    }

    drawDanmaku(){
        for(i = danmakuArryLength - 1; i >= 0; i --){
            if(danmakuArry[i][0] > 640 || danmakuArry[i][0] < 0 || danmakuArry[i][1] < 50){
                danmakuArryLength = clean.cleanArray(danmakuArry, i);
                continue;
            }
            var type = danmakuArry[i][2];
            if(ayaFlag == 0){
                switch(type){
                    case 1: specialDanmakuSpeed = 0;break;
                    case 2: specialDanmakuSpeed = 0;break;
                    case 3: specialDanmakuSpeed = 10;break;
                    case 4: specialDanmakuSpeed = -10;break;
                    case 5: specialDanmakuSpeed = 15;break;
                    case 6: specialDanmakuSpeed = -15;break;
                }
            }
            else{
                specialDanmakuSpeed = 0;
            }
            var changeSpecialSpeed = specialDanmakuSpeed - specialDanmakuSpeedArray[type];
            if(changeSpecialSpeed != 0){
                specialDanmakuSpeedArray[type] += Math.abs(changeSpecialSpeed) / changeSpecialSpeed;
            }
            danmakuArry[i][1] -= danmakuSpeed;
            if(specialDanmakuSpeedArray[type] != 0){
                danmakuArry[i][0] += specialDanmakuSpeedArray[type];
                danmakuArry[i][3] = -Math.atan( -danmakuSpeed / specialDanmakuSpeedArray[type]) * 0.65;
            }
            this.drawAngle(danmaku, danmakuImg, danmakuArry[i][0], danmakuArry[i][1], danmakuWidth, danmakuHeight, danmakuArry[i][3]);
        }
    }

    drawCrow(){
        crow.clearRect(0, 0, 640, 960);
        for(i = 0; i < crowArryLength; i ++){
            if(Math.floor(Math.random()*10) == 9 && i % 3 == 0 && crowArry[i][2] == 0){
                crowArry[i][2] = Math.floor(Math.random()*9) - 4;
                crowArry[i][4] = Math.atan( (crowSpeed + level /2 - 1) / crowArry[i][2])
            }
            crowArry[i][1] += (crowSpeed + level /2 - 1);
            if(crowArry[i][1] > 950){
                crowArry[i][1] = -150 - Math.floor(Math.random()*600);
            }
            if(crowArry[i][2] != 0){
                crowArry[i][0] += crowArry[i][2];
            }
            if(crowArry[i][0] < -80 || crowArry[i][0] > 630){
                crowArry[i][0] = Math.floor(Math.random()*600);
                crowArry[i][1] = -50 - Math.floor(Math.random()*100);
                crowArry[i][2] = 0;
                crowArry[i][4] = Math.PI / 180 * 130;
            }
        }
        for(i = 0; i < crowArryLength; i ++){
            if(crowArry[i][4] < 0){
                crowArry[i][4] = -crowArry[i][4] + Math.PI / 180 * 130;
            }
            this.drawAngle(crow, crowImg, crowArry[i][0], crowArry[i][1], crowWidth, crowHeight, crowArry[i][4]);
            // crow.drawImage(crowImg, crowArry[i][0], crowArry[i][1], crowWidth, crowHeight);
        }
    }

    drawCircle(canvas, L, T, R, A, LW, SC, Fflag, FC){
        canvas.clearRect(0, 0, 640, 960);
        canvas.beginPath();
        canvas.arc(L, T, R,0,2*Math.PI);
        canvas.lineWidth = LW;
        canvas.globalAlpha = A;
        canvas.strokeStyle = SC;
        canvas.stroke();
        if(Fflag == 1){
            if(canvas.fillStyle != FC)
                canvas.fillStyle = FC;
            canvas.fill();
        }
    }

    drawAyaEffect(){
        AyaEffectInfo[0] += 1.5;
        if(AyaEffectInfo[0] > 100){
            AyaEffectInfo[1] -= 0.01;
        }
        this.drawCircle(ayaEffect, ayaLeft + 45, ayaTop + 45, AyaEffectInfo[0], AyaEffectInfo[1], 50, "white", 1, "white");
        if(AyaEffectInfo[1] <= 0){
            AyaEffectInfo[0] = 0;
            AyaEffectInfo[1] = 0.5;
            aya.clearRect(0, 0, 640, 960);
            return 1;
        }
        return 0;
    }

    drawCrowEffect(){
        for(i = 0; i < effectArrayLength; i ++){
            effectArray[i][2] += 15;
            if(effectArray[i][2] > 50){
                effectArray[i][3] -= 0.05;
            }
            this.drawCircle(effect, effectArray[i][0] + 60, effectArray[i][1] + 80, effectArray[i][2], effectArray[i][3], 50, "white", 1, "white");
            if(effectArray[i][3] <= 0.05){
                effectArrayLength = clean.cleanArray(effectArray, i);
                i = 0;
            }
        }
    }

    drawDanmakuEffect(){
        for(i = 0; i < danmakuEffectArrayLength; i ++){
            danmakuEffectArray[i][1] += 1;
            danmakuEffectArray[i][4] += 2;
            danmakuEffectArray[i][5] += 2;
            danmakuEffect.globalAlpha = danmakuEffectArray[i][3];
            
            this.drawAngle(danmakuEffect, danmakuImg, 
                danmakuEffectArray[i][0] - danmakuEffectArray[i][4], 
                danmakuEffectArray[i][1] - danmakuEffectArray[i][5], 
                danmakuWidth + danmakuEffectArray[i][4],
                danmakuHeight + danmakuEffectArray[i][5],
                danmakuEffectArray[i][6]);

            danmakuEffectArray[i][3] -= 0.15;
            if(danmakuEffectArray[i][3] <= 0.11){
                danmakuEffectArrayLength = clean.cleanArray(danmakuEffectArray, i);
                effect.clearRect(0, 0, 640, 960);
                i = 0;
            }
        }
    }

    drawPowerCircle(){
        if(specialCardShadowSwitchFlag == 0){
            powerCircle.shadowColor = "yellow";
            powerCircle.shadowBlur = 40;
        }
        else if(powerCircle.shadowBlur != 0){
            powerCircle.shadowBlur = 0;
        }
        this.drawCircle(powerCircle, ayaLeft + 35, ayaTop + 50, powerCircleInfo[0], powerCircleInfo[1], 0, "#F0E68C", 1, "#F0E68C");
        slowEffectAngel += slowEffectAngelSpeed * 2;
        if(slowEffectAngel > 2 * Math.PI){
            slowEffectAngel = 0;
        }
        this.drawAngle(powerCircle, magicImg,ayaLeft - 5, ayaTop + 10, 80, 80, slowEffectAngel)
        if(powerCircleWaitTime >= 0 && powerCircleHappened == 0){
            powerCircleWaitTime -= 1;
            if(powerCircleWaitTime % 5 == 0 && powerCircleInfo[0] > 0){
                powerCircleInfo[0] -= 1;
            }
            if(powerCircleInfo[1] < 0.5){
                powerCircleInfo[1] += 0.01;
            }
        }
        else{
            powerCircleHappened = 1;
            powerCircleInfo[0] += 30;
            powerCircleInfo[1] -= 0.01;
            if(crowArryLength != 0 && powerCircleInfo[1] < 0.4){
                crowArry.splice(0, crowArry.length);
                crowArryLength = 0;
            }
            if(powerCircleInfo[1] <= 0.01){
                powerCircleInfo[0] = 50;
                powerCircleInfo[1] = 0;
                powerCircleHappened = 0;
                powerCircleFlag = 0;
                powerCircleWaitTime = powerCircleWaitTimeInit;
                specialCardHappened = 0;
                specialCardFlag = 0;
            }
        }
    }

    drawShock(){
        shock.style.left = (shockFlag ? -shockSize : shockSize) + 'px';
        shockFlag = !shockFlag;
    }

    drawSpecialCard(){
        specialCard.clearRect(-320, -480, 640, 960);
        this.drawShock();
        var L = 0;
        for(i = 1; i < specialCardInfo.length; i++){
            L = specialCardInfo[i];
            if(specialCardShadowSwitchFlag == 0){
                if(i == 1){
                    specialCard.shadowBlur = 20;
                    specialCard.shadowColor="yellow";
                }
                else if(i == 6){
                    specialCard.shadowBlur = 300;
                    specialCard.shadowColor="yellow";
                }
                else{
                    specialCard.shadowBlur = 0;
                }
            }
            else if(specialCard.shadowBlur != 0){
                specialCard.shadowBlur = 0;
            }
            specialCard.globalAlpha = specialCardInfo[0];
            if(specialCardChangeFlag == 0 && specialCardWaiteTime <= 0){
                specialCardChangeFlag = 1;
            }
            
            specialCard.drawImage(danmakuImg, -L / 2, -L / 2, L, L);
        }


        if(specialCardHappened == 0){
            for(i = 1; i < specialCardInfo.length; i++){
                if(specialCardInfo[i] > 500){
                    specialCardInfo[i] -= 50;
                    specialCardInfo[0] += 0.0005;
                }
                if(specialCardInfo[1] <= 500){
                    specialCardWaiteTime -= 1;
                    if(specialCardWaiteTime % 100 == 0){
                        shockSize += 1;
                    }
                }
            }
            if(specialCardWaiteTime <= 0){
                if(specialCardChangeFlag == 1){
                    specialCard.globalAlpha = 1;
                    specialCardChangeFlag = 0;
                }
                specialCardWaiteTime = 500;
                specialCardHappened = 1;
                shockSize = 0;
            }
        }
        else{
            for(i = 1; i < specialCardInfo.length; i++){
                if(specialCardInfo[i] < 5000 && i % 3 == 0){
                    specialCardInfo[i] += 200;
                }
                else if(specialCardInfo[i] < 5000 && i % 2 == 0){
                    specialCardInfo[i] += 100;
                }
                else if(specialCardInfo[i] < 5000){
                    specialCardInfo[i] += 50;
                }
                if(specialCardInfo[0] > 0){
                    specialCardInfo[0] -= 0.001;
                }
                else{
                    specialCardInfo[0] = 0;
                }
            }
            if(specialCardInfo[0] <= 0){
                specialCardHappened = 0;
                specialCardFlag = 0;
                specialCardInfo = [...specialCardInfoInit];
                specialCard.clearRect(-320, -480, 640, 960);
                bEffect.clearRect(0, 0, 640, 960);
            }
        }

    }

    
    totalDraw(){
        this.drawCrow();
        this.drawDanmaku();
        info.getDelayInfo()
        this.drawAya();
        info.getSlowEffectInfo();
        // info.getShiftInfo();
        if(slowEffectSizeChange > -70)
            this.drawSlowEffect();
        this.drawCrowEffect();
        this.drawDanmakuEffect();
        if(specialCardSwitchFlag == 0 && specialCardFlag == 1){
            draw.drawSpecialCard();
        }
        if(powerCircleFlag == 1){
            this.drawPowerCircle();
        }
    }
    
}
