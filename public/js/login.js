$('.btn-a').on('click', function () {
  let formData = $('#normal-form').serialize();
  $.ajax({
    type: 'post',
    url: '/login',
    data: formData,
    success: function (data) {
      // console.log(data);
      if (data.code == '1101') {
        alert(data.message);
      }else if (data.code == '1102') {
        location.href = "/index"
      }
    }
  })
})