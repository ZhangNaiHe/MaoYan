create table ticket(
    ticket_id int primary key auto_increment comment '电影票id',
    projection_time varchar(255) not null comment '时间',
    movie_names varchar(255) not null comment '影片名',
    seats varchar(255) DEFAULT null comment '座位',
    money float(5,2) default null comment '总价'
);


insert into ticket values 
(1,'12:15','大侦探皮卡丘','1-1',32),
(2,'12:15','大侦探皮卡丘','2-2',32);