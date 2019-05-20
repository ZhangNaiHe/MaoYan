// 显示页面
let filmAboutShow = function (pageNum,pageSize) {
  $.ajax({
    type: 'get',
    url: '/filmAboutShow',
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 3
    },
    success: function (data) {
      let str = template('filmabout-template', { list: data.data });
      $('.movie-list').html(str);
      $('.pagination').twbsPagination({
        // 总共有多少页
        totalPages: Math.ceil(data.pageTotal / data.pageSize),
        // 显示页码的数量有几个
        visiblePages: 2,
        // 点击的时候调用方法
        onPageClick: function (event, page) {
          console.log(page)
          filmAboutShow(page, 10);
        }
      });

    }
  })
}
filmAboutShow(1,10);

let s = function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutType',
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
    url: '/filmAboutAq',
    data: { id: id },
    success: function (data) {
      if (data.code == '1001') {
        $('.movie-list').html('<div>' + data.msg + '</div>');
      } else {
        let str = template('filmabout-template', { list: data });
        $('.movie-list').html(str);
      }
    }
  })
})



// 渲染
let a = function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutArea',
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
    url: '/filmAboutQy',
    data: { id: id },
    success: function (data) {
      console.log(data);
      if (data.code == '1002') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('filmabout-template', { list: data });
        $('.movie-list').html(str);
      }
    }
  })
})

let y = function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutYear',
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
    url: '/filmAboutNd',
    data: { id: id },
    success: function (data) {
      console.log(data);
      if (data.code == '1003') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('filmabout-template', { list: data });
        $('.movie-list').html(str);
      }
    }
  })
})
// 渲染年代

// 排序
$('.btn-rm').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutRm',
    data: '',
    success: function (data) {
      console.log(data);
      let str = template('filmabout-template', { list: data });
      $('.movie-list').html(str);
    }
  })
})
$('.btn-sj').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutSj',
    data: '',
    success: function (data) {
      console.log(data);
      let str = template('filmabout-template', { list: data });
      $('.movie-list').html(str);
    }
  })
})