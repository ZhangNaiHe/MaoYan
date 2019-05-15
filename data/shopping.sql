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

insert into shopping values
(null, '/nightwalk', '/images/shopping-mall/Avengers/byx.jpg', '白夜行 东野圭吾(2017版)','白夜行 东野圭吾(2017版)','47.5','59.6'),
(null, '/Unicorn', '/images/shopping-mall/Avengers/djs.jpg', '独角兽迷你移动电源','独角兽迷你移动电源','169','169'),
(null, '/aromatherapy', '/images/shopping-mall/Avengers/xxj.jpg', '8thdays 便携式香薰机','8thdays 便携式香薰机','89','89');



commodity_details
-- 商品详情
-- 创建表格
--  shopping_pic   shoping_namep  shopping_jg     shopping_yj                  shopping_number    shopping_brand   shopping_address
--        商品图             产品名        商品价格        商品原价      (图表)         商品数量       商品品牌           商品产地      (图表)  
create table commodity (
    shopping_id int primary key auto_increment comment '用户ID',
      shoping_namep varchar(255) not null comment '商品名字',
      shopping_pic varchar(255) not null comment '图片路径',
  shopping_jg varchar(255) not null comment '商品价格',
  shopping_yj varchar(255) not null  comment '商品原价',
   shopping_number varchar(255) not null comment '数量',
   shopping_brand varchar(255) not null comment '品牌',
   shopping_address varchar(255) not null comment '产地'
);
insert into commodity values
(null, '/images/shopping-mall/fclmsb.jpg', '复仇者联盟 7寸底座钢铁侠手办','108','108','1','中动玩具','中国大陆');
-- (null,  '/images/shopping-mall/yh.jpg', '银魂系列B0石英表','169','376','1','幸运石','广东汕头'),
-- (null, '/images/shopping-mall/Avengers/byx.jpg', '白夜行 东野圭吾(2017版)','47.5','59.6','1','中信书店','北京'),
-- (null,  '/images/shopping-mall/Avengers/djs.jpg', '独角兽迷你移动电源','169','169','1','tokidoki','深圳'),
-- (null,  '/images/shopping-mall/Avengers/xxj.jpg', '8thdays 便携式香薰机','89','89','1','8thdays','深圳');
-- 图片表
create table pic1 (
    shopping_id int comment '用户ID',
      shopping_pic varchar(255) not null comment '图片路径'
);
insert into pic1 values
(1, '/images/shopping-mall/Avengers/1-d.jpg'),
(1, '/images/shopping-mall/Avengers/2-d.jpg'),
(1, '/images/shopping-mall/Avengers/3-d.jpg'),
(1, '/images/shopping-mall/Avengers/4-d.jpg');



-- 图片表
create table pic2 (
    shopping_id int comment '用户ID',
      shopping_pic varchar(255) not null comment '图片路径'
);


insert into pic2 values
(1, '/images/shopping-mall/Avengers/nr-1.jpg'),
(1, '/images/shopping-mall/Avengers/nr-2.jpg'),
(1, '/images/shopping-mall/Avengers/nr-16.jpg'),
(1, '/images/shopping-mall/Avengers/nr-3.jpg'),
(1, '/images/shopping-mall/Avengers/nr-4.jpg'),
(1, '/images/shopping-mall/Avengers/nr-5.jpg'),
(1, '/images/shopping-mall/Avengers/nr-6.jpg'),
(1, '/images/shopping-mall/Avengers/nr-7.jpg'),
(1, '/images/shopping-mall/Avengers/nr-8.jpg'),
(1, '/images/shopping-mall/Avengers/nr-9.jpg'),
(1, '/images/shopping-mall/Avengers/nr-10.jpg'),
(1, '/images/shopping-mall/Avengers/nr-11.jpg'),
(1, '/images/shopping-mall/Avengers/nr-12.jpg'),
(1, '/images/shopping-mall/Avengers/nr-13.jpg'),
(1, '/images/shopping-mall/Avengers/nr-14.jpg'),
(1, '/images/shopping-mall/Avengers/nr-15.jpg');