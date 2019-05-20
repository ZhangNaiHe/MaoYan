// 添加点击事件
$('.btn-a').on('click', function () {
  // 获取val值
  let mobile = $("input[name='mobile']").val();
  let password = $("input[name='password']").val();
  // 用正则判断
  if (!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(mobile)) {
    // 弹出框提示用户输入正确手机号
    alert('请输入正确的手机号');
    return;
  }
  // 判断密码
  if (password == '') {
    // 如果为空弹框提示用户输入密码
    alert('请填写密码后再登陆！');
    return;
  }
  
  // 发起ajax请求
  $.ajax({
    type: 'POST',
    url: '/login',
    data: {mobile:mobile,password:password},
    success: function (data) {
      if (data.code == '1101') {
        alert(data.message);
      }else if (data.code == '1102') {
        alert('验证成功,登陆成功!');
        location.href = "/"
      }
    }
  })


});