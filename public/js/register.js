$('.btn').on('click', function () {
  var formdata=$('#form-waps').serialize();
  console.log(formdata);
  $.ajax({
    type: 'post',
    url: '/register',
    data: formdata,
    success: function (data) {
      // console.log(data);
      if (data.code == '1201') {
        alert("11111111")
      }
    }
  })
})