// 显示页面并渲染
let filmChooseShow = function () {
    $.ajax({
        type: 'get',
        url: '/filmChooseShow',
        data: '',
        success: function (data) {
            let str = template('choose-template', { list: data });
            console.log(str);
            $('.movie-list').html(str);

        }
    })
}
filmChooseShow();

// 渲染
let a = function () {
    $.ajax({
        type: 'get',
        url: '/filmChooseMsg',
        data: '',
        success: function (data) {
            let str = template('massage-template', data);
            // console.log(str);
            $('.movie-info').html(str);
        }
    })
}
a();

// 给每个图片添加点击事件
$('.movie-list').on('click', '.movie', function () {
    // 获取id
    let id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/filmChooseSele',
        data: { id: id },
        success: function (data) {
            let str = template('massage-template', data.data);
            $('.movie-info').html(str);
            let str1 = template('filmchoose_template',{list:data.data1}) ;
            $('.plist tbody').html(str1);
        }
    })
})

// 渲染
let b = function () {
    $.ajax({
        type:'get',
        url: '/filmChooseTimes',
        data: '',
        success: function (data) {
            let str = template('times-template',{list:data});
            $('.show-date').html(str);
        }
    })
}
b();