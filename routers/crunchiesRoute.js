// 引入express框架
const express = require('express');
// 使用express的Router创建路由
const router = express.Router();
// 引入控制器
const crunchiesCtrl = require('../controller/crunchiesCtrl');

// 显示榜单页面
router.get('/crunchies',crunchiesCtrl.crunchies);
// 热映口碑榜数据
router.get('/board/1',crunchiesCtrl.crunchiesData1);
// 最受期待榜
router.get('/board/2',crunchiesCtrl.crunchiesData2);
// 国内票房榜
router.get('/board/3',crunchiesCtrl.crunchiesData3);
// 北美票房榜
router.get('/board/4',crunchiesCtrl.crunchiesData4);
// TOP100
router.get('/board/5',crunchiesCtrl.crunchiesData5);


// 显示波西米亚狂想曲页面
router.get('/Bohemian_Rhapsody',crunchiesCtrl.Bohemian_Rhapsody);
// 波希米亚--短评
router.get('/BRcomment',crunchiesCtrl.BRcomment);
// 波西米亚--想看
router.get('/BRwantSee',crunchiesCtrl.BRwantSee);

router.get('/succeed',crunchiesCtrl.succeed);



// 暴露路由
module.exports = router;