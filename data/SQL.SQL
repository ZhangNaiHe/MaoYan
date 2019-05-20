CREATE TABLE showing(
  show_id int PRIMARY KEY auto_increment comment '电影id',
  show_name VARCHAR(30) not null comment '电影名',
  show_pic VARCHAR(255) NOT null comment '电影图片路径',
  show_type VARCHAR(20) not null comment '类型',
  show_area VARCHAR(20) not null comment '区域',
  show_year VARCHAR(10) not null comment '年代',
  show_look INT comment '多少人想看',
  show_grade FLOAT(2,1) comment '评分',
  show_box INT comment '票房',
  show_state VARCHAR(10) not null default 'hot' comment '正在热映(hot)/即将上映(coming)/经典影片(classics)'
);

insert into showing values
(null,'哥拉斯2:怪兽之王','images/film/film4.jpg','科幻','美国','2019',203794,null,null,'coming'),
(null,'五月天人生无限公司','images/film/film4.jpg','纪录片','台湾','2019',38378,null,null,'coming');

insert into showing values
(null,'当我们海阔天空','images/film/film6.jpg','青春','大陆','2019',1086,null,null,'coming'),
(null,'X战警:黑凤凰','images/film/film7.jpg','科幻','美国','2019',166687,null,null,'coming'),
(null,'黑衣人:全球追击','images/film/film8.jpg','喜剧','美国','2019',694581,null,null,'coming');


insert into showing values
(null,'下一任:前任','images/film/filmm1.jpg','爱情','大陆','2019',null,4.3,1.20,'hot',1,2,3),
(null,'复仇者联盟4:终局之战','images/film/filmm2.jpg','动作','美国','2019',null,9.0,42.15,'hot',1,2,5),
(null,'大侦探皮卡丘','images/film/filmm3.jpg','冒险','美国','2019',null,8.5,4.95,'hot',2,4,5),
(null,'何以为家','images/film/filmm4.jpg','剧情','黎巴嫩','2019',null,9.3,3.40,'hot',2,3,1),
(null,'五月天人生无限公司','images/film/filmm6.jpg','纪录片','中国台湾','2019',50234,null,9,'hot',1,1,1),
(null,'双生','images/film/filmm7.jpg','悬疑','中国大陆','2019',null,6.5,150.5,'hot',1,2,1),
(null,'反贪风暴4','images/film/filmm8.jpg','动作','中国香港','2019',null,9.1,7.93,'hot',2,3,1),
(null,'一条狗的使命2','images/film/filmm9.jpg','剧情','美国','2019',null,9.3,95.5,'hot',1,3,5),
(null,'一个母亲的复仇','images/film/filmm10.jpg','剧情','印度','2019',null,9.3,869.5,'hot',3,5,1),
(null,'哥斯拉2:怪兽之王','images/film/filmm11.jpg','科幻','美国','2019',251826,null,null,'hot',1,2,1),
(null,'进京城','images/film/filmm12.jpg','剧情','中国大陆','2019',null,9.0,64.5,'hot',1,2,1),
(null,'罗马','images/film/filmm13.jpg','剧情','墨西哥','2019',null,8.5,44.4,'hot',2,2,1);
