// 导入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 导入控制器的文件夹
const filmClassicsCtrl = require('../controller/film-classicsCtrl');
router.get('/filmClassics',filmClassicsCtrl.filmClassics);
router.get('/filmClassicsFild',filmClassicsCtrl.filmClassicsFild);
router.get('/filmClassicsType',filmClassicsCtrl.filmClassicsType);
router.get('/filmClassicsAq',filmClassicsCtrl.filmClassicsAq);
router.get('/filmClassicsArea',filmClassicsCtrl.filmClassicsArea);
router.get('/filmClassicsQy',filmClassicsCtrl.filmClassicsQy);
router.get('/filmClassicsYear',filmClassicsCtrl.filmClassicsYear);
router.get('/filmClassicsNd',filmClassicsCtrl.filmClassicsNd);
router.get('/filmClassicsRm',filmClassicsCtrl.filmClassicsRm);
router.get('/filmClassicsSj',filmClassicsCtrl.filmClassicsSj);
// 暴露
module.exports = router;