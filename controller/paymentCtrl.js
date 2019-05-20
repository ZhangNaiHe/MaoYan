const connection = require('../data/film.js');
module.exports.pay = (req, res) => {
    res.render('payment');
}

// #region 电影信息
// module.exports.payment = (req, res) => {
//     let sql = 'select * from ticket where ticket_id = (select max(ticket_id) from ticket)';
//     console.log(1)
//     connection.query(sql, (error, results) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log(results);
//         res.json(results);
//     })
// }
// #endregion

module.exports.prl = (req, res) => {
    let sql = 'select * from ticket where ticket_id = (select max(ticket_id) from ticket)';
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        }
        // console.log(results);
        res.json(results);
    })
}