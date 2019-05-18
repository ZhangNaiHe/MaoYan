// 进入显示页面

let show = function () {
    $.ajax({
        type: 'get',
        url: '/ticketmovie',
        data: '',
        success: function (data) {
            let tem = template('ticket-film', data[0]);
            $('.t').html(tem);
        }
    })
}
show();

// 点击确定按钮
$('.demo').on('click', '.btn', () => {
    //获取li的自定义属性值
    $('.demo .selected').attr('id');
    let arr = [];
    for (var i = 0; i < $('.demo .selected').length; i++) {
        arr.push($('.demo .selected').eq(i).attr('id'));
    }
    console.log(arr);
    // 获取总价
    // let money = $('#total_price').text();

    let name = $('#movie').html();
    console.log(movie);
    let date = $('#data').html();
    console.log(date);
    let sale = $('#yuan').text() + 0;
    // console.log(sale)
    let much = arr.length + 1;
    let money = sale * much;
    $.ajax({
        type: 'get',
        url: '/tickets',
        data: {
            id: arr,
            name:name,
            date:date,
            money:money
        },
        success: function (data) {
            // console.log(data);
            if (data.code == '1004') {
                // console.log(data.message);
                location.href = '';
            }
        }
    })
})