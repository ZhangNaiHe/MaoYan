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
    $('#seats_chose li').attr('id');
    let arr = [];
    for (var i = 0; i < $('#seats_chose li').length; i++) {
        arr.push($('#seats_chose li').eq(i).text());
    }
    // console.log(arr);
    // 获取总价
    // let money = $('#total_price').text();

    let name = $('#movie').html();
    // console.log(movie);
    let date = $('#when').html();
    // console.log(date);
    let sale = $('#yuan').text() + 0;
    // console.log(sale)
    let where = $('#where').text();
    let much = arr.length;
    let money = sale * much;
    if (much <= 0) {
        alert('请至少选择一个座位')
        return false;
    } else {
        $.ajax({
            type: 'get',
            url: '/tickets',
            data: {
                id: arr,
                name:name,
                date:date,
                money:money,
                where:where
            },
            success: function (data) {
                // console.log(data);
                if (data.code == '1004') {
                    // console.log(data.message);
                    location.href = '';
                }
            }
        })
    }

  
})