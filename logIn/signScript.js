var name = "";
var pass = "";
var formDiv = document.querySelector("#formDiv");
var signUpBtn = document.querySelector("#signUpBtn");
var loginTitile = document.querySelector("#loginTitile");
var logInBackground = document.querySelector("#logInBackground");
var newsTitile = document.querySelector("#newsTitile");
var modoFlag = 1;

function BrowserType() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

    var isOpera = userAgent.indexOf("Opera") > -1;

    var isEdge = userAgent.indexOf("Edge") > -1;

    if (isEdge) {

        return "Edge"

    } //判断是否Opera浏览器

    else if (userAgent.indexOf("Firefox") > -1) {

        return "FF";

    } //判断是否Firefox浏览器

    else if (userAgent.indexOf("Chrome") > -1) {

        return "Chrome";

    }

    else if (isOpera) {

        return "Opera"

    } //判断是否Opera浏览器


    else if (userAgent.indexOf("Safari") > -1) {

        return "Safari";

    } //判断是否Safari浏览器

    else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {

        return "IE";

    } //判断是否IE浏览器
    else {
        return "Others"
    }

}
    //以下是调用上面的函数
var mb = BrowserType();



if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    alert("请在PC端使用Chrome或Firefox浏览本站！");
    window.location.href = "about:blank";
} else {
    if (mb == "Chrome") {
        ;
    }
    else {
        alert("请使用Chrome或Chrome内核的浏览器浏览本站！");
        window.location.href = "http://shinnshi.xyz";
    }
}

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}

function changePage0(){
    formDiv.innerHTML = `
    <form class="col s12" action="updata.php" method="post" id="text_form">
        <div class="row">
            <div class="input-field col s12">
                <input class = "validate" type="text" value="" id="name" name="name" maxlength="12">
                <label for="name">姓名：</label>
            </div>
            <div class="input-field col s12">
                <input type="password"  class = "validate" name="pass" id="pass" value=""  maxlength="18">
                <label for="pass">神秘代码：</label>
            </div>
            <div class="input-field col s12">
                <input type="password"  class = "validate" name="qrpass" id="qrpass" value=""  maxlength="18">
                <label for="qrpass">重复神秘代码：</label>
            </div>
        </div>
    </form>
    `;
    signUpBtn.innerHTML = "返回";
    $(signInCheckBtn).hide();
    $(signUpCheckBtn).show();
    loginTitile.innerHTML = "新记者登记";
    logInBackground.style.backgroundImage = "url(../pic/nyannyann.jpg)";
    logInBackground.style.backgroundPosition = "-50px 0";
    newsTitile.innerHTML = `霍青娥が実は広東人ですか
    ？`;
}

if(getQueryString("id") == 0){
    modoFlag = 0;
    changePage0();
}

signUpCheckBtn.addEventListener("click", function(){
    let text_form = document.getElementById('text_form');
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let qrpass = document.getElementById("qrpass").value;
        if(name == "" ){
            alert("你的名字？");
            return false;
        }
        if(pass == "" ){
            alert("我要的神秘代码呢？");
            return false;
        }
        if(qrpass !== pass){
            alert("所以你的神秘代码到底是第一个还是第二个？");
            return false;
        }
        else{
            text_form.submit();
            return true;
        }

})
signInCheckBtn.addEventListener("click", function(){
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    if(name == "" ){
        alert("你的名字？");
        return false;
    }
    if(pass == "" ){
        alert("我要的神秘代码呢？");
        return false;
    }
    var userArray = [name, pass];
    localStorage.setItem("userInformation",userArray);
    let text_form_in = document.getElementById('text_form_in');
    text_form_in.submit();
    return true;
});

signUpBtn.addEventListener("click",function(){
    if(modoFlag == 1)
        modoFlag = 0;
    else
        modoFlag = 1;
    window.history.replaceState({}, 0, 'http://aya.shinnshi.xyz/logIn/SignIn.html?id=' + modoFlag);
    if(modoFlag == 0){
        changePage0();
    }
    else{
        formDiv.innerHTML = `
        <form class="col s12" action="downdata.php" method="post" id="text_form_in">
            <div class="row">
                <div class="input-field col s12">
                    <input class = "validate" type="text" value="" id="name" name="name" maxlength="12">
                    <label for="name">姓名：</label>
                </div>
                <div class="input-field col s12">
                    <input type="password"  class = "validate" name="pass" id="pass" value=""  maxlength="18">
                    <label for="pass">神秘代码：</label>
                </div>
            </div>
        </form>
        `;
        signUpBtn.innerHTML = "注册";
        $(signInCheckBtn).show();
        $(signUpCheckBtn).hide();
        loginTitile.innerHTML = "记者身份确认";
        logInBackground.style.backgroundImage = "url(../pic/shikieiki.jpg)";
        logInBackground.style.backgroundPosition = "-100px 0";
        newsTitile.innerHTML = `閻魔様の暴走は一体何故か
        ？`;
    }
});
$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
        if(modoFlag == 1){
            $('#signInCheckBtn').click();
        }
        else{
            $('#signUpCheckBtn').click();
        }
    }
});
