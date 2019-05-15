// 导入数据库包
const conn = require('../data/film');

// 显示首页
module.exports.show = (req, res) => {
    res.render('filmroom');
}

module.exports.filmroomShow = (req, res) => {
    conn.query('select * from film',(error,result) => {
        if (error) return console.log(error);
        console.log(result);
        if (result == '') {
            res.json({
                code: 1001,
                msg: '抱歉,没有找到相关结果,请尝试用其他条件筛选.'
            })

        } else {
            res.json(result);
        }
    })
}
