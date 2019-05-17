create table ticket(
    ticket_id int primary key auto_increment comment '电影票id',
    projection_time varchar comment '时间',
    movie-names varchar comment '影片名',
    seats varchar(255) DEFAULT null comment '座位',
    money float default null comment '总价'
);


insert into ticket values 
(1,'12:15','大侦探皮卡丘','1-1',32),
(2,'12:15',1,'大侦探皮卡丘','2-2',32);
