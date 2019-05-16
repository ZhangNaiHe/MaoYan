const express = require('express');
const app = express();

// 配置body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 配置express-session
const session = require('express-session');
app.use(session({
    secret:'itcast',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60000
    }
}));



// 首页
const indexRoute =require('./routers/indexRoute')
app.use(indexRoute);


// 登录
const loginRoute = require('./routers/loginRoute')
app.use(loginRoute);

// 注册
const registerRoute = require('./routers/registerRoute')
app.use( registerRoute);


// 商城
const shoppingRoute=require('./routers/ShoppingRoute')
app.use(shoppingRoute);
// // 详情
// const avengersRoute=require('./routers/AvengersRoute')
// app.use(avengersRoute);
// // 详情
// const ginRoute=require('./routers/GinRoute')
// app.use(ginRoute);
// // 详情
// const nightwalkRoute=require('./routers/nightwalkRoute')
// app.use(nightwalkRoute);
// // 详情
// const UnicornRoute=require('./routers/UnicornRoute')
// app.use(UnicornRoute);
// // 详情
// const AromatherapyRoute=require('./routers/AromatherapyRoute')
// app.use(AromatherapyRoute);

// 详情实验
const commodityRoute=require('./routers/CommodityRoute')
app.use(commodityRoute);

// 商城结束
const filmRouter = require('./routers/filmRouter');
app.use(filmRouter);

const filmAboutRouter = require('./routers/film-aboutRouter');
app.use(filmAboutRouter);

const filmroomRouter = require('./routers/filmroomRoute');
app.use(filmroomRouter);

// 引入榜单页面路由
const crunchiesRoute = require('./routers/crunchiesRoute');
// 挂载榜单页面路由
app.use(crunchiesRoute);

const filmClassicsRouter = require('./routers/film-classicsRoutet');
app.use(filmClassicsRouter);



app.use(express.static('public'));
// 配置模板(ejs)
//  引入 ejs包
const ejs = require('ejs');
// 设置模板引擎的后缀 ejs
app.set('view engine', 'ejs');
// 设置模板引擎所使用的模板的路径是 ./views
app.set('views', './views');



app.listen(3009,()=>{
  console.log("http://127.0.0.1:3009")
})