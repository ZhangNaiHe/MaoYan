const express = require('express');

const router = express.Router();

const cateCtrl = require('../controllers/cateShowCtrl');

router.get('/hostpot-ZJ', cateCtrl.hostpot);
router.get('/news-ZJ', cateCtrl.news);
router.get('/picbox-ZJ', cateCtrl.picbox);
router.get('/mocietrailer-ZJ', cateCtrl.mocietrailer);

module.exports = router;