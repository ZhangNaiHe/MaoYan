const connection = require('../data/film.js');

//#region 显示榜单页面
module.exports.crunchies = (req, res) => {
    res.render('crunchies');
}
// #endregion

// #region  热映口碑榜数据
module.exports.crunchiesData1 = (req, res) => {
    let sql = 'select * from movieranking order by movieranking_grade2 desc limit 10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 最受期待榜
module.exports.crunchiesData2 = (req, res) => {
    let sql = 'select * from movieranking  order by movieranking_want desc limit 10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 国内票房榜
module.exports.crunchiesData3 = (req, res) => {
    let sql = 'select * from movieranking where movieranking_category = "mainland" order by movieranking_ticket desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 北美票房榜
module.exports.crunchiesData4 = (req, res) => {
    let sql = 'select * from movieranking where movieranking_category = "fremdness" order by movieranking_ticket desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region TOP100榜
module.exports.crunchiesData5 = (req, res) => {
    let sql = 'select * from movieranking  where movieranking_category = "fremdness" order by movieranking_grade2 desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region  波西米亚页面
module.exports.Bohemian_Rhapsody = (req, res) => {
    res.render('Bohemian_Rhapsody');
}
// #endregion

// #region  波希米亚--短评
module.exports.BRcomment = (req, res) => {
    connection.query('select * from comment order by comment_praise desc', (error, results) => {
        if (error) return console.log(error);
        res.json(results);
    })
}
// #endregion

// #region 波西米亚--想看
module.exports.BRwantSee = (req, res) => {
    if (!req.session.isLogin) {
        res.redirect('/login');
        return false;
    }
    if (results.affectedRows) {
        res.json(results);
    }
}
// #endregion


module.exports.succeed=(req,res)=>{
    res.render('succeed');
}

























