// 导入数据库包
const conn = require('../data/film');

// 显示首页
module.exports.show = (req, res) => {
    res.render('filmroom');
}

// 渲染模板
module.exports.filmRoomShow = (req, res) => {
    conn.query('select * from film', (error, result) => {
      if (error) return console.log(error);
      res.json(result);
      console.log(result);
    })
  }

//   渲染品牌/
module.exports.filmRoomBrand = (req, res) => {
    conn.query('select * from brand', (error,result) => {
        if (error) return console.log(error);
        res.json(result);
    })

}

// 渲染品牌搜索内容
module.exports.filmRoomPP = (req, res) => {
    console.log(req.query.id)
    conn.query('select * from film where bra_id=?',req.query.id,(error,result) => {
        if (error) return console.log(error);
        if (result == '') {
            res.json({
                code:'1010',
                msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
            })

        } else if (result) {
            res.json(result);
            console.log(result);
        }
    })
}




// 渲染行政厅
module.exports.filmRoomDistrict = (req, res) => {
    conn.query('select * from district', (error, result) => {
        if (error) return console.log(error);
        res.json(result);
    })
}

// 渲染行政区搜索内容
module.exports.filmRoomXZQ = (req, res) => {
    conn.query('select * from film where dis_id=?',req.query.id,(error,result) => {
        if (error) return console.log(error);
        if (result == '') {
            res.json({
                code: '1011',
                msg: '抱歉，没有找到相关结果，请尝试用其他条件筛选。'
            })
        } else if (result) {
            res.json(result);
            console.log(result)
        }
    })
}



// 渲染特殊厅
module.exports.filmRoomSpecial = (req, res) => {
    conn.query('select * from special', (error, result) => {
        if (error) return console.log(error);
        res.json(result);
    })
}