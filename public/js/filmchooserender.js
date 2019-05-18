let filmChooseShow = function () {
    // console.log(1)
    // console.log(1);
    $.ajax({
        type: 'get',
        url: '/filmChooseShow',
        data: '',
        success: function (data) {
            let str = template('choose-template', { list: data });
            console.log(str);
            $('.movie-list').html(str);

        }
    })
}
filmChooseShow();

// filmChooseMassage();
let a = function () {
    $.ajax({
        type: 'get',
        url: '/filmChooseMsg',
        data: '',
        success: function (data) {
            let str = template('massage-template', data);
            // console.log(str);
            $('.movie-info').html(str);
        }
    })
}
a();

// filmchoose_template


$('.movie-list').on('click', '.movie', function () {
    let id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/filmChooseSele',
        data: { id: id },
        success: function (data) {
            // console.log(data)
            let str = template('massage-template', data.data);
            // console.log(str);
            $('.movie-info').html(str);
            let str1 = template('filmchoose_template',{list:data.data1}) ;
            $('.plist tbody').html(str1);
        }
    })
})

let b = function () {
    $.ajax({
        type:'get',
        url: '/filmChooseTimes',
        data: '',
        success: function (data) {
            // console.log(1);
            // console.log(data)
            let str = template('times-template',{list:data});
            // console.log(str);
            $('.show-date').html(str);
        }
    })
}
b();

// $('.movie-list').on('click','.movie',function () {
//     let id = $(this).attr('data-id');
//     console.log(id);

//     $.ajax({
//         type: 'get',
//         url: '/filmChooseDate',
//         data: {id : id},
//         success: function (data) {
//             console.log(data);
//             // let str = template('times-template',{list :data});
//             // console.log(str);
//             // $('.show-date').html(str);
//         } 
//     })
// })