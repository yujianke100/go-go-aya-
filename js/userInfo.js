if(name == ""){
    window.location.href="./logIn/SignIn.html";
}
class CuserInfo{
    updataScore(){

    }
    getScore(){
        $.post('./update.php');
    }
}