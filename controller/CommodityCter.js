// 导入连接数据库的包
const conn = require('../data/film');

module.exports.commodity = (req, res) => {
  res.render('Commodity-details');
}



module.exports.detaily = (req, res) => {
  conn.query('select * from pic1 join commodity on pic1.shopping_id=commodity.shopping_id where pic1.shopping_id=' + req.query.id, (error, reslut) => {
    if (error) return console.log(error);
    //   res.render('commodity-details',reslut[0]);
    res.json(reslut);
  })
}

module.exports.detaile = (req, res) => {
  console.log(req.query)
  conn.query('select * from pic2 join commodity on pic2.shopping_id=commodity.shopping_id where pic2.shopping_id=' + req.query.id, (error, reslut) => {
    if (error) return console.log(error);

    res.json(reslut);
    //   res.render('commodity-details',reslut[0]);
  })
}