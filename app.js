const express = require('express');
const app = express();

// 设置静态目录
app.use(express.static('./public'));
// 设置渲染环境
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', './views');

// 配置路由
const filmRouter = require('./routers/filmRouter');
// 挂载路由
app.use(filmRouter);

const filmaboutRouter = require('./routers/film-aboutRouter');
app.use(filmaboutRouter);
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000")
})