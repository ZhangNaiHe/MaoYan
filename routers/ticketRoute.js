const express = require('express');

const router = express.Router();

const ticketsCtrl = require('../controller/ticketsCtrl');
// 显示路由
router.get('/ticketselection-ZJ', ticketsCtrl.ticketShow);

router.get('/ticketmovie',ticketsCtrl.ticketmovie);


// router.get('/sqldata',ticketsCtrl.sqldata);
// 提交路由
router.get('/tickets', ticketsCtrl.tickets);
module.exports = router;