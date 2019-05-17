// 连接数据库
const conn = require('../data/film');

// 显示页面
module.exports.filmClassics = (req, res) => {
  res.render('film-classics');
}

module.exports.filmClassicsFild = (req, res) => {
  console.log(req.query);
  let pageNum = req.query.pageNum;
  // 一页显示多少条数据
  let pageSize = req.query.pageSize;

  conn.query(`SELECT COUNT(*) pageTotal FROM showing;`, (error, results) => {
    let s = 'classics';

    // console.log(results);
    if (error) {
      return console.log(error);
    }
    conn.query('select * from showing where show_state=? order by show_year desc limit ' + (pageNum - 1) * pageSize + ',' + pageSize + '', s, (error, result) => {
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

module.exports.filmClassicsType = (req, res) => {
  conn.query('select * from type', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmClassicsAq = (req, res) => {
  let aq = [req.query.id, 'classics'];
  console.log(aq);
  conn.query('select * from showing s where t_id=? and show_state=?', aq, (error, result) => {
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


module.exports.filmClassicsArea = (req, res) => {
  conn.query('select * from area', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 查到区域对应的内容
module.exports.filmClassicsQy = (req, res) => {
  let aq = [req.query.id, 'classics'];
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



module.exports.filmClassicsYear = (req, res) => {
  conn.query('select *  from year', (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

// 点击选择
module.exports.filmClassicsNd = (req, res) => {
  let aq = [req.query.id, 'classics'];
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

module.exports.filmClassicsRm = (req, res) => {
  let aq = 'classics';
  conn.query('select * from showing where show_state=? order by show_look desc', aq, (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}

module.exports.filmClassicsSj = (req, res) => {
  let aq = 'classics';
  conn.query('select * from showing where show_state=? order by show_year asc', aq, (error, result) => {
    if (error) return console.log(error);
    res.json(result);
  })
}