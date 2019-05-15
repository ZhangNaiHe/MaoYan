const express = require('express');
const router =express.Router();

const indexCtrl = require('../controller/indexCtrl');

router.get('/index',indexCtrl.show)

module.exports=router;