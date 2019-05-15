// 引入连接数据库文件夹
const conn = require('../data/film');

// 显示页面
module.exports.filmAbout = (req, res) => {
  res.render('film-about');
}

// 渲染模板
module.exports.filmFild = (req, res) => {
  conn.query('select * from showing', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 渲染类型
module.exports.filmAboutType = (req, res) => {
  conn.query('select * from type', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 搜索对应的内容
module.exports.filmAboutAq = (req,res) => {
  conn.query('select * from showing s where t_id=?  order by show_look desc',req.query.id,(error,result) => {
    if (error) return console.log(error);
    if(result == ''){
      res.json({
        code:'1001',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);
      console.log(result);
    }
  })
}

// 渲染区域
module.exports.filmAboutArea = (req,res) => {
  conn.query('select * from area', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 查到区域对应的内容
module.exports.filmAboutQy = (req,res) => {
  conn.query('select * from showing s where a_id=? order by show_look desc',req.query.id,(error,result) => {
    if (error) return console.log(error);
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


// 渲染年代模板
module.exports.filmAboutYear = (req,res) => {
  conn.query('select *  from year',(error,result) => {
    if(error) return console.log(error);
    res.json(result);
  })
} 

// 点击选择
module.exports.filmAboutNd = (req,res) => {
  conn.query('select * from showing s where y_id=?',req.query.id,(error,result) => {
    if (error) return console.log(error);
    if(result == ''){
      res.json({
        code:'1003',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);
      console.log(result);
    }
  })
}

// 
module.exports.filmAboutSelect = (req,res) => {
  conn.query('select * from showing',(error,result) => {
    if(error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmAboutRm = (req,res) => {
  conn.query('select * from showing order by show_look desc',(error,result) => {
    if(error) return console.log(error);
    res.json(result);
  })
}