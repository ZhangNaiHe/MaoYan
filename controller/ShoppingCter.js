// 导入连接数据库的包
const conn = require('../data/film');

module.exports.shopping = (req, res) => {
  res.render('Shopping-mall');
}
module.exports.shoppingxs = (req, res) => {
  conn.query('select * from shopping', (error, results) => {
    if (error) return console.log(error);
    console.log(results);
    res.json(results);
  })
}
module.exports.shoppingcx = (req,res)=>{
  // console.log(req.query.id)
  conn.query('select * from commodity where shopping_id=' +req.query.id,(error,reslut)=>{
    if(error) return console.log(error);
    // console.log(reslut)
    res.render('commodity-details',reslut[0]);
    // if (results.affectedRows) {
    //   res.json({
    //     code: '1501',
    //     message: "文章添加成功"
    //   })
  
  })
}