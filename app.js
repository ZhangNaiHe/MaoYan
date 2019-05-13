const express = require('express');
const app = express();

// 设置静态目录
app.use(express.static('./public'));
// 设置渲染环境
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', './views');

const filmRouter = require('./routers/filmRouter');
app.use(filmRouter);
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000")
})