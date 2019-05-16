
-- 电影票
create table ticket(
    `ticket_id` int primary key auto_increment comment '电影票id',
    `show_name` varchar(255) DEFAULT null comment '电影名',
    `names` varchar(255) DEFAULT null comment '影院名字',
    `prices` float(5,2) DEFAULT null comment '单价',
    `ver` varchar(255) DEFAULT null comment '版本',
    `data_time` varchar(255) DEFAULT null comment '日期',
    `row` int(11) DEFAULT NULL comment '行',
    `column` int(11) DEFAULT NULL comment '列'
);



insert into ticket values 
(1,'龙珠超:布罗利', 'SFC上影城(沭阳店)', 38, '日语imax','2019-5-24 22:10',1,1),
(2,'大侦探皮卡丘', '大地影院(万顺店)', 32, '英语4d', '2019-5-24 22:10',4,5);


