const scoreListBtn = document.querySelector("#scoreListBtn");
const scoreList = document.querySelector("#scoreList");
var userInfo = new CuserInfo();


function ajaxRefresh(){
    userInfo.getScore();
    var nowLength = scoreArray.length;
    scoreList.innerHTML = `<p>当前记录总人数：${nowLength}</p>
    <table border="0.5"></table>`;
    var table = document.querySelector("table");
    for( i = 0; i < nowLength && i <= 10; i ++){
        table.innerHTML += `
        <tr>
            <th>第${i + 1}:<br>${scoreArray[i].name}</th>
            <th>分数：${scoreArray[i].score}</th>
        </tr>
    `;
    }
    $(document).ready(function(){
        $('.collapsible').collapsible();
      });
}

userInfo.getScore();

// scoreListBtn.addEventListener("click", function(){
//     ajaxRefresh();
// })