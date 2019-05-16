use movie;

create table comment(
    comment_id int primary key auto_increment comment '评论ID',
    comment_photo varchar(255) default '/images/yz_icon_11.png' not null comment '用户头像',
    comment_name varchar(255) not null comment '用户昵称',
    
)charset utf8;