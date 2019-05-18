// #region js效果代码

// #region 支付时间倒计时
// let maxtime = 14 * 60 - 1;
let maxtime = 1 * 6 - 1;
CountDown();
function CountDown() {
    if (maxtime >= 0) {
        // 分钟数
        minutes = Math.floor(maxtime / 60);
        // 秒数
        seconds = Math.floor(maxtime % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.querySelector('.yz_minute').innerHTML = minutes;
        document.querySelector('.yz_second').innerHTML = seconds;
        --maxtime;
    } else {
        clearInterval(timer);
        // alert("时间到,结束!");
        // 倒计时结束弹出提示框
        let yzPage = document.querySelector('.yz_page');
        let aBody = document.querySelector('body');
        yzPage.style.display = 'block';
        aBody.style.overflow = 'hidden';
        // 给提示框中的我知道了按钮添加点击事件跳转页面
        let skipBtn = document.querySelector('#yz_skipBtn');
        skipBtn.onclick = function () {
            location.href = '/ticketselection-ZJ';
        }
    }
}
timer = setInterval("CountDown()", 1000);
// #endregion

// #endregion



// #region  node代码

// #region  

// #endregion

// #endregion