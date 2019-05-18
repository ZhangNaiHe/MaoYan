const connection = require('../data/film');

//页面显示
module.exports.ticketShow = (req, res) => {
    res.render('ticketselection-zj');
}


// // 显示页面
module.exports.ticketmovie = (req, res) => {
    // let parmas = [req.body.show_name,req.body.price,req.body.ver,req.body.data-time,req.body.row,req.body.column]
    connection.query('select * from projection,yingpian where projection_time= "12:15" and projection.movie_id = yingpian.movie_id', (error, results) => {
        if (error) return console.log(error);
           res.json(results);
           var mid = results.movie_id;
    })
};


// module.exports.sqldata = (req, res) => {
//     connection.query('select seats from ticket where names= "SFC上影城(沭阳店)" and data_time = "2019-5-24 22:10" and show_name= "龙珠超:布罗利"', req.body, (error, results) => {
//         if (error) return console.log(error);
//         if (results.affectedRows) {
//             res.json({
//                 code: '1003',
//                 message: 'chadaole'
//             })
//         }
//     })
// }

module.exports.tickets = (req, res) => {
    console.log(req.query.id);
        connection.query('insert into ticket(seats,money) values("'+mid +'","'+  +'","'+ req.query.id +'","'+ req.query.money+'")', (error, result) => {
            if (error) return console.log(error);
            if (result.affectedRows) {
                res.json({
                    code: '1004',
                    message: '提交吧'
                })
            }
        })
}

