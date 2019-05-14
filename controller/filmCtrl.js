// 导入连接数据库的包
const conn = require('../data/film');
// #region 显示首页
module.exports.show = (req, res) => {
  res.render('film');
}

module.exports.filmShow = (req, res) => {
  conn.query('select * from showing', (error, result) => {
    if (error) return console.log(error);
    console.log(result);
    if (result == ''){
      res.json({
        code: 1000,
        msg: "抱歉，没有找到相关结果，请尝试用其他条件筛选。"
      })
    }else{
      res.json(result);
    }
  })
}
// #endregion
