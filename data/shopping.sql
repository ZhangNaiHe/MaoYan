create database movie;
use movie;


-- 创建表格
create table shopping (
  shopping_id int primary key auto_increment comment '用户ID',
  shopping_link varchar(255) comment '商品路径',
  shopping_pic varchar(255) not null comment '图片路径',
  shopping_title varchar(255) not null  comment '图片内容',
  shoping_namep varchar(255) not null comment '商品名字',
  shopping_jg varchar(255) not null comment '商品价格',
  shopping_yj varchar(255) not null  comment '商品原价'

);
-- 插入信息
insert into shopping values
(null, '/avengers', '/images/shopping-mall/fclmsb.jpg', '复仇者联盟 7寸底座钢铁侠手办','复仇者联盟 7寸底座钢铁侠手办','108','108'),
(null, '/gin', '/images/shopping-mall/yh.jpg', '银魂系列B0石英表','银魂系列B0石英表','169','376');

