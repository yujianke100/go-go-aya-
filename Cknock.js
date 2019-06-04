class Cknock{
    danmakuKnock(){
        for(i = 0; i < danmakuArryLength; i++){
            for(j = 0; j < crowArryLength; j ++){
                w = crowArry[j][0] - danmakuArry[i][0];
                h = Math.abs(crowArry[j][1] - danmakuArry[i][1]);
                if(w < crowWidth - 85 && w > - crowWidth + 15 && h < crowHeight - 35){
                    create.createDanmakuEffect(danmakuArry[i][0], danmakuArry[i][1], danmakuArry[i][2], danmakuArry[i][3]);
                    danmakuArryLength = clean.cleanArray(danmakuArry, i);
                    crowArry[j][3] += 1;
                    if(crowArry[j][3] >= blood + level * 2){
                        create.createEffect(crowArry[j][0], crowArry[j][1]);
                        crowArryLength = clean.cleanArray(crowArry, j);
                        corwVoice.src = "./sound/crow.mp3";
                        userInfo.tmpUpdataScore();
                    }
                    i = 0;
                    j = 0;
                    break;
                }
            }
        }
    }



    ayaKnock(){
        for(i = 0; i < crowArryLength; i ++){
            w = ayaLeft - crowArry[i][0];
            h = ayaTop- crowArry[i][1];
            if(ayaKnocked == 0 && w < red + 30 && w >  -red && h < red && h > -red){
                ayaKnocked = 1;
                danmakuArryLength = 0;
                keyArray.splice(0, keyArray.length);
                aya.clearRect(0, 0, aya.width, aya.height);
                biu.src = "./sound/combobreak.mp3";
            }
            if(ayaKnocked == 1){
                if(draw.drawAyaEffect() == 1){
                    ayaLeft = 300;
                    ayaTop = 1100;
                    ayaNum -= 1;
                    userInfo.upDeadTimeData();
                    if(ayaNum <= 0){
                        lastScore = score;
                        score = 0;
                        msg.gameOverRefresh()
                        ayaKnocked = 0;
                        gameOverP.style.display = "block";
                        i = crowArryLength;
                    }
                    else{
                        ayaKnocked = 0;
                        firstAyaFlag = 1;
                    }
                }
            }
        }
    }


}