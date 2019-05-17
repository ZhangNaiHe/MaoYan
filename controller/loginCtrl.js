//
const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('login');
}
module.exports.userlogin=(req,res)=>{
  let params = [req.body.email,req.body.password];
  conn.query('select * from users where nickname =? and password = ?',params ,(error,data)=>{
    if(error) return console.log(error);
    if(data.length==0){
      res.json({
        code:'1101',
        message:"您的手机号或密码错误"
      })
    }else{
        req.session.isLogin = true;
<<<<<<< HEAD
        req.session.user = data+[0];
=======
        req.session.user = data[0];
        console.log( req.session.user = data[0]);
>>>>>>> 81b96839c02244e2cc671acfef9ac1730bbf6fa4
      res.json({
        code:'1102',
        message:"登录成功"
      })
    }
  })
}
