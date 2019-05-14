// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const shoppingCtrl = require('../controller/ShoppingCter');
router.get('/shopping',shoppingCtrl.shopping);

// 暴露路由
module.exports = router;