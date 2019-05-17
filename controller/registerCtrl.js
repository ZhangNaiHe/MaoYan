const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('register')
}

module.exports.userregister=(req,res)=>{
  let param = [req.body.mobile,req.body.repassword];
  // console.log(req.body);
  conn.query("insert into users(nickname,password) values(?,?)",param,(error,data)=>{
    if(error) return console.log(error);

      res.json({
        code:'1201',
        message:"注册成功"
      })
    
  })
}