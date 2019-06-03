if(name == ""){
    window.location.href="./logIn/SignIn.html";
}
class CuserInfo{
    cleanScore(){
        $.post("cleanData.php",{name : name});
    }
    updataScore(){
        $.post("upScoreData.php",{name : name, password : pass, score : lastScore});
    }
    getScore(){
        $.get("downScoreData.php",function(result){
            scoreArray = JSON.parse(result);
        });
    }
}