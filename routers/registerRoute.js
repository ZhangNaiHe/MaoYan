const express = require('express');
const router = express.Router();
const registerCtrl = require('../controller/registerCtrl')
router.get('/register',registerCtrl.show)
router.post('/register',registerCtrl.userregister);
module.exports=router;