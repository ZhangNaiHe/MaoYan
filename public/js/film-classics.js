
// 模拟数据
// let arr = [
//   {时间:2018,播放量:200},
//   {时间:1999,播放量:1306},
//   {时间:2019,播放量:150},
//   {时间:2010,播放量:80},
//   {时间:2011,播放量:2000},
//   {时间:2020,播放量:999}
// ];
// function arrSort(排序字段名,数据){
//   数据.sort(function(a,b){
//     if(a[排序字段名]>b[排序字段名]){
//       return 1;
//     }else{
//       return -1;
//     }
//   });
//   // 返回排序好的数据
//   return 数据
// }
// let 排好的数据 = arrSort('播放量',arr);
// console.log(排好的数据);

// 渲染页面同时创建分页
let filmAboutShow = function (pageNum,pageSize) {
  $.ajax({
    type: 'get',
    url: '/filmClassicsFild',
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 3
    },
    success: function (data) {
      // 渲染模板
      let str = template('film-template', { list: data.data });
      $('.movie-list').html(str);
      $('.pagination').twbsPagination({
        // 总共有多少页
        totalPages: Math.ceil(data.pageTotal / data.pageSize),
        // 显示页码的数量有几个
        visiblePages: 2,
        // 点击的时候调用方法
        onPageClick: function (event, page) {
          filmAboutShow(page, 10);
        }
      });

    }
  })
}
// 调用
filmAboutShow(1,10);

// 渲染
let s = function () {
  $.ajax({
    type: 'get',
    url: '/filmClassicsType',
    data: '',
    success: function (data) {

      let str = template('nav_template', { lis: data });
      $('.btn-o').html(str);
    }
  })
}
s();

// 点击是获取对应的影片
$('.btn-o').on('click', '.btn-type', function () {
  let id = $(this).data('id');
  $.ajax({
    type: 'get',
    url: '/filmClassicsAq',
    data: { id: id },
    success: function (data) {
      if (data.code == '1001') {
        $('.movie-list').html('<div>' + data.msg + '</div>');
      } else {
        let str = template('film-template', { list: data });
        // console.log(str)
        $('.movie-list').html(str);
      }
    }
  })
})

// 渲染
let a = function () {
  $.ajax({
    type: 'get',
    url: '/filmClassicsArea',
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
    url: '/filmClassicsQy',
    data: { id: id },
    success: function (data) {
      // console.log(data);
      if (data.code == '1002') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('film-template', { list: data });
        $('.movie-list').html(str);
      }
    }
  })
})


// 渲染
let y = function () {
  $.ajax({
    type: 'get',
    url: '/filmClassicsYear',
    data: '',
    success: function (data) {
      let str = template('year_template', { list: data });
      // console.log(data);
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
    url: '/filmClassicsNd',
    data: { id: id },
    success: function (data) {
      // console.log(data);
      if (data.code == '1003') {
        $('.movie-list').html('<div>' + data.msg + '</div>');

      } else {
        let str = template('film-template', { list: data });
        $('.movie-list').html(str);
      }
    }
  })
})

// 点击热门排序
$('.btn-rm').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmClassicsRm',
    data: '',
    success: function (data) {
      let str = template('film-template', { list: data });
      $('.movie-list').html(str);
    }
  })
})
// 点击事件排序
$('.btn-sj').click(function () {
  $.ajax({
    type: 'get',
    url: '/filmClassicsSj',
    data: '',
    success: function (data) {
   
      // console.log(data);
      let str = template('film-template', { list: data });
      $('.movie-list').html(str);
    }
  })
})



