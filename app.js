const express = require('express');
const app = express();

// 配置body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 配置express-session
// const session = require('express-session');
// app.use(session({
//   secret: 'itcast',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 60000
//   }
// }));

// 设置静态资源目录
app.use(express.static('public'));
// 配置模板(ejs)
//  引入 ejs包
const ejs = require('ejs');
// 设置模板引擎的后缀 ejs
app.set('view engine', 'ejs');
// 设置模板引擎所使用的模板的路径是 ./views
app.set('views', './views');


// 1.1 引入首页路由
const indexRoute = require('./routers/indexRoute');
// 1.2 挂载页面路由
app.use(indexRoute);

// 2.1 引入登录页路由
const loginRoute = require('./routers/loginRoute');
// 2.2 挂载登录页路由
app.use(loginRoute);

// 3.1 引入注册页路由
const registerRoute = require('./routers/registerRoute');
app.use(registerRoute);


// 4.1 引入商城页路由
const shoppingRoute = require('./routers/ShoppingRoute');
// 4.2 挂载商城页路由
app.use(shoppingRoute);

// 5.1 引入详情实验路由
const commodityRoute = require('./routers/CommodityRoute');
// 5.2 引入详情实验路由
app.use(commodityRoute);

// 商城结束

// 6.1 引入电影页面--正在上映页路由
const filmRouter = require('./routers/filmRouter');
// 6.2 挂载电影页面--正在上映页路由
app.use(filmRouter);

// 7.1 引入电影页面--即将上映页路由
const filmAboutRouter = require('./routers/film-aboutRouter');
// 7.2 挂载电影页面--即将上映页路由
app.use(filmAboutRouter);

// 8.1 引入电影页面
const filmClassicsRouter = require('./routers/film-classicsRoutet');
// 8.2 挂载电影页面
app.use(filmClassicsRouter);

// 9.1 引入影院页面路由
const filmroomRouter = require('./routers/filmroomRoute');
// 9.2 挂载影院页面路由
app.use(filmroomRouter);

// 10.1 引入榜单页面路由
const crunchiesRoute = require('./routers/crunchiesRoute');
// 10.2 挂载榜单页面路由
app.use(crunchiesRoute);

// 11.1 引入基本信息页面路由
const personalRouter = require('./routers/personalRouter');
// 11.2 挂载基本信息页面路由
app.use(personalRouter);

<<<<<<< HEAD
const filmchooseRouter = require('./routers/filmchoose');
app.use(filmchooseRouter);

=======
// 选座页面
const ticket = require('./routers/ticketRoute')
app.use(ticket);
>>>>>>> 4c4e2332a060060922fd03f9876f7cad84b3c591


// 14分钟内付款路由
const filmPayRoute = require('./routers/filmPayRoute');
app.use(filmPayRoute);


// 指定端口，启动服务
app.listen(3009, () => {
  console.log("http://127.0.0.1:3009");
})