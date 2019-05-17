create table yingpian(
    movie_id int primary key auto_increment comment '影片id',
    movie_url varchar(255) not null comment '影片路径',
    movie_names varchar(255) not null comment '影片名字',
    movie_score float(5,2)  comment '影片评分',
    movie_look int comment '影片想看',
    movie_long int not null comment '影片时长',
    movie_type varchar(255) not null comment '影片类型',
    movie_actor varchar(255) not null comment '影片主演'
);

create table times(
    time_id int primary key auto_increment comment '影片观影时间表',
    time_date varchar(255) not null comment '影片观影日期'
);

create table projection(
    projection_id int primary key auto_increment comment '影片放映id',
    projection_time varchar(255) not null comment '影片放映时间',
    projection_over varchar(255) not null comment '影片散场时间',
    projection_language varchar(255) not null comment '影片放映语言',
    projection_rooms varchar(255) not null comment '影片放映厅',
    projection_pay float(5,2) not null comment '影片场次价格',
    movie_id int,
    time_id int
);


insert into yingpian values
(null,'../public/images/moviechoose/pikaququ.jpg','大侦探皮卡丘',8.5,null,104,'冒险','瑞安·雷诺兹'),
(null,'../public/images/moviechoose/fuchouzhezhe.jpg','复仇者联盟4：终局之战',9.1,null,181,'动作','小罗伯特·唐尼'),
(null,'../public/images/moviechoose/heyiweijia.jpg','何以为家',9.3,null,116,'剧情',' 赞恩·阿尔·拉菲亚'),
(null,'../public/images/moviechoose/gelasi.png','哥斯拉2：怪兽之王',null,222126,132,'科幻','米莉·波比·布朗'),
(null,'../public/images/moviechoose/mothers.jpg','一个母亲的复仇',9.3,null,146,'剧情','希里黛玉,阿克夏耶·坎纳'),
(null,'../public/images/moviechoose/haididi.jpg','海蒂和爷爷',null,null,111,'剧情','阿努克·斯特芬'),
(null,'../public/images/moviechoose/dogs.jpg','一条狗的使命2',null,null,108,'剧情','丹尼斯·奎德'),
(null,'../public/images/moviechoose/shuangsheng.jpg','双生',null,162380,82,'悬疑','陈都灵,刘昊然,赵芮'),
(null,'../public/images/moviechoose/longzhu.jpg','龙珠超：布罗利',null,49750,100,'动画','野泽雅子,堀川亮,中尾隆圣');


insert into times values
(null,'今天5月18日'),
(null,'明天5月19日'),
(null,'周一5月20日');


insert into projection values
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),
(null,'14:15','15:59散场','国语3D','4号厅(激光)',28.9),
(null,'17:00','18:44散场','英语3D','1号厅(激光)',28.9),
(null,'19:00','20:44散场','英语3D','1号厅(激光)',28.9),
(null,'21:00','22:44散场','英语3D','1号厅(激光)',28.9),
(null,'15:05','14:49散场','英语3D','1号厅(激光)',28.9),
(null,'17:05','18:49散场','英语3D','1号厅(激光)',28.9),
(null,'19:00','20:44散场','国语3D','1号厅(激光)',28.9),
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),
(null,'12:15','13:59散场','国语3D','4号厅(激光)',28.9),


