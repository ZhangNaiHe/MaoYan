 // 3.1 获取所有a标签
 var aLink = document.querySelectorAll('.small-ul>li>img');
 // 3.2 遍历所有a标签
 for (var i = 0; i < aLink.length; i++) {
   // 3.3 给每个a标签添加一个点击事件 并写处理程序
   aLink[i].onmouseover = function () {
     // 3.4 获取点击的那个a标签上的href的值 给预览图img的src
     document.querySelector('#Img').src = this.src;
     // 3.5 获取点击的那个a标签上的title的值 给p的内容
    //  document.querySelector('p').innerText = this.title;
     // 3.6 阻止跳转
     return false;
   }
 }

// xia
     // 获取所有按钮
     var as = document.querySelectorAll('.list>div');
     // 获取内容
     var dw = document.querySelectorAll('.dv');
     // 遍历所有按钮
     for (var i = 0; i < as.length; i++) {
         // 给所有按钮添加自定义元素
         as[i].setAttribute('in', i);
         // 给所有按钮添加点击事件
         as[i].onclick = function () {
             // 再次遍历
             for (var j = 0; j < as.length; j++) {
                 // 删除class
                 as[j].removeAttribute('class');
                 // 让div不显示
                 dw[j].style.display = 'none';
             }
             // 给当前按钮添加类名
             this.className = 'figure';
             // 让当前div显示
             dw[this.getAttribute('in')].style.display = 'block'
         }
     }
// 立即抢购

document.querySelector('.purchase-btn').onclick = function () {

  document.querySelector('.qg').style.display = 'block';
  var timer = setTimeout(function () {
    document.querySelector('.qg').style.display = 'none';
  }, 1000)
}

