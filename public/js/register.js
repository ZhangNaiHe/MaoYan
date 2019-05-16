
window.onload=function(){
    //密码验证
$("#passWord").onfocus = function() {
  $('#warn3').innerHTML = '<span>密码长度至少为6位，请使用数字、字母、下划线组合！</span>'
}
$('#passWord').onkeyup = function() {
  var regCode = /[^\w]/g;
  var regCode1 = /([0-9]+[a-zA-z]+)|([a-zA-z]+[0-9]+)/g //密码必须有数字和字母
  if(regCode.test(this.value)) {
      $('#warn3').innerHTML = '<span>含有非法字符！</span>';
  }
  if(this.value.length > 6 && regCode1.test(this.value)) { //密码长度大于6，且含有数字、字母时强度为中
      $('#mid').style.backgroundColor = 'red';
      $('#ensure').removeAttribute('disabled');
      $('#warn4').style.visibility = 'visible';
      $('#warn4').innerHTML = '<span>请再次输入密码！</span>';
  } else {
      $('#mid').style.backgroundColor = 'orange';
      $('#ensure').setAttribute('disabled', "disabled");
      $('#warn4').style.visibility = 'hidden';
  }
  if(this.value.length > 12) { //密码长度大于12，且含有数字、字母时为强度为高
      $('#high').style.backgroundColor = 'red';
  } else {
      $('#high').style.backgroundColor = 'orange';
  }
}
$('#passWord').onblur = function() {
  if($("passWord").value == '') {
      $('warn3').innerHTML = '<span>不能为空！</span>';
  } else if(this.value.length < 6) {
      $('warn3').innerHTML = '<span>密码小于6个字符！</span>';
  } else {
      $('warn3').innerHTML = 'OK！';
  }
}




function pro() {//产生随机6位验证码
  var code1='';
  var code2='';
  var arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '哎', '呦', '我', '去', '小', '鸡', '炖', '蘑', '菇', '天', '王', '盖', '地', '虎', '隔', '壁', '王', '叔', '叔');
  for(var i = 0; i <6; i++) {
      var element = Math.floor(Math.random() * arr.length);
      code1 += arr[element];
  }
  // console.log(code1)
  $('#yan').val(code1); //获取验证码   
}

function Color () {//产生随机颜色
  var color='#';
  var bgcolor='#';
  var colorArr=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
  for (var j=0;j<6;j++) {
      var colOne=Math.floor(Math.random() * colorArr.length);
      var colTwo=Math.floor(Math.random() * colorArr.length);
      color+=colorArr[colOne];
      bgcolor+=colorArr[colTwo];
  }
  // console.log(bgcolor);
  $('#yan').css({'color':color});
  $('#yan').css({'backgroundColor':bgcolor});
}

    pro();//调用函数（产生验证码和颜色的函数）
    Color ();

    $('#dasong'),onclick=function(){
      pro();
      Color();
    }
    $('#write').onfocus=function(){
        //$('warn5').style.visibility='visible';
        $('#warn5').html('请输入验证码')
        // console.log('#warn5')
    }
    $('#write').onblur=function(){
        if(this.value==$('#yan').value){
            $('#warn5').innerHTML='OK!';
        }else{
            $('#warn5').innerHTML='<span>验证码不正确，请重新输入！</span>';            
        }
    }
}


















$('.btn').on('click', function () {
  var formdata = $('#form-waps').serialize();
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