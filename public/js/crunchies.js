
// #region js效果代码
window.onload = function () {
    // #region  导航条
    // 1.获取所有的a标签
    let yz_aLink = document.querySelectorAll('.yz_category_navbar li a');
    // console.log(yz_aLink);
    // 2.遍历所有的a标签
    for (let i = 0; i < yz_aLink.length; i++) {
        // 3.给每个a标签添加点击事件
        yz_aLink[i].onclick = function () {
            let yz_activeA = document.querySelector('.yz_category_navbar li .yz_active');
            let yz_activeB = document.querySelector('.yz_category_navbar li .yz_active2');
            let yz_cont = yz_activeA.getAttribute('cont');
            document.getElementById(yz_cont).style.display = 'none';
            this.parentNode.append(yz_activeB);
            // 4.4 删除自己身上的class的类名
            yz_activeA.removeAttribute('class');
            // 5.让点击的a标签添加一个active的class 让点击的a标签对应的内容显示
            // 5.1 点谁谁就要加active的class
            this.className = 'yz_active';
            // 5.2 获取点击元素身上的cont属性的值
            let nowCon = this.getAttribute('cont');
            // 5.3 根据点击元素身上的cont属性的值获取id为cont属性值的section 让它显示
            document.getElementById(nowCon).style.display = 'block';
            return false;
        }
    }
    // #endregion


}

// #endregion



// #region node代码

// #region 热映口碑榜数据
let showMovie1 = function () {
    $.ajax({
        type: 'get',
        url: '/board/1',
        data: '',
        success: function (data) {
            let str = template('crunchies_template', { list: data });
            $('.yz_board-wrapper_1').html(str);
            $('.yz_board-index_1').html('');
        }
    })
}
showMovie1();
// #endregion

// #region 最受期待榜
let showMovie2 = function () {
    $.ajax({
        type: 'get',
        url: '/board/2',
        data: '',
        success: function (data) {
            // console.log(data);
            let str = template('crunchies_qidai_template', { list: data });
            $('.yz_board-wrapper_2').html(str);
            $('.yz_board-index_1').html('');
        }
    })
}
showMovie2();
// #endregion

// #region 国内票房榜
let showMovie3 = function () {
    $.ajax({
        type: 'get',
        url: '/board/3',
        data: '',
        success: function (data) {
            // console.log(data);
            let str = template('crunchies_guonei_template', { list: data });
            $('.yz_board-wrapper_3').html(str);
            $('.yz_board-index_1').html('');
        }
    })
}
showMovie3();
// #endregion

// #region 北美票房榜
let showMovie4 = function () {
    $.ajax({
        type: 'get',
        url: '/board/4',
        data: '',
        success: function (data) {
            // console.log(data);
            let str = template('crunchies_beimei_template', { list: data });
            $('.yz_board-wrapper_4').html(str);
            $('.yz_board-index_1').html('');
        }
    })
}
showMovie4();
// #endregion

// #region TOP100
let showMovie5 = function () {
    $.ajax({
        type: 'get',
        url: '/board/5',
        data: '',
        success: function (data) {
            // console.log(data);
            let str = template('crunchies_template', { list: data });
            $('.yz_board-wrapper_5').html(str);
            $('.yz_board-index_1').html('');
        }
    })
}
showMovie5();
// #endregion

// #region 波希米亚狂想曲 -- 短评
let showMovie6 = function () {
    $.ajax({
        type: 'get',
        url: '/BRcomment',
        data: '',
        success: function (data) {
            // console.log(data);
            let commentData = template('BR_template', { list: data });
            $('.yz_comment_list').html(commentData);
        }
    })
}
showMovie6();
// #endregion

// #region 波希米亚狂想曲 -- 点击想看
let showMovie7 = function () {
    $('#yz_want_see').on('click', function () {
        console.log(1);
        $.ajax({
            type: 'get',
            url: '/BRwantSee',
            data: '',
            success: function (data) {
                location.href = '/login';
            }
        })
    })
}
showMovie7();
// #endregion

// #region
let showMovie8 = function () {
    $.ajax({
        type: 'get',
        url: '/payment',
        data: '',
        success: function (data) {
            // let str = template('payment_template', { list: data });
            // $('.yz_payment_data').html(str);
            console.log(data);
        }
    })
}
showMovie8();
// #endregion

// #endregion






















