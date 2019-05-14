// 导入连接数据库的包
const conn = require('../data/film');

module.exports.shopping = (req, res) => {
  res.render('Shopping-mall');
}