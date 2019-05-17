const conn = require('../data/film');
const fs = require('fs');
module.exports.personal = (req, res) => {
  if (!req.session.isLogin) {
    res.redirect('/login');
    return;
  }
  conn.query('select * from users where id=?', [req.session.user.id], (error, results) => {
    if (error) return console.log(error);
    res.render('personal', results[0]);
  })
}

module.exports.personalSele = (req,res) => {
  conn.query('select * from users where id=?',[req.session.user.id],(error,result) => {
    if (error) return console.log(error);
    // res.render('personal', results[0]);
    console.log(result);
  })
}


module.exports.personalUpload = (req,res) => {
fs.writeFile('./public/upload/' +req.file.originalname, req.file.buffer,(error,results)=>{
  if(error) return console.log(error);
  res.json({
    pic:'./upload/'+req.file.originalname
  })
})
}


module.exports.personalUpdate = (req,res) => {
  let parmas = [req.body.avatar,req.body.petname, req.body.sex,req.body.year,req.body.month,req.body.day,req.body.marriage, req.body.job,req.body.signature, req.body.id];
  let sql = 'update users set avatar=?, petname=?, sex=?,year=?,month=?,day=?, marriage=?,job=?,signature=? where id  = ?';
  conn.query(sql, parmas, (error, results) => {
    if (error) return console.log(error);
   conn.query('select * from users where id = ?',[req.body.id],(error,result)=>{
     if(error) return console.log(error);
     res.json({
       code:'1401',
       massage:'保存成功',
       data:result[0],
     })
   })
    console.log(results);
   
  })
}

