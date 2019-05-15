// 导入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 导入控制器的文件夹
const filmClassicsCtrl = require('../controller/film-classicsCtrl');
router.get('/filmClassics',filmClassicsCtrl.filmClassics);
router.get('/filmFild',filmClassicsCtrl.filmFild);
router.get('/filmAboutType',filmClassicsCtrl.filmAboutType);
router.get('/filmAboutAq',filmClassicsCtrl.filmAboutAq);
router.get('/filmAboutArea',filmClassicsCtrl.filmAboutArea);
router.get('/filmAboutQy',filmClassicsCtrl.filmAboutQy);
router.get('/filmAboutYear',filmClassicsCtrl.filmAboutYear);
router.get('/filmAboutNd',filmClassicsCtrl.filmAboutNd);
router.get('/filmAboutRm',filmClassicsCtrl.filmAboutRm);
router.get('/filmAboutSj',filmClassicsCtrl.filmAboutSj);
// 暴露
module.exports = router;