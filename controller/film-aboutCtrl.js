const conn = require('../data/film');
module.exports.filmAbout = (req, res) => {
  res.render('film-about');
}

module.exports.filmFild = (req, res) => {
  conn.query('select * from showing', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
    // console.log(result);
  })
}

module.exports.filmAboutType = (req, res) => {
  conn.query('select * from type', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
    // console.log(result);
  })
}

module.exports.filmAboutAq = (req,res) => {
  console.log(req.query);
  conn.query('select * from showing s where t_id=?',req.query.id,(error,result) => {
    if (error) return console.log(error);
    // console.log(result);
    if(result == ''){
      res.json({
        code:'1001',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);

    }
  })
}

module.exports.filmAboutArea = (req,res) => {
  conn.query('select * from area', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmAboutQy = (req,res) => {
  console.log(req.query.id);
  conn.query('select * from showing s where a_id=?',req.query.id,(error,result) => {
    if (error) return console.log(error);
    console.log(result);
    if(result == ''){
      res.json({
        code:'1002',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);
    }
  })
}