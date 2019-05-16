


// 显示图片一
let cateShow = function () {
  let id = $('.container').data('id');
  console.log(id);
    $.ajax({
      type: 'get',
      url: '/detaily',
      data: {id:id},
      success: function (data) {
        let cateshowHtml = template('commodity_picy', { list: data });
        $('.small-ul').html(cateshowHtml);


        let aLink = document.getElementsByClassName('activeImg');
        getaLink(aLink);
      }
    })
  }
  cateShow();


  function getaLink(aLink){
    // 3.2 遍历所有a标签
    for (var i = 0; i < aLink.length; i++) {
      // 3.3 给每个a标签添加一个点击事件 并写处理程序
      aLink[i].onmouseover = function () {
        // 3.4 获取点击的那个a标签上的href的值 给预览图img的src
        document.querySelector('#Img').src = this.src;
        // 3.5 获取点击的那个a标签上的title的值 给p的内容
      //  document.querySelector('p').innerText = this.title;
        // 3.6 阻止跳转
        return false;
      }
    }
    }
  

  // 显示图片二
  let Show = function () {
    let id = $('.container').data('id');
    $.ajax({
      type: 'get',
      url: '/detaile',
      data: {id:id},
      success: function (data) {
        // console.log(data);
        let cateshowHtml = template('commodity_pice', { list: data });
        $('.info-image').html(cateshowHtml);
      }
    })
  }
  Show();