
let Show = function () {
  console.log(1);
    $.ajax({
      type: 'get',
      url: '/shoppingxs',
      data: '',
      success: function (data) {
        console.log(11);
        // console.log(data);
        let cateshowHtml = template('cate_edit_template', { list: data });
        console.log(cateshowHtml);
        $('.product').html(cateshowHtml);
        console.log(111)
      }
    })
  }
  Show();