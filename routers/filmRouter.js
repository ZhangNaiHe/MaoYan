// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const filmCtrl = require('../controller/filmCtrl');
// 显示页面
router.get('/film',filmCtrl.show);
router.get('/filmShow',filmCtrl.filmShow);
router.get('/filmAboutAq',filmCtrl.filmAboutAq);
router.get('/filmAboutType',filmCtrl.filmAboutType);
router.get('/filmAboutArea',filmCtrl.filmAboutArea);
router.get('/filmAboutQy',filmCtrl.filmAboutQy);
router.get('/filmAboutYear',filmCtrl.filmAboutYear);
router.get('/filmAboutNd',filmCtrl.filmAboutNd);
router.get('/filmAboutRm',filmCtrl.filmAboutRm);
router.get('/filmAboutSj',filmCtrl.filmAboutSj);
// 暴露路由
module.exports = router;