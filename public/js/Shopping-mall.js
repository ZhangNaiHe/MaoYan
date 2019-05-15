// 显示页面
let Show = function () {
  // console.log(1);
  $.ajax({
    type: 'get',
    url: '/shoppingxs',
    data: '',
    success: function (data) {
      let cateshowHtml = template('cate_edit_template', { list: data });
      $('.product').html(cateshowHtml);
    }
  })
}
Show();
