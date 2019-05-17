// 引入连接数据库文件夹
const conn = require('../data/film');

// 显示页面
module.exports.filmAbout = (req, res) => {
  res.render('film-about');
}

// 渲染模板
module.exports.filmFild = (req, res) => {
  let s = 'coming';
  console.log(req.query);
  let pageNum = req.query.pageNum;
  // 一页显示多少条数据
  let pageSize = req.query.pageSize;

  conn.query(`SELECT COUNT(*) pageTotal FROM showing;`, (error, results) => {
    // console.log(results);
    if (error) {
      return console.log(error);
    }
    conn.query('select * from showing where show_state=? order by show_year desc limit '+(pageNum - 1) * pageSize+','+pageSize+'',s,(error,result)=>{
      if (error) {
        return console.log(error);
      }
      res.json({
        code: '1601',
        message: '数据查询成功',
        pageNum: pageNum,
        pageSize: pageSize,
        pageTotal: results[0].pageTotal,
        data: result
      })
      // console.log(result);
    })
  
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
  let aq = [req.query.id,'coming'];
  // console.log(aq);
  conn.query('select * from showing s where t_id=? and show_state=?  order by show_look desc',aq,(error,result) => {
    if (error) return console.log(error);
    if(result == ''){
      res.json({
        code:'1001',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);
      // console.log(result);
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
  let aq = [req.query.id,'coming'];
  conn.query('select * from showing s where a_id=?and show_state=?  order by show_look desc',aq,(error,result) => {
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
  let aq = [req.query.id,'coming'];
  conn.query('select * from showing s where y_id=?and show_state=?  order by show_look desc',aq,(error,result) => {
    if (error) return console.log(error);
    if(result == ''){
      res.json({
        code:'1003',
        msg:'抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    }else if(result){
      res.json(result);
      // console.log(result);
    }
  })
}

// 
// module.exports.filmAboutSelect = (req,res) => {
//   conn.query('select * from showing',(error,result) => {
//     if(error) return console.log(error);
//     res.json(result);
//   })
// }

module.exports.filmAboutRm = (req,res) => {
  let aq = 'coming';
  conn.query('select * from showing where show_state=? order by show_look desc',aq,(error,result) => {
    if(error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmAboutSj = (req,res) => {
  let aq = 'coming';
  conn.query('select * from showing where show_state=? order by show_year asc',aq,(error,result) => {
    if(error) return console.log(error);
    res.json(result);
  })
}