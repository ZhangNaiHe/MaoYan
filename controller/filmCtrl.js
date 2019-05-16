// 导入连接数据库的包
const conn = require('../data/film');
// #region 显示首页
module.exports.show = (req, res) => {
  res.render('film');
}

module.exports.filmShow = (req, res) => {
  conn.query('select * from showing', (error, result) => {
    if (error) return console.log(error);
    if (result == '') {
      res.json({
        code: '1000',
        msg: "抱歉，没有找到相关结果，请尝试用其他条件筛选。"
      })
    } else {
      res.json(result);
    }
  })
}
// #endregion


// 渲染类型
module.exports.filmAboutType = (req, res) => {
  conn.query('select * from type', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 搜索对应的内容
module.exports.filmAboutAq = (req, res) => {
  let aq = [req.query.id, 'coming'];
  // console.log(aq);
  conn.query('select * from showing s where t_id=? and show_state=?  order by show_look desc', aq, (error, result) => {
    if (error) return console.log(error);
    if (result == '') {
      res.json({
        code: '1001',
        msg: '抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    } else if (result) {
      res.json(result);
      // console.log(result);
    }
  })
}

module.exports.filmAboutArea = (req, res) => {
  conn.query('select * from area', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 查到区域对应的内容
module.exports.filmAboutQy = (req, res) => {
  let aq = [req.query.id, 'coming'];
  conn.query('select * from showing s where a_id=?and show_state=?  order by show_look desc', aq, (error, result) => {
    if (error) return console.log(error);
    if (result == '') {
      res.json({
        code: '1002',
        msg: '抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    } else if (result) {
      res.json(result);
    }
  })
}


module.exports.filmAboutYear = (req, res) => {
  conn.query('select *  from year', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 点击选择
module.exports.filmAboutNd = (req, res) => {
  let aq = [req.query.id, 'coming'];
  conn.query('select * from showing s where y_id=?and show_state=?  order by show_look desc', aq, (error, result) => {
    if (error) return console.log(error);
    if (result == '') {
      res.json({
        code: '1003',
        msg: '抱歉，没有找到相关结果，请尝试用其他条件筛选。'
      })
    } else if (result) {
      res.json(result);
      // console.log(result);
    }
  })
}


module.exports.filmAboutRm = (req, res) => {
  let aq = 'coming';
  conn.query('select * from showing where show_state=? order by show_look desc', aq, (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmAboutSj = (req, res) => {
  let aq = 'coming';
  conn.query('select * from showing where show_state=? order by show_year asc', aq, (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}