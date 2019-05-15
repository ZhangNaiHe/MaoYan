const connection = require('../data/film.js');

//#region 显示榜单页面
module.exports.crunchies = (req, res) => {
    res.render('crunchies');
}
// #endregion

// #region  热映口碑榜数据
module.exports.crunchiesData1 = (req, res) => {
    let sql = 'select * from movieranking  where movieranking_category = "reyin" order by movieranking_grade2 desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 最受期待榜
module.exports.crunchiesData2 = (req, res) => {
    let sql = 'select * from movieranking  where movieranking_category = "qidai" order by movieranking_want desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 国内票房榜
module.exports.crunchiesData3 = (req, res) => {
    let sql = 'select * from movieranking where movieranking_category = "guonei" order by movieranking_ticket desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region 北美票房榜
module.exports.crunchiesData4 = (req, res) => {
    let sql = 'select * from movieranking where movieranking_category = "beimei" order by movieranking_ticket desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion

// #region TOP100榜
module.exports.crunchiesData5 = (req, res) => {
    let sql = 'select * from movieranking  where movieranking_category = "TOP100" order by movieranking_grade2 desc limit 0,10';
    connection.query(sql, (error, results) => {
        if (error) return console.log(error);
        // console.log(results);
        res.json(results);
    })
}
// #endregion





























