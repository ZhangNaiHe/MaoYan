//引入express 框架
const express = require('express');
// 使用 express 的router 方法
const router = express.Router();
// 引入控制器
const loginCtrl = require('../controller/loginCtrl');
//顯示頁面
// router.post('/login',loginCtrl.show);
// 暴露路由
module.exports=router;