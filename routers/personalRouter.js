const express = require('express');
const multer = require('multer');
const upload = multer({});
const router = express.Router();
const personalCtrl = require('../controller/personalCtrl');
router.get('/personal',personalCtrl.personal);
router.get('/personalSele',personalCtrl.personalSele)
router.post('/personalUpload',upload.single('avatar'),personalCtrl.personalUpload);
router.post('/personalUpdate',personalCtrl.personalUpdate);
module.exports = router;