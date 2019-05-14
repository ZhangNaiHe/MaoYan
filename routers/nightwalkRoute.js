// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const nightwalkCtrl = require('../controller/nightwalkCter');
router.get('/nightwalk',nightwalkCtrl.nightwalk);

// 暴露路由
module.exports = router;