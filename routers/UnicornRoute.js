// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const UnicornCtrl = require('../controller/UnicornCter');
router.get('/Unicorn',UnicornCtrl.Unicorn);

// 暴露路由
module.exports = router;