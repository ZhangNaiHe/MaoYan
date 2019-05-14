// 导入连接数据库的包
const conn = require('../data/film');

module.exports.avengers = (req, res) => {
  res.render('Avengers');
}