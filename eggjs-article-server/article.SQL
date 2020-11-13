create database egg_article;

use egg_article;

create table article(
    id int(10) not null auto_increment,
    img text default null comment '缩略图',
    title varchar(80) default null comment '文章标题',
    summary varchar(300) default null comment '文章简介',
    content text default null comment '文章内容',
    createTime timestamp default null comment '发布事件',
    primary key(id)
)engine=InnoDB auto_increment=1 comment '文章表';

insert into article(img, title, summary, content, createTime)
values('https://avatars3.githubusercontent.com/u/12422273?s=460&u=1cb4bc085207c675a0ee754f3f2d67449bd5c8b4&v=4', 
'学习eggjs', '学习eggjs', '学习eggjs', '2020-11-13 10:24:00');

