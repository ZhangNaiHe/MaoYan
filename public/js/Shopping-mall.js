
let Show = function () {
    $.ajax({
      type: 'get',
      url: '/shoppingxs',
      data: '',
      success: function (data) {
        // console.log(data);
        let cateshowHtml = template('cate_show_template', { list: data });
        $('section').html(cateshowHtml);
        console.log(111)
      }
    })
  }
  Show();