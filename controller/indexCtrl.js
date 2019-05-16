const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('index');
}
// 右边
module.exports.room=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_ticket desc limit 1'  ,(error,data)=>{
    if(error)return console.log(error);
    res.json(data);
  })
}


module.exports.roomtwo=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_ticket desc limit 1,10' ,(error,data)=>{
    if(error)return console.log(error);
    res.json(data);
  })
}












// 左边
module.exports.room_left=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_grade2 desc limit 8' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}


module.exports.room_left_two=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_wantALL desc limit 8' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}