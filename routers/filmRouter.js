// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const filmCtrl = require('../controller/filmCtrl');
router.get('/film',filmCtrl.show);
// 显示页面
router.get('/filmShow',filmCtrl.filmShow);
// 暴露路由
module.exports = router;