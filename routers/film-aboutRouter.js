const express = require('express');
const router = express.Router();
const filmAboutctrl = require('../controller/film-aboutCtrl');
<<<<<<< HEAD
router.get('/filmabout',filmAboutctrl.filmAbout);
router.get('/filmAboutShow',filmAboutctrl.filmFild);
router.get('/filmAboutAq',filmAboutctrl.filmAboutAq);
router.get('/filmAboutType',filmAboutctrl.filmAboutType);
router.get('/filmAboutArea',filmAboutctrl.filmAboutArea);
router.get('/filmAboutQy',filmAboutctrl.filmAboutQy);
router.get('/filmAboutYear',filmAboutctrl.filmAboutYear);
=======
router.get('/filmabout', filmAboutctrl.filmAbout);
router.get('/filmAboutShow', filmAboutctrl.filmFild);
router.get('/filmAboutAq', filmAboutctrl.filmAboutAq);
router.get('/filmAboutType', filmAboutctrl.filmAboutType);
router.get('/filmAboutArea', filmAboutctrl.filmAboutArea);
router.get('/filmAboutQy', filmAboutctrl.filmAboutQy);
>>>>>>> 8142f977cc177b740f1d53b12483fddccb0a8e70
module.exports = router;