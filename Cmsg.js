class Cmsg{
    showUser(){
        showMsg.innerHTML = `
        <p><em>${name} </em>即将出发！</p>
        <p>本台记者姬海棠将为您进行全程跟踪报道</p>
        `;
    }
    helpRefresh(){
        showMsg.innerHTML = `
        <p>本台记者姬海棠正在为您对<em>${name}</em> 进行跟踪拍摄</p>
        <table border="0.5">
            <tr>
                <th>分数</th>
                <th>${score}</th>
            </tr>
            <tr>
                <th>等级</th>
                <th>${level}</th>
            </tr>
            <tr>
                <th>残机</th>
                <th>${ayaNum}</th>
            </tr>
            <tr>
                <th>特殊符卡</th>
                <th>${specialCardNum}</th>
            </tr>
        </table>
        `;
    }
    gameOverRefresh(){
        showMsg.innerHTML = `
        <p><em>${name}</em> 已阵亡,最终得分： <em>${lastScore}</em></p>
        <p>本台记者姬海棠正在为您跟踪报道</p>
        <table border="0.5">
            <tr>
                <th>分数</th>
                <th>${lastScore}</th>
            </tr>
            <tr>
                <th>等级</th>
                <th>${level}</th>
            </tr>
            <tr>
                <th>残机</th>
                <th>${ayaNum}</th>
            </tr>
            <tr>
                <th>特殊符卡</th>
                <th>${specialCardNum}</th>
            </tr>
        </table>
        `;
        userInfo.updataScore();
        startBtn.innerHTML = "重新开始";
        danmakuArry.splice(0, danmakuArry.length);
        btnFlag = 0;
        startBtn.style.left = "130px";
        startBtn.style.top = "400px";
    }
}