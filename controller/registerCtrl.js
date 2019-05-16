const conn = require('../data/index');
module.exports.show=(req,res)=>{
  res.render('register')
}

module.exports.userregister=(req,res)=>{
  let param = [req.body.iphone,req.body.password];
  console.log(param);
  conn.query('insert into users values(null,?,?)',param,(error,data)=>{
    if(error) return console.log(error);
    if(data.length==0){
      res.json({
        code:'1201',
        message:"注册成功"
      })
    }
  })
}