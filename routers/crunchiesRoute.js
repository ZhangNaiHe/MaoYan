// 引入express框架
const express = require('express');
// 使用express的Router创建路由
const router = express.Router();
// 引入控制器
const crunchiesCtrl = require('../controller/crunchiesCtrl');





// 暴露路由
module.exports = router;