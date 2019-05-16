const express = require('express');
const router = express.Router();
const personalCtrl = require('../controller/personalCtrl');
router.get('/personal',personalCtrl.personal);
module.exports = router;