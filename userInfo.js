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
}