-- 选择数据库
use movie;

create table movieRanking (
  movieRanking_id int primary key auto_increment comment '电影ID',
  movieRanking_cover varchar(255) default '/images/yz_move_1.png' comment '电影封面图片路径',
  movieRanking_name varchar(255) not null  comment '电影名字',
  movieRanking_star varchar(255) not null comment '演职员',
  movieRanking_releasetime varchar not null comment '上映时间',
  movieRanking_grade1 varchar(255) comment '评分整数部分',
  movieRanking_grade2 int comment '评分小数部分',
  movieRanking_want int comment '想看人数',
  movieRanking_wantAll int comment '总想看人数'
)charset utf8;


set names gbk;

insert into movieRanking values
(null,default,'波希米亚狂想曲','主演：拉米·马雷克,本·哈迪,约瑟夫·梅泽罗','2019-03-22','9.',5,null,null);