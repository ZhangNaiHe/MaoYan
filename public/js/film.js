
let filmShow = function () {
  $.ajax({
    type: 'get',
    url: '/filmShow',
    data: '',
    success: function (data) {
      // console.log(data);
      if (data.code == '1000') {
        $('.movie-list').html('<div>' + data.msg + '</div>');
        console.log( $('.movie-list').html('<div>' + data.msg + '</div>'));
      } else {
        let str = template('film-template', {list: data});
        $('.movie-list').html(str);
      }
    }
  })
}
filmShow();


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
        let str = template('film-template', { list: data });
        // console.log(str);
        $('.movie-list').html(str);
      }
    }
  })
})


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
        let str = template('film-template', { list: data });
        // console.log(str);
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


$('.btn-rm').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutRm',
    data: '',
    success: function (data) {
      console.log(data);
      let str = template('film-template', { list: data });
      // console.log(str);
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
      let str = template('film-template', { list: data });
      // console.log(str);
      $('.movie-list').html(str);
    }
  })
})