if(name == ""){
    window.location.href="./logIn/SignIn.html";
}
class CuserInfo{
    cleanScore(){
        $.post("cleanData.php",{name : name});
    }
    updataScore(){
        $.post("upScoreData.php",{name : name, password : pass},function(result){
            let lscore = JSON.parse(result);
            if(lscore.tmpScore != lastScore){
                alert("你啊，naive！");
                lastScore = -10000;
                showMsg.innerHTML = `
        <p>你啊</p>
        <p>还得学习一个</p>
        <table border="0.5">
            <tr>
                <th>too young too simple!</th>
            </tr>
            <tr>
                <th>sometimes naive!</th>
            </tr>
        </table>
        `;
            }
        });
    }
    getScore(){
        $.get("downScoreData.php",function(result){
            scoreArray = JSON.parse(result);
        });
    }
    tmpUpdataScore(){
        $.post("tmpUpScoreData.php",{name : name},function(result){
            let tmpS = JSON.parse(result);
            if(tmpS.tmpScore == score + 1){
                score += 1;
                if(Math.floor(score / 10 + 1) > level){
                    if(Math.floor(score / 10 + 1) > level + 1){
                        ayaKnocked = 1;
                        biu.src = "./sound/combobreak.mp3";
                        alert("那么，代价是什么呢？");
                        ayaNum = 2;
                        level = Math.floor(score / 10 + 1) + 9;
                        specialCardNum = 0;
                    }
                    else{
                        level = Math.floor(score / 10 + 1);
                        specialCardNum += 1;
                        scoreFlag = 0;
                        if(level % 5 == 0 && level > 0 && ayaNumFlag == 1){
                            ayaNum += 1;
                            ayaNumFlag = 0;
                        } else if(level % 5 != 0){
                            ayaNumFlag = 1;
                        }
                    }
                }
            }
            else{
                ayaKnocked = 1;
                biu.src = "./sound/combobreak.mp3";
            }
        });
    }
    upDeadTimeData(){
        $.post("upDeadTimeData.php",{name : name},function(result){
            let tmpD = JSON.parse(result);
            let dNum = parseInt(tmpD.deadTime);
            if(dNum + ayaNum > Math.floor(level / 5) + 1){
                biu.src = "./sound/combobreak.mp3";
                alert("那么，代价是什么呢？");
                ayaNum = 0;
                msg.gameOverRefresh()
                ayaKnocked = 0;
                gameOverP.style.display = "block";
            }
        });
    }
}