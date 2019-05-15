const express = require('express');
const router =express.Router();

const indexCtrl = require('../controller/indexCtrl');

router.get('/',indexCtrl.show)

module.exports=router;