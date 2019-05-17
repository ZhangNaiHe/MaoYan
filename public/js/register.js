/**
 * 页面载入加载验证码
 */
var verify_code_ = '';
$(function () {
    pro();
});

/**
 * 生成指定长度的验证码
 * @param len int 验证码长度
 * @return string 返回指定长度的验证码
 */
function pro(len = 4) {//产生随机6位验证码
    var code1 = '';
    var code2 = '';
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < len; i++) {
        var element = Math.floor(Math.random() * arr.length);
        code1 += arr[element];
    }
    verify_code_ = code1;
    $('#yan').val(code1);
    Color();
}

/**
 * 产生随机颜色
 */
function Color() {
    var color = '#';
    var bgcolor = '#';
    var colorArr = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
    for (var j = 0; j < 6; j++) {
        var colOne = Math.floor(Math.random() * colorArr.length);
        var colTwo = Math.floor(Math.random() * colorArr.length);
        color += colorArr[colOne];
        bgcolor += colorArr[colTwo];
    }
    // console.log(bgcolor);
    $('#yan').css({ 'color': color });
    $('#yan').css({ 'backgroundColor': bgcolor });
}

/**
 * 点击刷新验证码
 */
$('#changeVerify').click(function () {
    pro();
});

/**
 * 手机号输入框获取以及失去焦点验证
 */
$("input[name='mobile']").focus(function () {
    $('#warn1').html('');
    $('.unitive-tip').hide();
    this.style.border = '1px solid #f76120';
});
$("input[name='mobile']").blur(function () {
    $('#warn1').html('');
    if (!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(this.value)) {
        $('#warn1').html('<i id="warn1_icon"></i>请输入您的手机号码');
    }
});

/**
 * 密码输入框获取以及失去焦点验证
 */
$("input[name='password']").focus(function () {
    $('#warn3').html('');
    this.style.border = '1px solid #f76120';
});
$("input[name='password']").blur(function () {
    $('#warn3').html('');
    if (this.value == '' || this.value.length < 6 || this.value.length > 24) {
        $('#warn3').html('<i id="warn1_icon"></i>请填写密码');
    }
});
$("input[name='repassword']").focus(function () {
    $('#warn4').html('');
    this.style.border = '1px solid #f76120';
    if (this.value != $("input[name='password']").val()) {
        $('#warn4').html('<i id="warn1_icon"></i>请再次输入密码');
    }
});
$("input[name='repassword']").blur(function () {
    $('#warn4').html('');
    if (this.value != $("input[name='password']").val()) {
        $('#warn4').html('<i id="warn1_icon"></i>两次密码输入不一致，请重新输入！');
    }
});
$("input[name='password']").keyup(function () {
    var regCode = /[^\w]/g;
    var regCode1 = /([0-9]+[a-zA-z]+)|([a-zA-z]+[0-9]+)/g;//密码必须有数字和字母
    if (regCode.test(this.value)) {
        $('#warn3').html('含有非法字符！');
    }
    if (this.value.length > 6 && regCode1.test(this.value)) { //密码长度大于6，且含有数字、字母时强度为中
        $('#high').css('backgroundColor', 'red');
        $('#mid').css('backgroundColor', '');
    } else {
        $('#high').css('backgroundColor', '');
        $('#mid').css('backgroundColor', 'orange');
    }
    if (this.value.length > 12) { //密码长度大于12，且含有数字、字母时为强度为高
        $('#high').css('backgroundColor', 'red');
        $('#mid').css('backgroundColor', '');
    } else {
        $('#mid').css('backgroundColor', 'orange');
        $('#high').css('backgroundColor', '');
    }
});

/**
 * 验证码输入框获取以及失去焦点验证
 */
$("input[name='verify_code']").focus(function () {
    $('#warn5').html('');
    this.style.border = '1px solid #f76120';

});
$("input[name='verify_code']").blur(function () {
    $('#warn5').html('');
    if (this.value == '') {
        $('#warn5').html('<i id="warn1_icon"></i>请输入验证码！');
    }
});

/**
 * 表单提交
 */
$('.btn').on('click', function () {
    let mobile = $("input[name='mobile']").val();
    console.log(mobile);
    let password = $("input[name='password']").val();
    let repassword = $("input[name='repassword']").val();
    let verify_code = $("input[name='verify_code']").val();
    if (!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(mobile)) {
        $('#warn1').html('请输入正确的11位常用手机号码！');
        return;
    }
    if (password == '' || password.length < 6 || password.length > 24) {
        $('#warn3').html('密码长度为6-24位，请使用数字、字母、下划线组合！');
        return;
    }
    if (password != repassword) {
        $('#warn4').html('两次密码输入不一致，请重新输入！');
        return;
    }
    if (verify_code == '') {
        $('#warn5').html('请输入验证码！');
        return;
    }
    if (verify_code != verify_code_) {
        $('#warn5').html('<i id="warn1_icon"></i>请输入正确的验证码！');
        $("input[name='verify_code']").val('');
        pro();
        return;
    }
  

    $.ajax({
        type: 'POST',
        url: '/registera',
        data: {
              mobile:mobile,
              repassword:repassword
            },
        success: function (data) {
            //   console.log(data);
            if (data.code == '1201') {
                alert(data.message);
                location.href='/login'
            }
        }
    })
});