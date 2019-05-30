class Cinfo{
    getDelayInfo(){
        delayFlag -= 1;
        if(delayFlag <= 0){
            delayFlag = 500;
        }
    }

    getSlowEffectInfo(){
        if(ayaFlag == 1 && slowEffectSizeChange <= 20 && slowEffectSizeChangeFlag == 0){
            slowEffectSizeChange += slowEffectSizeChangeSpeed;
            if(slowEffectSizeChange >= 20){
                slowEffectSizeChangeFlag = 1;
            }
        }
        else if(ayaFlag == 1 && slowEffectSizeChangeFlag == 1 && slowEffectSizeChange >= 0){
            slowEffectSizeChange -= slowEffectSizeChangeSpeed / 2;
        }
        else if(ayaFlag == 0 && slowEffectSizeChange > -70){
            if(slowEffectSizeChange <= -70){
                slowEffectSizeChange = -70;
            }
            slowEffectSizeChange -= slowEffectSizeChangeSpeed / 3;
        }
    }

    getAyaInfo(){
        if(ayaModeFlag == 0){
            if(ayaI < 8){
                ayaI ++;
            }
            else if(ayaI > 15){
                ayaI --;
            }
            else if(delayFlag % 2 == 0){
                ayaI ++
                if(ayaI > 15){
                    ayaI = 8;
                }
            }
        }
        else if(ayaModeFlag == -1){
            if(ayaI > 15){
                ayaI --;
            }
            else if(15 >= ayaI && ayaI >= 8){
                ayaI = 7;
            }
            else if(delayFlag % 2 == 0){
                ayaI --
                if(ayaI < 0){
                    ayaI = 3;
                }
            }
        }
        else{
            if(ayaI < 8){
                ayaI ++;
            }
            else if(15 >= ayaI && ayaI >= 8){
                ayaI = 16;
            }
            else if(delayFlag % 2 == 0){
                ayaI ++
                if(ayaI > 23){
                    ayaI = 20;
                }
            }
        }
    
    }
}