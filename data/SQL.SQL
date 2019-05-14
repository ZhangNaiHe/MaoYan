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
