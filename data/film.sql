-- 创建数据库
create database filmroom;
-- 使用数据库
use filmroom;
-- 创建表
create table film(
    id int primary key comment '影院id',
    names varchar(255) not null comment '影院名字',
    address varchar(255) not null comment '影院地址',
    prices float(5,2) not null comment '影院价格',
    brand varchar(255) comment '影院品牌',
    district varchar(255) comment '行政区',
    special varchar(255) comment '特殊厅',
    quan varchar(255) default '全部'
);
    -- others varchar(255) default '其他' comment '其他'

set names gbk;

-- 插入数据
insert into film values(1,'大地影院(万顺店)','地址：沭阳县常州路万顺帝景天成7#A401号',23.9,'大地影院','乐天玛特二店',null,default);
insert into film values(2,'新视觉国际影城','地址：沭阳县人民中路108号(原沭阳影剧院)',23,'其他','三匹马商业广场','杜比全景声厅',default);
insert into film values(3,'SFC上影影城(沭阳店)','地址：沭阳县台州南路1号乐之地商业中心广场4楼',28.6,'SFC上影影城','海宁皮革城','DTS:X 临境音厅',default);
insert into film values(4,'华夏国际影城','地址：沭阳县新玛特国际购物中心(万得福4楼华夏国际影城)',19,'其他','万德福',null,default);
insert into film values(5,'沭阳大都会智能影城','地址：沭阳县乐天马特一店三楼肯德基南88米(肯德基南100米)',23,'其他','三匹马商业广场',null,default);
insert into film values(6,'沭阳时尚国际影城','地址：沭阳县人民中路69号乐天马特一店4楼',23,'其他','三匹马商业广场',null,default);
insert into film values(7,'幸福蓝海国际影城(沭阳店)','地址：沭阳县人民路16号三匹马商业广场1号楼5层(北京北路口)',24.5,'幸福蓝海国际影城','三匹马商业广场',null,default);


