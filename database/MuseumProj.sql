Drop database if exists `museums`;
create database `museums`;
use `museums`;
--
-- Table structure for table `museum`
--
DROP TABLE IF EXISTS `museum`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `museum` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL ,
  `address` varchar(100) not null,
  `description` text,
  `image` mediumtext,
  lat double,
  lon double,
  PRIMARY KEY (`id`),
  KEY `index_title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `museum` (title, address, description, image,lat,lon) values
('Muzeul de istorie','or.Chisianu Strada 31 August 1989 121 A','','images/museums/istorie.jpg',47.0225865,28.8281315),
('Muzeul de istogrie','or.Chisianu Strada 31 August 1989 121 A','','images/museums/istorie.jpg',69.0225865,28.8281315),
('Muzeul de Arta','or.Chisianu Strada 31 August 1989 121 A','','images/museums/istorie.jpg',47.0225865,28.8281315);

select * from `museum`;


--
-- Table structure for table `section`
--
DROP TABLE IF EXISTS `section`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `section` (
  `idsect` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  `image` mediumtext,
  `type` varchar(50),
  `idmus` bigint,
  PRIMARY KEY (`idsect`),
  foreign key (`idmus`) references `museum`(`id`) ON UPDATE CASCADE ON delete CASCADE,
  KEY `index_title` (`title`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `section` (title, description, image,type,idmus) values
('Sectia 3','','images/museums/istorie.jpg','Rennaisance',1),
('Sectia 5','','images/museums/istorie.jpg','Barocco',2);
select * from `section`;
select museum.title from museum inner join section on museum.id=section.idmus where section.type like 'Barocco';

--
-- Table structure for table `gallery`
--
DROP TABLE IF EXISTS `gallery`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gallery` (
  `idgal` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL ,
  `description` text,
  `image` mediumtext,
  `idsect` bigint,
  PRIMARY KEY (`idgal`),
  foreign key (`idsect`) references `section`(`idsect`) ON UPDATE CASCADE ON delete CASCADE,
  KEY `index_title` (`title`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `gallery` (title, description, image,idsect) values
('Room4','','images/museums/istorie.jpg',1),
('Room5','','images/museums/istorie.jpg',1);
select * from `gallery`;

--
-- Table structure for table `exponat`
--
DROP TABLE IF EXISTS `exponat`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `exponat` (
  `idexp` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL unique,
  `description` text,
  `image` mediumtext,
  `idgal` bigint,
  price float,
  PRIMARY KEY (`idexp`),
  foreign key (`idgal`) references `gallery`(`idgal`) ON UPDATE CASCADE ON delete CASCADE,
  KEY `index_title` (`title`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `exponat` (title, description, image,idgal,price) values
('Picture1','','images/museums/istorie.jpg',1,2000),
('Picture2','','images/museums/istorie.jpg',1,3500);
select * from `exponat`;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
   username varchar(100),
  `name` varchar(100) ,
  `image` mediumtext,
  password varchar(100),
  email varchar(100) ,
  role varchar(100),
 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- insert into `user` (name, username,password, email,image,role) values
-- ('Victor Ungureanu','fdfd','a@dfsd.com','images/museums/istorie.jpg','admin','jj'),
-- ('Victor Ungureanu','fdfd','ad@dfsd.com','images/museums/istorie.jpg','','hh');
select * from `user`;


--
-- Table structure for table `payment`
--
DROP TABLE IF EXISTS `payment`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `payment` (
  `idpay` bigint NOT NULL AUTO_INCREMENT,
  `cardnumber` varchar(16) NOT NULL unique,
	amount float,
    id bigint,
  PRIMARY KEY (`idpay`),
  foreign key(id) references user(id) ON UPDATE CASCADE ON delete CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- insert into `payment` (cardnumber, amount, id) values
-- ('1234567890123456',20000,1);
-- select * from `payment`;


--
-- Table structure for table `souvenirs`
--
DROP TABLE IF EXISTS `souvenirs`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `souvenirs` (
  `idsuv` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL unique,
	price float,
    image mediumtext,
    idmuseum bigint,
  PRIMARY KEY (`idsuv`),
    foreign key(idmuseum) references museum(id) ON UPDATE CASCADE ON delete CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `souvenirs` (name,price,image,idmuseum) values
('Teddy',1000,'fdgdfg',1);
select * from `souvenirs`;

--
-- Table structure for table `souvenirsamount`
--
DROP TABLE IF EXISTS `souvenirsamount`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `souvenirsamount` (
  `idsuva` bigint NOT NULL AUTO_INCREMENT,
	amount bigint,
    idsuv bigint unique,
  PRIMARY KEY (`idsuva`),
    foreign key(idsuv) references souvenirs(idsuv) ON UPDATE CASCADE ON delete CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `souvenirsamount` (amount,idsuv) values
(1000,1);
select * from `souvenirsamount`;

--
-- Table structure for table `souvenirsamount`
--
DROP TABLE IF EXISTS `souvenirsamount`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `souvenirsamount` (
  `idsuva` bigint NOT NULL AUTO_INCREMENT,
	amount bigint,
    idsuv bigint unique,
  PRIMARY KEY (`idsuva`),
    foreign key(idsuv) references souvenirs(idsuv) ON UPDATE CASCADE ON delete CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into `souvenirsamount` (amount,idsuv) values
(1000,1);
select * from `souvenirsamount`;

--
-- Table structure for table `turtype`
--
DROP TABLE IF EXISTS `turtype`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `turtype` (
  `idturtype` bigint NOT NULL AUTO_INCREMENT,
   nametur varchar(100),
   description text,
   price float,
   PRIMARY KEY (`idturtype`)
 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
insert into turtype (idturtype, nametur, description,price) values(1,'scsdcsd','jdsfknsjdnf',2300);
--
-- Table structure for table `tur`
--
DROP TABLE IF EXISTS `tur`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tur` (
  `idtur` bigint NOT NULL AUTO_INCREMENT,
   `id` bigint,
   `idmus` bigint,
   idsect bigint,
  `date` date,
  idturtype bigint,
   PRIMARY KEY (`idtur`),
   foreign key (`id`) references `user`(`id`)ON UPDATE CASCADE ON delete CASCADE,
	foreign key (`idmus`) references `museum`(`id`) ON UPDATE CASCADE ON delete CASCADE,
    foreign key (idsect) references section(idsect) ON UPDATE CASCADE ON delete CASCADE,
      foreign key (idturtype) references turtype(idturtype) ON UPDATE CASCADE ON delete CASCADE
 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- insert into tur values (1,1,1,1,'2008-11-11',1);
--
-- Table structure for table `purchase`
--
DROP TABLE IF EXISTS `purchase`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `purchase` (
  `idpur` bigint NOT NULL AUTO_INCREMENT,
   `id` bigint,
   `idmus` bigint,
   idsouvam bigint,
  `date` date,
  idturtype bigint,
   PRIMARY KEY (`idpur`),
   foreign key (`id`) references `user`(`id`) ON UPDATE CASCADE ON delete CASCADE,
   foreign key (`idmus`) references `museum`(`id`) ON UPDATE CASCADE ON delete CASCADE,
	foreign key (`idsouvam`) references `souvenirsamount`(`idsuva`) ON UPDATE CASCADE ON delete CASCADE
 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
