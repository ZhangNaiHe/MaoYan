// 显示页面
let Show = function () {
  $.ajax({
    type: 'get',
    url: '/shoppingxs',
    data: '',
    success: function (data) {
      // 渲染模板
      let cateshowHtml = template('cate_edit_template', { list: data });
      $('.product').html(cateshowHtml);
    }
  })
}
Show();
