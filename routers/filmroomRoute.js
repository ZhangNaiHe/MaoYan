// 引入express框架
const express = require('express');
// 使用express的router方法
const router= express.Router();
// 引入控制器
const filmroomCtrl = require('../controller/filmroomCtrl');
// 显示页面
router.get('/filmroom',filmroomCtrl.show);
router.get('/filmRoomShow',filmroomCtrl.filmRoomShow);
router.get('/filmRoomBrand',filmroomCtrl.filmRoomBrand);
router.get('/filmRoomPP',filmroomCtrl.filmRoomPP);
router.get('/filmRoomDistrict',filmroomCtrl.filmRoomDistrict);
router.get('/filmRoomXZQ',filmroomCtrl.filmRoomXZQ);
router.get('/filmRoomSpecial',filmroomCtrl.filmRoomSpecial);
router.get('/filmRoomTST',filmroomCtrl.filmRoomTST);

// router.get('/filmroomShow',filmroomCtrl.filmroomFild);
// router.get('/filmroom')
// 暴露
module.exports = router;