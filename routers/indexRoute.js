
// 引入express框架
const express = require('express');
// 调用router方法
const router =express.Router();
// 引入控制器
const indexCtrl = require('../controller/indexCtrl');
// 显示首页
router.get('/',indexCtrl.show);
// 右边模板路由
router.get('/index',indexCtrl.room);
router.get('/indexroom',indexCtrl.roomtwo);
router.get('/indexroom4',indexCtrl.roomthree);
router.get('/indexroom5',indexCtrl.roomfour);
router.get('/indexroom6',indexCtrl.roomfive);
router.get('/indexroom7',indexCtrl.roomsix);
router.get('/indexroom8',indexCtrl.roomseven);


// 左边模板路由
router.get('/indexroom2',indexCtrl.room_left);
router.get('/indexroom3',indexCtrl.room_left_two);
router.get('/indexroom9',indexCtrl.room_left_three);
router.get('/indexroom10',indexCtrl.room_left_three2);
router.get('/indexroom11',indexCtrl.room_left_three3);
// 暴露路由
module.exports=router;