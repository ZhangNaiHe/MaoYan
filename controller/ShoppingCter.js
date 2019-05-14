// 导入连接数据库的包
const conn = require('../data/film');

module.exports.shopping = (req, res) => {
  res.render('Shopping-mall');
}
module.exports.shoppingxs = (req, res) => {
  conn.query('select * from shopping', (error, results) => {
    if (error) return console.log(error);

    res.json(results);
  })
}