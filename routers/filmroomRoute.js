// 引入express框架
const express = require('express');
// 使用express的router方法
const router= express.Router();
// 引入控制器
const filmroomCtrl = require('../controller/filmroomCtrl');
// 显示页面
// router.get('/filmroom',filmroomCtrl.show);
// router.get('/filmroomShow',filmroomCtrl.filmroomFild);
// router.get('/filmroom')
// 暴露
module.exports = router;