const express = require('express');

const router = express.Router();

const ticketsCtrl = require('../controller/ticketsCtrl');
// 第一页
router.get('/ticketselection-ZJ', ticketsCtrl.ticketShow);

router.get('/ticketmovie',ticketsCtrl.ticketmovie);


// router.get('/sqldata',ticketsCtrl.sqldata);

router.get('/tickets', ticketsCtrl.tickets);
module.exports = router;