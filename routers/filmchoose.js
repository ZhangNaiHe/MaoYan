// 引入express
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const filmchooseCtrl = require('../controller/filmchooseCtrl');

// 显示页面
router.get('/filmchoose',filmchooseCtrl.show);
router.get('/filmChooseShow',filmchooseCtrl.filmChooseShow);
router.get('/filmChooseMsg',filmchooseCtrl.filmChooseMsg);
router.get('/filmChooseSele',filmchooseCtrl.filmChooseSele);
router.get('/filmChooseTimes',filmchooseCtrl.filmChooseTimes);
// router.get('/filmChooseDate',filmchooseCtrl.filmChooseDate);
module.exports = router;