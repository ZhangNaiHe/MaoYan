


// 显示图片一
let cateShow = function () {
    // let id = $(this).data('id');
    $.ajax({
      type: 'get',
      url: '/detaily',
      data: '',
      success: function (data) {
        // console.log(data);
        let cateshowHtml = template('commodity_picy', { list: data });
        $('.small-ul').html(cateshowHtml);
      }
    })
  }
  cateShow();
  // 显示图片二
  let Show = function () {
    // let id = $(this).data('id');
    $.ajax({
      type: 'get',
      url: '/detaile',
      data: '',
      success: function (data) {
        // console.log(data);
        let cateshowHtml = template('commodity_pice', { list: data });
        $('.info-image').html(cateshowHtml);
      }
    })
  }
  Show();