const connection = require('../data/film.js');

// #region 显示14分钟内付款页面
module.exports.payment = (req,res)=>{
    
    res.render('payment');
}
// #endregion