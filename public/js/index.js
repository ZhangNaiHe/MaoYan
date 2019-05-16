let right_one = function () {
  $.ajax({
    type: 'get',
    url: '/index',
    data: '',
    success: function (data) {
      let str = template('right-one', { list: data });
      // console.log(str);
      $('.right-inner').html(str);
    }
  })
}
right_one()


let right_one_two =function(){
  $.ajax({
    type:'get',
    url:'/indexroom',
    data:'',
    success:function(data){
      let str = template('right-one-two', { list: data });
      // console.log(str);
      $('.right-innerqq').html(str);
    }
  })
  }
  right_one_two()



let left_one = function(){
   $.ajax({
        type:'get',
        url:'/indexroom2',
        data:'',
        success:function(data){
          let str = template('left-one', { list: data });
          // console.log(data);
          $('.move-list').html(str);
        }
      })
}
left_one();


let left_two = function(){
  $.ajax({
       type:'get',
       url:'/indexroom3',
       data:'',
       success:function(data){
         let str = template('left-two', { list: data });
        //  console.log(data);
         $('.room').html(str);
       }
     })
}
left_two();

