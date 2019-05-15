-- 创建数据库
create database filmroom;
-- 使用数据库
use filmroom;
-- 创建表
create table film(
    id int primary key auto_increment comment '影院id',
    names varchar(255) not null comment '影院名字',
    address varchar(255) not null comment '影院地址',
    prices float(5,2) not null comment '影院价格',
    bra_id int,
    dis_id int,
    spe_id int 
);

create table brand(
    bra_id int primary key auto_increment comment'品牌id',
    bra_name varchar(255) not null default '全部' comment '品牌名'
);

create table district(
    dis_id int primary key auto_increment comment '行政区id',
    dis_name varchar(255) not null default '全部' comment '行政区名字'
);

create table special(
    spe_id int primary key auto_increment comment '特殊厅id',
    spe_name varchar(255) not null default '全部' comment '特殊厅名字'
);



-- 插入brand数据
insert into brand values
(null,'全部'),
(null,'大地影院'),
(null,'幸福蓝海国际影城'),
(null,'SFC上影影城'),
(null,'其他');

-- 插入district数据
insert into district values
(null,'全部'),
(null,'地铁附近'),
(null,'三匹马商业广场'),
(null,'乐天玛特二店'),
(null,'万德福'),
(null,'海宁皮革城');

-- 插入special数据
insert into special values
(null,'全部'),
(null,'杜比全景声厅'),
(null,'DTS:X临境音厅'),
(null,'4D厅'),
(null,'巨幕厅');


-- 插入数据
insert into film values
(null,'大地影院(万顺店)','地址：沭阳县常州路万顺帝景天成7#A401号',28.9,2,4,null),
(null,'新视界国际影城','地址：沭阳县人民中路108号（原沭阳影剧院）',23,5,3,1),
(null,'SFC上影影城(沭阳店)','地址：沭阳县台州南路1号乐之地商业中心广场4楼',28.6,4,6,2),
(null,'华夏国际影城','地址：沭阳县新玛特国际购物中心(万得福4楼华夏国际影城)',19,5,5,null),
(null,'沭阳大都会智能影城','地址：沭阳县乐天马特一店三楼肯德基南88米（肯德基南100米）',23,5,3,null),
(null,'沭阳时尚国际影城','地址：沭阳县人民中路69号乐天马特一店4楼',23,5,3,null),
(null,'幸福蓝海国际影城(沭阳店)','地址：沭阳县人民路16号三匹马商业广场1号楼5层（北京北路口）',24.5,3,3,null);


