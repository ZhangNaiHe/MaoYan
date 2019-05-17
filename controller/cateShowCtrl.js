const connection = require('../data');

module.exports.hostpot = (req,res) => {
    res.render('hotspot-zj');
}
module.exports.news = (req,res) => {
    res.render('news-ZJ');
}
module.exports.picbox = (req,res) => {
    res.render('picbox-ZJ');
}
module.exports.mocietrailer = (req,res) => {
    res.render('mocietrailer-ZJ');
}

