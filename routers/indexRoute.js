const express = require('express');
const router =express.Router();

const indexCtrl = require('../controller/indexCtrl');

router.get('/',indexCtrl.show);
router.get('/index',indexCtrl.room);
router.get('/indexroom',indexCtrl.roomtwo);
router.get('/indexroom4',indexCtrl.roomthree);
router.get('/indexroom5',indexCtrl.roomfour);
router.get('/indexroom6',indexCtrl.roomfive);
router.get('/indexroom7',indexCtrl.roomsix);
router.get('/indexroom8',indexCtrl.roomseven);

router.get('/indexroom2',indexCtrl.room_left);
router.get('/indexroom3',indexCtrl.room_left_two);
router.get('/indexroom9',indexCtrl.room_left_three);
router.get('/indexroom10',indexCtrl.room_left_three2);

module.exports=router;