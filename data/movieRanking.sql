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






use movie;

create table comment(
    comment_id int primary key auto_increment comment '评论ID',
    comment_photo varchar(255) default '/images/yz_icon_11.png' not null comment '用户头像',
    comment_name varchar(255) not null comment '用户昵称',
    comment_date varchar(50) not null comment '发表日期',
    comment_praise int not null comment '点赞数',
    comment_text varchar(255) not null comment '发表内容'
)charset utf8;

set names gbk;

insert into comment values
(null,'/images/yz_icon_11.png','古德.依温宁','03-24',5973,'我是一个音乐人，即使没有一个像样的作品，无论是从精神还是生活，都承受着很大的压力，我想这些东西都是必将承受的，但就在我看这部电影的早上，我心爱的吉他被别人摔碎了，我这么大一个男人，我从为饿着肚子，任何事情流过眼泪，其实一把吉他可以再买，但摔碎的是我的努力，一腔热血，还有我所有的一文不值，我做梦也在想，我能在10万人的体育馆开演唱会，所有人都在唱着我的歌，我会为此而激动的睡不着觉。也许，我应该去找点工作，再买一把吉他，从现在开始。'),
(null,default,'CPO945685969','03-22',1035,'IMAX音效超级棒'),
(null,default,'湾仔码头','03-22',1123,'没有配乐也能掀翻屋顶，没有球棚仍能响彻寰宇，没有酒杯也能隔空共饮，没有声音仍能唱给你听。只要一起拍手跺脚，不用乐器也能摇滚；只要一起开灯关灯，不用相爱也能同在。
剧本流水账故事性弱，人物生平还原度低，由于某些不可言说的原因最甜虐部分被一刀剪完。4星给最后20分钟的高光时刻。鼓膜轰鸣，热泪盈眶。走出电影院的那一瞬间，一个普通的下午像一个礼炮齐鸣的节日。
从此别人都苍老，唯独你永远风华正茂。');