const conn = require('../data/film');

// 显示首页
module.exports.show = (req, res) => {
    res.render('filmchoose');
}

// module.exports.filmChooseShow = (req, res) => {
//     conn.query('select * from yingpian',(error,result) => {
//         if (error) return console.log(error);
//         console.log(result);
//         res.json(result);
//         console.log(result);
//     })
// }

module.exports.filmChooseShow = (req,res) => {
    conn.query('select *from yingpian',(error,result) => {
        if (error) return console.log(error);
        // console.log(1);
        console.log(result[0]);
        res.json(result);
    })
}



module.exports.filmChooseMsg = (req,res)=>{
    conn.query('select *from massage',(error,result) => {
        // console.log(1);
        if(error) return console.log(error);
        // console.log(result);
        res.json(result[0])
    })
}


module.exports.filmChooseSele = (req,res) => {
    // console.log(req.query.id);
    conn.query('select * from massage where movie_id=?',req.query.id,(error,result) =>{
        if(error) return console.log(error);
        // console.log(result);
        res.json(result[0]);

    }) 
}


module.exports.filmChooseTimes = (req, res) => {
    conn.query('select * from times where movie_id = 1',(error,result) => {
        if (error) return console.log(error);
        res.json(result);
    })
}


// module.exports.filmChooseDate = (req, ress) => {
//     conn.query('select * from times where movie_id=?',req.query.id,(error,result) => {
//         if (error) return console.log(error);
//         res.json(result);
//     })
// }