// 右边
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





  let right_two_one =function(){
    $.ajax({
      type:'get',
      url:'/indexroom4',
      data:'',
      success:function(data){
        let str = template('right-two-one', { list: data });
        // console.log(str);
        $('.right-inner-one').html(str);
      }
    })
  }
  right_two_one();


  
  let right_two_two =function(){
    $.ajax({
      type:'get',
      url:'/indexroom5',
      data:'',
      success:function(data){
        let str = template('right-two-two', { list: data });
        // console.log(str);
        $('.right-inner-two').html(str);
      }
    })
  }
  right_two_two();


  let right_two_three =function(){
    $.ajax({
      type:'get',
      url:'/indexroom6',
      data:'',
      success:function(data){
        let str = template('right-two-three', { list: data });
        // console.log(str);
        $('.right-inner-three').html(str);
      }
    })
  }
  right_two_three();


  
  let right_three =function(){
    $.ajax({
      type:'get',
      url:'/indexroom7',
      data:'',
      success:function(data){
        let str = template('right-three', { list: data });
        // console.log(str);
        $('.right-inner-four').html(str);
      }
    })
  }
  right_three();

    
  let right_three_two =function(){
    $.ajax({
      type:'get',
      url:'/indexroom8',
      data:'',
      success:function(data){
        let str = template('right-three-two', { list: data });
        // console.log(str);
        $('.right-inner-five').html(str);
      }
    })
  }
  right_three_two();














  // 左边

let left_one = function(){
   $.ajax({
        type:'get',
        url:'/indexroom2',
        data:'',
        success:function(data){
          let str = template('left-one', { list: data });
          // console.log(data);
          $('.move-aa').html(str);
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


let left_three = function(){
  $.ajax({
       type:'get',
       url:'/indexroom9',
       data:'',
       success:function(data){
         let str = template('left-three', { list: data });
        //  console.log(data);
         $('.left-inner-one').html(str);
       }
     })
}
left_three();


let left_three_one = function(){
  $.ajax({
       type:'get',
       url:'/indexroom10',
       data:'',
       success:function(data){
         let str = template('left-three-one', { list: data });
        //  console.log(data);
         $('.left-inner-two').html(str);
       }
     })
}
left_three_one();



