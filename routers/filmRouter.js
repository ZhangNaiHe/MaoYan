// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const filmCtrl = require('../controller/filmCtrl');
// 显示页面
router.get('/film',filmCtrl.show);
router.get('/filmsShow',filmCtrl.filmsShow);
router.get('/filmAq',filmCtrl.filmAq);
router.get('/filmType',filmCtrl.filmType);
router.get('/filmArea',filmCtrl.filmArea);
router.get('/filmQy',filmCtrl.filmQy);
router.get('/filmYear',filmCtrl.filmYear);
router.get('/filmNd',filmCtrl.filmNd);
router.get('/filmRm',filmCtrl.filmRm);
router.get('/filmSj',filmCtrl.filmSj);
// 暴露路由
module.exports = router;