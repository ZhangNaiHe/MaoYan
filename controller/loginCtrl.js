//
const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('login');
}
module.exports.userlogin=(req,res)=>{
  let params = [req.body.mobile,req.body.password];


console.log(params)
  conn.query('select * from users where nickname =? and password = ?',params,(error,data)=>{
    if(error) return console.log(error);
    console.log(data)
    if(data.length==0){
      res.json({
        code:'1101',
        message:"您的手机号或密码错误"
      })
    }else{
        req.session.isLogin = true;

        req.session.user = data[0];

      res.json({
        code:'1102',
        message:"登录成功"
      })
    }
  })
}
