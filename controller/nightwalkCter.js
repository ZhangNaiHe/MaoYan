// 导入连接数据库的包
const conn = require('../data/film');

module.exports.nightwalk = (req, res) => {
  res.render('night-walk');
}