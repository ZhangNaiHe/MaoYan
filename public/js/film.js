// 显示页面
let filmShow = function () {
  // 发起ajax请求
  $.ajax({
    type: 'get',
    url: '/filmsShow',
    data: '',
    success: function (data) {
      // console.log(data);
      // 判断
      if (data.code == '1000') {
        // 显示msg没有影片内容
        $('.movie-list').html('<div>' + data.msg + '</div>');
        console.log( $('.movie-list').html('<div>' + data.msg + '</div>'));
      } else {
        // 渲染模板插入
        let str = template('film-template', {list: data});
        $('.movie-list').html(str);
      }
    }
  })
}
// 调用
filmShow();

// 渲染
let s = function () {
  $.ajax({显示
    type: 'get',
    url: '/filmType',
    data: '',
    success: function (data) {
      let str = template('nav_template', { lis: data });
      $('.btn-o').html(str);
    }
  })
}
s();

// 点击类型进行选择
$('.btn-o').on('click', '.btn-type', function () {
  let id = $(this).data('id');
  $.ajax({
    type: 'get',
    url: '/filmAq',
    data: { id: id },
    success: function (data) {
      if (data.code == '1001') {
        $('.movie-list').html('<div>' + data.msg + '</div>');
      } else {
        let str = template('film-template', { list: data });
        // console.log(str);
        $('.movie-list').html(str);
      }
    }
  })
})

// 渲染显示
let a = function () {
  $.ajax({
    type: 'get',
    url: '/filmArea',
    data: '',
    success: function (data) {
      let str = template('area_template', { list: data });
      $('.btn-t').html(str);
    }
  })
}
a();

// 点击区域选择
$('.btn-t').on('click', '.btn-type', function () {
  let id = $(this).data('id');
  $.ajax({
    type: 'get',
    url: '/filmQy',
    data: { id: id },
    success: function (data) {
      console.log(data);
      if (data.code == '1002') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('film-template', { list: data });
        // console.log(str);
        $('.movie-list').html(str);
      }
    }
  })
})

// 渲染
let y = function () {
  $.ajax({
    type: 'get',
    url: '/filmYear',
    data: '',
    success: function (data) {
      let str = template('year_template', { list: data });
      $('.btn-e').html(str);
    }
  })
}
y();

// 点击年代选择对应的影片
$('.btn-e').on('click', '.btn-type', function () {
  let id = $(this).data('id');
  $.ajax({
    type: 'get',
    url: '/filmNd',
    data: { id: id },
    success: function (data) {
      // console.log(data);
      if (data.code == '1003') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('film-template', { list: data });
        // console.log(str);
        $('.movie-list').html(str);
      }
    }
  })
})
// 渲染年代

// 点击热门进行排序
$('.btn-rm').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmRm',
    data: '',
    success: function (data) {
      console.log(data);
      let str = template('film-template', { list: data });
      // console.log(str);
      $('.movie-list').html(str);
    }
  })
})

// 点击时间根据事件排序
$('.btn-sj').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmSj',
    data: '',
    success: function (data) {
      console.log(data);
      let str = template('film-template', { list: data });
      // console.log(str);
      $('.movie-list').html(str);
    }
  })
})