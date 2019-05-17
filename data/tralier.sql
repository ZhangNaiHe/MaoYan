create table ticket(
    `ticket_id` int primary key auto_increment comment '电影票id',
    projection_id int comment '影片放映id',
    `seats` varchar(255) DEFAULT null comment '座位'
);



insert into ticket values 
(1,1,'1-1'),
(2,1,'4-5');
