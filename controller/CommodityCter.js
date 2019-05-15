// 导入连接数据库的包
const conn = require('../data/film');

module.exports.commodity = (req, res) => {
  res.render('Commodity-details');
}
module.exports.commodity = (req, res) => {
    let id=[res.query.id]
    console.log(id)
   /* conn.query('select * from commodity where id=? ',id,(error, result) => {
       if(error) {
           return console.log(error);
       } else {
           res.render('', res);
       }
   }) */
  }