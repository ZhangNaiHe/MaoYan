
// 引入数据库
const conn = require('../data/film');
// 显示首页
module.exports.show=(req,res)=>{
  res.render('index');
}


// 右边 template模块
//#region
module.exports.room=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_ticket desc limit 1'  ,(error,data)=>{
    if(error)return console.log(error);
    res.json(data);
  })
}


module.exports.roomtwo=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_ticket desc limit 1,9' ,(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}

module.exports.roomthree=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_want desc limit 1',(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}


module.exports.roomfour=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_want desc limit 1,2',(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}


module.exports.roomfive=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_want desc limit 3,7',(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}

module.exports.roomsix=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_want desc limit 1',(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}

module.exports.roomseven=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_want desc limit 2,9',(error,data)=>{
    // console.log(data);
    if(error)return console.log(error);
    res.json(data);
  })
}

//#endregion



//  #region 左边template模块  
module.exports.room_left=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_grade2 desc limit 8' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}


module.exports.room_left_two=(req,res)=>{ 
  console.log(req.query.body);
  conn.query('select * from movieranking order by movieRanking_wantALL desc limit 8' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}


module.exports.room_left_three=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_grade2 asc limit 1' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}


module.exports.room_left_three2=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_grade2 asc limit 2,2' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}

module.exports.room_left_three3=(req,res)=>{
  conn.query('select * from movieranking order by movieRanking_grade2 asc limit 4,4' ,(error,data)=>{
    if(error)return console.log(error);
    // console.log(data);
    res.json(data);
  })
}
//#endregion