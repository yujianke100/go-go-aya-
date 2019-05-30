var name = "";
var pass = "";
var formDiv = document.querySelector("#formDiv");
var signUpBtn = document.querySelector("#signUpBtn");
var loginTitile = document.querySelector("#loginTitile");
var logInBackground = document.querySelector("#logInBackground");
var newsTitile = document.querySelector("#newsTitile");
var modoFlag = 1;

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
var urlId = GetQueryString("id");
if(urlId == 0){
    modoFlag = 0;
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

function GetQueryString(name){   
    var reg = new RegExp("(^|&)"+ name+"=([^&]*)(&|$)");     
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则     
    if(r!=null)return  unescape(r[2]); return null;
}

signUpBtn.addEventListener("click",function(){
    if(modoFlag == 1)
        modoFlag = 0;
    else
        modoFlag = 1;
    window.history.replaceState({}, 0, 'http://aya.shinnshi.xyz/logIn/SignIn.html?id=' + modoFlag);
    if(modoFlag == 0){
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
