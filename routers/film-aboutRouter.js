const express = require('express');
const router = express.Router();
const filmAboutctrl = require('../controller/film-aboutCtrl');

router.get('/filmabout',filmAboutctrl.filmAbout);
router.get('/filmAboutShow',filmAboutctrl.filmFild);
router.get('/filmAboutAq',filmAboutctrl.filmAboutAq);
router.get('/filmAboutType',filmAboutctrl.filmAboutType);
router.get('/filmAboutArea',filmAboutctrl.filmAboutArea);
router.get('/filmAboutQy',filmAboutctrl.filmAboutQy);
router.get('/filmAboutYear',filmAboutctrl.filmAboutYear);
router.get('/filmAboutNd',filmAboutctrl.filmAboutNd);
// router.get('/filmAboutSelect',filmAboutctrl.filmAboutSelect);
router.get('/filmAboutRm',filmAboutctrl.filmAboutRm);
router.get('/filmAboutSj',filmAboutctrl.filmAboutSj);
module.exports = router;