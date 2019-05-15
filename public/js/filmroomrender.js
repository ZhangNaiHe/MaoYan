let filmRoomShow = function () {
    console.log(1);
    $.ajax({
        type: 'get',
        url: '/filmRoomShow',
        data: '',
        success:function (data) {
            // console.log(1)
            let str = template('film-template',{list:data});

            // console.log(str);
            $('.e').html(str);
        }
    })
}

filmRoomShow();

let s = function () {
    $.ajax({
        type: 'get',
        url: '/filmRoomBrand',
        data: '',
        success: function (data) {
            // console.log(data);
        let str = template('brandroom_template',{list:data});
        // console.log(str);
        $('.a').html(str);
        }
    })
}

s();

// 点击品牌进行查询
$('.a').on('click','.btn-type',function () {
    let id = $(this).data('id');

    $.ajax({
        type: 'get',
        url: '/filmRoomPP',
        data: { id: id },
        success:function (data) {
             if (data.code == '1010') {
                 $('.e').html('<div>' + data.msg + '</div>')     
             } else {
                console.log(data);
                let str = template('film-template',{list:data});
                $('.e').html(str);
             }
            console.log(data)
        }
    })
})
// console.log('0');


// 行政区
let z = function () {
    console.log(1);
    $.ajax({
      type: 'get',
      url: '/filmRoomDistrict',
      data: '',
      success: function (data) {
        console.log(data);
        let str = template('districtroom_template', { list: data });

        // console.log(str);
        $('.b').html(str);
      }
    })
  }
  z();


  // 点击行政区进行查询
$('.b').on('click','.btn-type',function () {
  let id = $(this).data('id');

  $.ajax({
      type: 'get',
      url: '/filmRoomXZQ',
      data: { id: id },
      success:function (data) {
           if (data.code == '1011') {
               $('.e').html('<div>' + data.msg + '</div>')     
           } else {
              console.log(data);
              let str = template('film-template',{list:data});
              $('.e').html(str);
           }
          console.log(data)
      }
  })
})
  


//   特殊厅
let y = function () {
    console.log(1);
    $.ajax({
      type: 'get',
      url: '/filmRoomSpecial',
      data: '',
      success: function (data) {
        console.log(data);
        let str = template('specialroom_template', { list: data });

        // console.log(str);
        $('.c').html(str);
      }
    })
  }
  y();


  // 点击特殊厅进行查询
  $('.c').on('click','.btn-type',function () {
    let id = $(this).data('id');
  
    $.ajax({
        type: 'get',
        url: '/filmRoomTST',
        data: { id: id },
        success:function (data) {
             if (data.code == '1012') {
                 $('.e').html('<div>' + data.msg + '</div>')     
             } else {
                console.log(data);
                let str = template('film-template',{list:data});
                $('.e').html(str);
             }
            console.log(data)
        }
    })
  })



//   $('.btn-t').on('click', '.btn-type', function () {
//     let id = $(this).data('id');
//     console.log(id);
//     $.ajax({
//       type: 'get',
//       url: '/filmAboutQy',
//       data: { id: id },
//       success: function (data) {
//         if (data.code == '1002') {
//           $('.movie-list').html('<div>'+data.msg+'</div>');
//           console.log(data);
//         } else {
//         let str = template('filmabout-template', { list: data });
//         $('.movie-list').html(str);
//         }
//         // console.log(data);
     
//       }
//     })
//   })







