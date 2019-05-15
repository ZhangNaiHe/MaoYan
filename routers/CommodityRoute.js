// 引入express框架
const express = require('express');
// 使用express的router方法
const router = express.Router();
// 引入控制器
const CommodityCtrl = require('../controller/CommodityCter');

router.get('/commodity',CommodityCtrl.commodity);

router.get('/detaily',CommodityCtrl.detaily);
router.get('/detaile',CommodityCtrl.detaile);
// 暴露路由
module.exports = router;