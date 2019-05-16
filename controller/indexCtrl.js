const conn = require('../data/film');
module.exports.show=(req,res)=>{
  res.render('index');
}

module.exports.room=(req,res)=>{
  conn.query('select movieRanking_name, movieRanking_wantAll , movieRanking_id from movieranking limit 1' ,(error,data)=>{
    if(error)return console.log(error);
    res.json(data);
  })
}


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