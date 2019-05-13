const express = require('express');
const app = express();

// 设置静态目录
app.use(express.static('./public'));
// 设置渲染环境
app.engine('html',require(''))

app.listen(3000,()=>{
  console.log("http://127.0.0.1:3000")
})