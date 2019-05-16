// #region js效果代码

// #region 支付时间倒计时
// let maxtime = 14 * 60 - 1;
let maxtime = 1 * 5 - 1;
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
        let yzPage = document.querySelector('.yz_page');
        let aBody = document.querySelector('body');
        yzPage.style.display = 'block';
        aBody.style.overflow='hidden';
        
    }
}
timer = setInterval("CountDown()", 1000);
// #endregion

// #endregion