// 导入数据库包
const mysql = require('mysql');
// 配置数据库
const conn = mysql.createConnection({
  // 网址
  host:'192.168.26.123',
  // 端口
  port:3306,
  // 账号
  user:'root',
  // 密码
  password:'123456',
  // 数据库名
  database:'movie'
})
// 暴露
module.exports = conn;