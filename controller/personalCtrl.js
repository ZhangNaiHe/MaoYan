const conn = require('../data/film');
module.exports.personal = (req,res) => {
  console.log(req.session.user.id);
  res.render('personal');
  // conn.query('select * from users where id')
}

