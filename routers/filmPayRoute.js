// 引入express框架
const express = require('express');
// 使用express的Router创建路由
const router = express.Router();
// 引入控制器
const filmPayCtrl = require('../controller/filmPayCtrl');

// 显示榜单页面
router.get('/payment',filmPayCtrl.payment);



// 暴露路由
module.exports = router;