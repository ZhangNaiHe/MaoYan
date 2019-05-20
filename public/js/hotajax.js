// 热点首页
let cateShow = function () {
    $.ajax({
        type: 'get',
        url: '/hotspot-ZJ',
        data: '',
        success: function (data) {
            let hotspot = template('', { list: data });
            $('tbody').html(hotspot);
        }
    })
}

cateShow();

