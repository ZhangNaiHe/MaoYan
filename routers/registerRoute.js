const express = require('express');
const router = express.Router();
const registeCtrl = require('../controller/registeCtrl')
router.get('/register',registeCtrl.show)

module.exports=router;