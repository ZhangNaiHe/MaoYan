const express = require('express');
const router =express.Router();

const indexCtrl = require('../controller/indexCtrl');

router.get('/',indexCtrl.show);
router.get('/index',indexCtrl.room);
router.get('/indexroom',indexCtrl.roomtwo);
router.get('/indexroom2',indexCtrl.room_left);
router.get('/indexroom3',indexCtrl.room_left_two);

module.exports=router;