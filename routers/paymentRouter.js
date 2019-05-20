// 引入express框架
const express = require('express');
// 使用express的Router创建路由
const router = express.Router();
// 引入控制器
const paymentCtrl = require('../controller/paymentCtrl');
// 电影信息
router.get('/pay',paymentCtrl.pay);
// router.get('/payment',paymentCtrl.payment);
router.get('/prl',paymentCtrl.prl);


module.exports = router;