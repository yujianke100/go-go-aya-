class Ccreate{
    createDanmaku(type){
        switch(type){
            case 1: danmakuChangepx = 10; break;
            case 2: danmakuChangepx = -10; break;
            case 3: danmakuChangepx = 20; break;
            case 4: danmakuChangepx = -20; break;
            case 5: danmakuChangepx = 30; break;
            case 6: danmakuChangepx = -30; break;
        }
        if(level < 3){
            danmakuChangepx = 0;
        }
        var danmakuInfo = new Array(ayaLeft + danmakuCoor + danmakuChangepx, ayaTop, type, 0); //L T type angel
        danmakuArryLength = danmakuArry.push(danmakuInfo);
        danmakuVoice.src = "./sound/danmaku.mp3";
    }

    createCrow(specialSpeed){
        var angle = Math.PI / 180 * 130;
        if(specialSpeed < 0){
            angle = Math.atan( crowSpeed / specialSpeed) + Math.PI / 2  + Math.PI / 180 * 130;
        }
        else if(specialSpeed > 0){
            angle = Math.atan( (crowSpeed + level /2 - 1) / specialSpeed);
        }
        var crowInfo = new Array(Math.floor(Math.random()*600), -150 - Math.floor(Math.random()*1000), specialSpeed, 0, angle); //L T specialSpeed  blood angle
        crowArryLength = crowArry.push(crowInfo);
    }

    createEffect(L, T){
        var effectInfo = new Array(L, T, 0, 0.5); //L T changeSize alpha
        effectArrayLength = effectArray.push(effectInfo);
    }

    createDanmakuEffect(L, T, type, angel){
        var direction = 0;
        switch(type){
            case 1: direction = 0; break;
            case 2: direction = 0; break;
            case 3: direction = 1; break;
            case 4: direction = -1; break;
            case 5: direction = 2; break;
            case 6: direction = -2; break;
        }
        var danmakuEffectInfo = new Array(L, T, direction, 1, 0, 0, angel); //left top direction alpha changeWidth changeHeight changeAngle
        danmakuEffectArrayLength = danmakuEffectArray.push(danmakuEffectInfo);
    }

}