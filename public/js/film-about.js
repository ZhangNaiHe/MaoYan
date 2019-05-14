// 显示页面
let filmAboutShow = function () {
  $.ajax({
    type: 'get',
    url: '/filmAboutShow',
    data: "",
    success: function (data) {
      let str = template('filmabout-template', { list: data });
      $('.movie-list').html(str);
    }
  })
}
filmAboutShow();

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
  console.log(id);
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

let a = function () {
  // console.log(1);
  $.ajax({
    type: 'get',
    url: '/filmAboutArea',
    data: '',
    success: function (data) {
      // console.log(data);
      let str = template('area_template', { list: data });
      // console.log(str);
      $('.btn-t').html(str);
    }
  })
}
a();


$('.btn-t').on('click', '.btn-type', function () {
  let id = $(this).data('id');
  console.log(id);
  $.ajax({
    type: 'get',
    url: '/filmAboutQy',
    data: { id: id },
    success: function (data) {
      if (data.code == '1002') {
        $('.movie-list').html('<div>'+data.msg+'</div>');
        console.log(data);
      } else {
      let str = template('filmabout-template', { list: data });
      $('.movie-list').html(str);
      }
      // console.log(data);
   
    }
  })
})

