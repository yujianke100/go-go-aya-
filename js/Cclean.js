class Cclean{
    totalClean(){
        aya.clearRect(0, 0, 640, 960);
        danmaku.clearRect(0, 0, 640, 960);
        crow.clearRect(0, 0, 640, 960);
    }

    cleanArray(array, i){
        array.splice(i, 1);
        array.sort();
        return array.length;
    }
    initClean(){
        bEffect.clearRect(0, 0, cw, ch);
        crow.clearRect(0, 0, 640, 960);
        effect.clearRect(0, 0, 640, 960);
        crowArry.splice(0,  crowArry.length);
        danmakuArry.splice(0, danmakuArry.length);
        keyArray.splice(0, keyArray.length);
        danmakuArryLength = 0;
        crowArryLength = 0;
        specialCardNum = 1;
        gameOverP.style.display = "none";
        startBtn.innerHTML = "暂停";
        startBtn.style.left = "550px";
        startBtn.style.top = "50px";
        btnFlag = 1;
        AyaEffectInfo[1] = 0.5;
        ayaAngle = 0;
        ayaOldLeft = 300;
        ayaOldTop = 850;
        firstAyaFlag = 1;
        ayaNum = ayaNumInit;
        ayaLeft = 300;
        ayaTop = 960;
        shiftSpeed = 0;
        level = 1;
        score = 0;
        ayaFlag = 0;
        specialCardChangeFlag = 0;
        scoreFlag = 0;
        ayaNumFlag = 0;
    }
}
