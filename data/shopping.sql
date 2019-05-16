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


insert into shopping values
(null, '/aromatherapy', '/images/shopping-mall/Avengers/lc.jpg', '乐宠风扇','乐宠风扇','39','39');





/images/shopping-mall/Avengers/huihou.jpg
/images/shopping-mall/Avengers/shbl.jpg



insert into shopping values
(null, '/aromatherapy', '/images/shopping-mall/Avengers/mv.jpg', '漫威系列圆形车载固体出风口香薰','漫威系列圆形车载固体出风口香薰','39','59');

insert into shopping values
(null, '/aromatherapy', '/images/shopping-mall/Avengers/mv.jpg', '迪士尼公主万花筒','迪士尼公主万花筒','22.8','28.8');

insert into shopping values
(null, '/aromatherapy', '/images/shopping-mall/Avengers/gz.jpg', '迪士尼公仔挂件一个','迪士尼公仔挂件一个','39','39');






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
(null,  '复仇者联盟 7寸底座钢铁侠手办','/images/shopping-mall/fclmsb.jpg','108','108','1','中动玩具','中国大陆');
-- (null,  '/images/shopping-mall/yh.jpg', '银魂系列B0石英表','169','376','1','幸运石','广东汕头'),
-- (null, '/images/shopping-mall/Avengers/byx.jpg', '白夜行 东野圭吾(2017版)','47.5','59.6','1','中信书店','北京'),
-- (null,  '/images/shopping-mall/Avengers/djs.jpg', '独角兽迷你移动电源','169','169','1','tokidoki','深圳'),
-- (null,  '/images/shopping-mall/Avengers/xxj.jpg', '8thdays 便携式香薰机','89','89','1','8thdays','深圳');
insert into commodity values
(null,  '乐宠风扇','/images/shopping-mall/Avengers/lc.jpg','39','39','1','乐宠风扇','深圳');



insert into commodity values
(null,  '漫威系列圆形车载固体出风口香薰','/images/shopping-mall/Avengers/mv.jpg','39','59','1','漫威','广东深圳');

insert into commodity values
(null,  '迪士尼公主万花筒','/images/shopping-mall/Avengers/bxqy.jpg','22.8','28.8','1','迪士尼','中国');



insert into commodity values
(null,  '迪士尼公仔挂件一个','/images/shopping-mall/Avengers/gz.jpg','39','39','1','迪士尼','广东');


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
insert into pic1 values
(6, '/images/shopping-mall/Avengers/lc.jpg'),
(6, '/images/shopping-mall/Avengers/lc-2.jpg'),
(6, '/images/shopping-mall/Avengers/lc-3.jpg'),
(6, '/images/shopping-mall/Avengers/lc-4.jpg'),
(6, '/images/shopping-mall/Avengers/lc-5.jpg');


insert into pic1 values
(7, '/images/shopping-mall/Avengers/mv.jpg'),
(7, '/images/shopping-mall/Avengers/mv-2.jpg'),
(7, '/images/shopping-mall/Avengers/mv-3.jpg'),
(7, '/images/shopping-mall/Avengers/mv-4.jpg'),
(7, '/images/shopping-mall/Avengers/mv-5.jpg');



insert into pic1 values
(8, '/images/shopping-mall/Avengers/bxqy.jpg'),
(8, '/images/shopping-mall/Avengers/wht-1.jpg'),
(8, '/images/shopping-mall/Avengers/wht-2.jpg');


insert into pic1 values
(9, '/images/shopping-mall/Avengers/gz.jpg'),
(9, '/images/shopping-mall/Avengers/gz-2.jpg'),
(9, '/images/shopping-mall/Avengers/gz-3.jpg'),
(9, '/images/shopping-mall/Avengers/gz-4.jpg'),
(9, '/images/shopping-mall/Avengers/gz-5.jpg');
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



insert into pic2 values
(6, '/images/shopping-mall/Avengers/lc-nr-1.jpg'),
(6, '/images/shopping-mall/Avengers/lc-nr.jpg');



insert into pic2 values
(7, '/images/shopping-mall/Avengers/mv-nr1.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr2.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr3.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr4.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr5.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr6.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr7.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr8.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr9.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr10.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr11.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr12.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr13.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr14.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr15.jpg'),
(7, '/images/shopping-mall/Avengers/mv-nr16.jpg');





insert into pic2 values
(8, '/images/shopping-mall/Avengers/wht-nr1.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr2.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr3.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr4.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr5.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr6.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr7.jpg'),
(8, '/images/shopping-mall/Avengers/wht-nr8.jpg');




insert into pic2 values
(9, '/images/shopping-mall/Avengers/gz-nr1.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr2.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr3.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr4.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr5.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr6.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr7.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr8.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr9.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr10.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr11.jpg'),
(9, '/images/shopping-mall/Avengers/gz-nr12.jpg');