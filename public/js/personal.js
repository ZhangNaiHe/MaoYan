let show = function(){
  $.ajax({
    type:'get',
    url:'/personalSele',
    data:'',
    success:function(data){
      console.log(data);
    }
  })
}
show();
$('#fileUpload').change(function () {
  var formData = new FormData();
  let file = $(this)[0].files[0];
  formData.append('avatar', file);
  console.log(1);
  $.ajax({
    type: 'post',
    url: '/personalUpload',
    contentType: false,
    processData: false,
    data: formData,
    success: function (data) {
      console.log(data);
      let str = template('personalAvatar-template', data);
      $('.yz_avatar-container').html(str);
    }
  })
})

$('.form-save-btn').click(function () {
  let formData = $('.userexinfo-form').serialize();
  console.log(formData);
  let id = $(this).data('id');
  console.log(id);
  let avatar = $('input[type="hidden"].hid').val();
  console.log(formData + '&id=' + id + '&avatar=' + avatar);
  $.ajax({
    type: 'post',
    url: '/personalUpdate',
    data: formData + '&id=' + id + '&avatar=' + avatar,
    success: function (data) {
      if (data.code == '1401') {
        location.href = '/personal';
      }
    }
  })

})