//
const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('login');
}
module.exports.userlogin=(req,res)=>{
  let params = [req.body.mobile,req.body.password];



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
        req.session.user = data[0];
=======
        req.session.user = data+[0];
>>>>>>> 86ad6fc5fd8cd7b141df3537dd74711daad2cb99

      res.json({
        code:'1102',
        message:"登录成功"
      })
    }
  })
}
