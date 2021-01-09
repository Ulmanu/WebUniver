Drop database if exists `museums`;
create database `museums`;
use `museums`;
--
-- Table structure for table `museum`
--
DROP TABLE IF EXISTS `museum`;
SET character_set_client = utf8mb4;
CREATE TABLE `museum`
(
    `id`          bigint       NOT NULL AUTO_INCREMENT,
    `title`       varchar(100) NOT NULL,
    `address`     varchar(100) not null,
    `description` text,
    `image`       mediumtext,
    lat           double,
    lon           double,
    PRIMARY KEY (`id`),
    KEY `index_title` (`title`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into museum (title, address, description, image, lat, lon)
values ('Muzeul de istorie', ' or.Chisianu Strada 31 August 1989 121 A ', '', 'images/museums/istorie.jpg',
        47.0225865, 28.8281315),
       ('Muzeul de istogrie', ' or.Chisianu Strada 31 August 1989 121 A ', '', 'images/museums/istorie.jpg',
        69.0225865, 28.8281315),
       ('Muzeul de Arta', ' or.Chisianu Strada 31 August 1989 121 A ', '', 'images/museums/istorie.jpg',
        47.0225865, 28.8281315);

select *
from `museum`;


--
-- Table structure for table `section`
--
DROP TABLE IF EXISTS `section`;
SET character_set_client = utf8mb4;
CREATE TABLE `section`
(
    `idsect`      bigint       NOT NULL AUTO_INCREMENT,
    `title`       varchar(100) NOT NULL,
    `description` text,
    `image`       mediumtext,
    `type`        varchar(50),
    `idmus`       bigint,
    PRIMARY KEY (`idsect`),
    foreign key (`idmus`) references `museum` (`id`) ON UPDATE CASCADE ON delete CASCADE,
    KEY `index_title` (`title`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `section` (title, description, image, type, idmus)
values ('Sectia 3', '', 'images/museums/istorie.jpg', 'Rennaisance', 1),
       ('Sectia 5', '', 'images/museums/istorie.jpg', 'Barocco', 2);
select *
from section;
select museum.title
from museum
         inner join section on museum.id = section.idmus
where section.type like 'Barocco';

--
-- Table structure for table `gallery`
--
DROP TABLE IF EXISTS `gallery`;
SET character_set_client = utf8mb4;
CREATE TABLE `gallery`
(
    `idgal`       bigint       NOT NULL AUTO_INCREMENT,
    `title`       varchar(100) NOT NULL,
    `description` text,
    `image`       mediumtext,
    `idsect`      bigint,
    PRIMARY KEY (`idgal`),
    foreign key (`idsect`) references `section` (`idsect`) ON UPDATE CASCADE ON delete CASCADE,
    KEY `index_title` (`title`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `gallery` (title, description, image, idsect)
values ('Room4', '', 'images/museums/istorie.jpg', 1),
       ('Room5', '', 'images/museums/istorie.jpg', 1);
select *
from `gallery`;

--
-- Table structure for table `exponat`
--
DROP TABLE IF EXISTS `exponat`;
SET character_set_client = utf8mb4;
CREATE TABLE `exponat`
(
    `idexp`       bigint       NOT NULL AUTO_INCREMENT,
    `title`       varchar(100) NOT NULL unique,
    `description` text,
    `image`       mediumtext,
    `idgal`       bigint,
    price         float,
    PRIMARY KEY (`idexp`),
    foreign key (`idgal`) references `gallery` (`idgal`) ON UPDATE CASCADE ON delete CASCADE,
    KEY `index_title` (`title`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `exponat` (title, description, image, idgal, price)
values ('Picture1', '', 'images/museums/istorie.jpg', 1, 2000),
       ('Picture2', '', 'images/museums/istorie.jpg', 1, 3500);
select *
from `exponat`;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
SET character_set_client = utf8mb4;
CREATE TABLE `user`
(
    `id`     bigint NOT NULL AUTO_INCREMENT,
    username varchar(100),
    `name`   varchar(100),
    `image`  mediumtext,
    password varchar(100),
    email    varchar(100),
    role     varchar(100),
    income   double       default 0.00,
    outcome  double       default 0.00,
    status   varchar(200) default 'null',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- insert into `user` (name, username,password, email,image,role) values
-- (''Victor Ungureanu'',''fdfd'',''a@dfsd.com'',''images/museums/istorie.jpg'',''admin'',''jj''),
-- (''Victor Ungureanu'',''fdfd'',''ad@dfsd.com'',''images/museums/istorie.jpg'','''',''hh'');
select *
from `user`;


--
-- Table structure for table `payment`
--
DROP TABLE IF EXISTS `payment`;
SET character_set_client = utf8mb4;
CREATE TABLE `payment`
(
    `idpay`      bigint      NOT NULL AUTO_INCREMENT,
    `cardnumber` varchar(16) NOT NULL unique,
    amount       float,
    iduser       bigint,
    PRIMARY KEY (`idpay`),
    foreign key (iduser) references user (id) ON UPDATE CASCADE ON delete CASCADE
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- insert into `payment` (cardnumber, amount, id) values
-- (''1234567890123456'',20000,1);
-- select * from `payment`;


--
-- Table structure for table `souvenirs`
--
DROP TABLE IF EXISTS `souvenirs`;
SET character_set_client = utf8mb4;
CREATE TABLE `souvenirs`
(
    `idsuv` bigint       NOT NULL AUTO_INCREMENT,
    `name`  varchar(100) NOT NULL unique,
    price   float,
    image   mediumtext,
    qty     int          default 0,
    status  varchar(200) default 'null',
    PRIMARY KEY (`idsuv`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `souvenirs` (name, price, image)
values ('Teddy', 1000, 'fdgdfg');
select *
from `souvenirs`;

--
-- Table structure for table `souvenirsamount`
--
DROP TABLE IF EXISTS `souvenirsamount`;
SET character_set_client = utf8mb4;
CREATE TABLE `souvenirsamount`
(
    `idsuva` bigint NOT NULL AUTO_INCREMENT,
    amount   bigint,
    idsuv    bigint unique,
    PRIMARY KEY (`idsuva`),
    foreign key (idsuv) references souvenirs (idsuv) ON UPDATE CASCADE ON delete CASCADE
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `souvenirsamount` (amount, idsuv)
values (1000, 1);
select *
from `souvenirsamount`;

--
-- Table structure for table `souvenirsamount`
--
DROP TABLE IF EXISTS `souvenirsamount`;
SET character_set_client = utf8mb4;
CREATE TABLE `souvenirsamount`
(
    `idsuva` bigint NOT NULL AUTO_INCREMENT,
    amount   bigint,
    idsuv    bigint unique,
    PRIMARY KEY (`idsuva`),
    foreign key (idsuv) references souvenirs (idsuv) ON UPDATE CASCADE ON delete CASCADE
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into `souvenirsamount` (amount, idsuv)
values (1000, 1);
select *
from `souvenirsamount`;

--
-- Table structure for table `turtype`
--
DROP TABLE IF EXISTS `turtype`;
SET character_set_client = utf8mb4;
CREATE TABLE `turtype`
(
    `idturtype` bigint NOT NULL AUTO_INCREMENT,
    nametur     varchar(100),
    description text,
    price       float,
    `idmus`     bigint,
    PRIMARY KEY (`idturtype`),
    foreign key (`idmus`) references `museum` (`id`) ON UPDATE CASCADE ON delete CASCADE

) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
insert into turtype (idturtype, nametur, description, price, idmus)
values (1, 'scsdcsd', 'jdsfknsjdnf', 2300, 1);
--
-- Table structure for table `tur`
--
DROP TABLE IF EXISTS `tur`;
SET character_set_client = utf8mb4;
CREATE TABLE `tur`
(
    `idtur`   bigint NOT NULL AUTO_INCREMENT,
    `id`      bigint,
    `date`    date,
    qty       int,
    idturtype bigint,
    cost      double,
    PRIMARY KEY (`idtur`),
    foreign key (`id`) references `user` (`id`) ON UPDATE CASCADE ON delete CASCADE,
    foreign key (idturtype) references turtype (idturtype) ON UPDATE CASCADE ON delete CASCADE

) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- insert into tur values (1,1,1,1,''2008-11-11'',1);
--
-- Table structure for table `purchase`
--
DROP TABLE IF EXISTS `purchase`;
SET character_set_client = utf8mb4;
CREATE TABLE `purchase`
(
    `idpur`  bigint NOT NULL AUTO_INCREMENT,
    `id`     bigint,
    idsouvam bigint,
    `date`   date,
    qty      int    default 0,
    cost     double default 0.00,
    PRIMARY KEY (`idpur`),
    foreign key (`id`) references `user` (`id`) ON UPDATE CASCADE ON delete CASCADE,
    foreign key (`idsouvam`) references `souvenirs` (`idsuv`) ON UPDATE CASCADE ON delete CASCADE

) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
create table roles
(
    id   int auto_increment
        primary key,
    name varchar(20) null
);

create table user_roles
(
    user_id bigint not null,
    role_id int    not null,
    primary key (user_id, role_id),
    constraint FK55itppkw3i07do3h7qoclqd4k
        foreign key (user_id) references user (id),
    constraint FKh8ciramu9cc9q3qcqiv4ue8a6
        foreign key (role_id) references roles (id)
);
INSERT INTO roles(name)
VALUES ('ROLE_USER');
INSERT INTO roles(name)
VALUES ('ROLE_MODERATOR');
INSERT INTO roles(name)
VALUES ('ROLE_ADMIN');
alter table user_roles
    drop foreign key FK55itppkw3i07do3h7qoclqd4k;

alter table user_roles
    add constraint FK55itppkw3i07do3h7qoclqd4k
        foreign key (user_id) references user (id)
            on update cascade on delete cascade;


DELIMITER $$

CREATE TRIGGER
    souvenir_amount
    AFTER INSERT
    ON
        purchase
    FOR EACH ROW
BEGIN

 
    declare finadl int;


    update souvenirs
    set souvenirs.qty=(select sum(amount) from museums.souvenirsamount where souvenirsamount.idsuv = souvenirs.idsuv) -
                      (select sum(qty) from purchase where idsouvam = souvenirs.idsuv)
    where idsuv = NEW.idsouvam;

    set finadl = (select sum(qty) from souvenirs where idsuv = NEW.idsouvam);

    if (finadl < 0) then
        update souvenirs
        set status='unavailable'
        where idsuv = NEW.idsouvam;
    else
        update souvenirs
        set status='available'
        where idsuv = NEW.idsouvam;
    end if;

END;

CREATE TRIGGER
    souvenir_amount2
    AFTER UPDATE
    ON
        purchase
    FOR EACH ROW
BEGIN

    declare finadl int;


    update souvenirs
    set souvenirs.qty=(select sum(amount) from museums.souvenirsamount where souvenirsamount.idsuv = souvenirs.idsuv) -
                      (select sum(qty) from purchase where idsouvam = souvenirs.idsuv)
    where idsuv = NEW.idsouvam;

    set finadl = (select sum(qty) from souvenirs where idsuv = NEW.idsouvam);

    if (finadl < 0) then
        update souvenirs
        set status='unavailable'
        where idsuv = NEW.idsouvam;
    else
        update souvenirs
        set status='available'
        where idsuv = NEW.idsouvam;
    end if;

END;

CREATE TRIGGER
    souvenir_amount3
    AFTER DELETE
    ON
        purchase
    FOR EACH ROW
BEGIN

    declare finadl int;


    update souvenirs
    set souvenirs.qty=(select sum(amount) from museums.souvenirsamount where souvenirsamount.idsuv = souvenirs.idsuv) -
                      (select sum(qty) from purchase where idsouvam = souvenirs.idsuv)
    where idsuv = OLD.idsouvam;

    set finadl = (select sum(qty) from souvenirs where idsuv = OLD.idsouvam);

    if (finadl < 0) then
        update souvenirs
        set status='unavailable'
        where idsuv = OLD.idsouvam;
    else
        update souvenirs
        set status='available'
        where idsuv = OLD.idsouvam;
    end if;

END;


CREATE TRIGGER
    user_income
    AFTER INSERT
    ON
        payment
    FOR EACH ROW
BEGIN


    update user
    set user.income=(select sum(amount) from payment where id = iduser)
    where id = NEW.iduser;
END;



CREATE TRIGGER
    user_outcome
    AFTER INSERT
    ON
        purchase
    FOR EACH ROW
begin

    update user
    set outcome=(select sum(cost) from museums.purchase where purchase.id = user.id)
    where id = NEW.id;

end;

CREATE TRIGGER
    user_outcome2
    AFTER INSERT
    ON
        tur
    FOR EACH ROW
begin

    update user
    set outcome=(select sum(cost) from tur where tur.id = user.id)
    where id = NEW.id;

end;
$$
DELIMITER ;
