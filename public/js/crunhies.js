window.onload = function () {
    // #region  导航条
    // 1.获取所有的a标签
    var yz_aLink = document.querySelectorAll('.yz_category_navbar li a');
    // console.log(yz_aLink);
    // 2.遍历所有的a标签
    for (var i = 0; i < yz_aLink.length; i++) {
        // 3.给每个a标签添加点击事件
        yz_aLink[i].onclick = function () {
            var yz_activeA = document.querySelector('.yz_category_navbar li .yz_active');
            var yz_cont = yz_activeA.getAttribute('cont');
            document.getElementById(yz_cont).style.display = 'none';
            // 4.4 删除自己身上的class的类名
            yz_activeA.removeAttribute('class');
            // 5.让点击的a标签添加一个active的class 让点击的a标签对应的内容显示
            // 5.1 点谁谁就要加active的class
            this.className = 'yz_active';
            // 5.2 获取点击元素身上的cont属性的值
            var nowCon = this.getAttribute('cont');
            // 5.3 根据点击元素身上的cont属性的值获取id为cont属性值的section 让它显示
            document.getElementById(nowCon).style.display = 'block';
            return false;
        }
    }
    // #endregion
}