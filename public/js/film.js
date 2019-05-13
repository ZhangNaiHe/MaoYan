let show = function () {
  var btn = document.querySelectorAll('.btn-o>li>a');
  for (var i = 0; i < btn.length; i++) {
    btn[i].setAttribute('index', i);
    btn[i].onclick = function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].removeAttribute('class');
      }
      this.className = 'active';
    }
  }

  var btn1 = document.querySelectorAll('.btn-t>li>a');
  for (var i = 0; i < btn1.length; i++) {
    btn1[i].setAttribute('index', i);
    btn1[i].onclick = function () {
      for (var j = 0; j < btn1.length; j++) {
        btn1[j].removeAttribute('class');
      }
      this.className = 'active';
    }
  }

  var btn2 = document.querySelectorAll('.btn-e>li>a');
  for (var i = 0; i < btn2.length; i++) {
    btn2[i].setAttribute('index', i);
    btn2[i].onclick = function () {
      for (var j = 0; j < btn2.length; j++) {
        btn2[j].removeAttribute('class');
      }
      this.className = 'active';
    }
  }
}
show();


// 显示页面
let filmShow = function(){
  $.ajax({
    type:'get',
    url:'/filmShow',
    data:'',
    success: function(data){
     if(data.code == 1000){
      $('.movie-list').html('<div>'+data.msg+'</div>');
     }
    }
  })
}
filmShow();