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
// 查询
$('.product').on('click', '.prodect-item', function () {
  let id = $(this).data('id');
  // console.log(id)
  // 请求方式: get(获取数据) post(发送数据) delete(删除数据) put(更新数据) 
  $.ajax({
    type: 'get',
    url: '/cx',
    data: {
      id: id
    },
    success:function (data) {
      // console.log(data);
      
        // location.href=('/commodity');
      
     
    }
  })
})