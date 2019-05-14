// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const aromatherapyCtrl = require('../controller/AromatherapyCter');
router.get('/aromatherapy',aromatherapyCtrl.aromatherapy);

// 暴露路由
module.exports = router;