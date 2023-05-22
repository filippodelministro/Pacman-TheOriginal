-- Progettazione Web 
DROP DATABASE if exists pacman; 
CREATE DATABASE pacman; 
USE pacman; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pacman
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;

insert into`user` values
  (100001, 'pweb', md5('pweb')),
  (100002, 'jhon', md5('jhon')),
  (100003, 'frank', md5('frank')),
  (100004, 'punk12', md5('punk12')),
  (100005, 'luke', md5('luke')),
  (100006, 'aaaa1', md5('aaaa1')),
  (100007, 'cdm', md5('cdm')),
  (100008, 'jules', md5('jules')),
  (100009, 'kappa125', md5('kappa125')),
  (100010, 'dmm', MD5('dmm'));

  
DROP TABLE IF EXISTS `matches`;
CREATE TABLE `matches` (
  `user` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `score` int(11) DEFAULT 0,
  `ghostKilled` int(11) default 0,
  `duration` int(11) default 0,
  `win` bool default false,
  PRIMARY KEY (`user`, `date`, `time`),  
    FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
INSERT INTO `matches` VALUES
(100001, '2022-05-10', '15:24:18', 1500, 1, 373, false),
(100007, '2022-06-25', '08:51:12', 1050, 0, 285, false),
(100003, '2022-08-04', '11:15:34', 2100, 3, 354, true),
(100005, '2022-09-19', '22:47:42', 220, 0, 60, false),
(100008, '2022-10-31', '16:32:09', 2410, 1, 180, true),
(100002, '2022-11-15', '07:59:01', 1590, 4, 313, false),
(100006, '2022-12-05', '18:43:27', 1370, 2, 275, false),
(100004, '2022-01-20', '10:09:58', 2300, 1, 313, false),
(100009, '2022-02-28', '21:55:04', 1140, 0, 247, true),
(100001, '2022-03-15', '11:23:47', 1360, 2, 288, false),
(100003, '2022-04-01', '19:12:36', 190, 6, 147, false),
(100002, '2022-04-07', '08:45:13', 2030, 3, 160, false),
(100004, '2022-04-13', '16:33:59', 2420, 4, 194, true),
(100005, '2022-04-19', '03:21:45', 1600, 0, 360, false),
(100006, '2022-04-25', '12:09:32', 1780, 5, 356, false),
(100008, '2022-05-01', '21:57:18', 1610, 3, 352, false),
(100007, '2022-05-07', '06:45:04', 1240, 0, 245, true),
(100009, '2022-05-13', '15:32:51', 2000, 9, 386, false),
(100003, '2022-05-19', '00:20:37', 1740, 0, 359, false),
(100001, '2022-05-25', '09:08:24', 1140, 2, 286, false),
(100002, '2022-05-31', '18:56:10', 2170, 4, 301, false),
(100004, '2022-06-06', '05:43:57', 2020, 0, 120, false),
(100005, '2022-06-12', '14:31:43', 1720, 3, 358, false),
(100006, '2022-06-18', '23:19:30', 1540, 1, 262, false),
(100008, '2022-06-24', '08:07:16', 2110, 6, 100, false),
(100007, '2022-06-30', '16:55:03', 1240, 9, 282, true),
(100009, '2022-07-06', '01:42:49', 1920, 2, 136, false),
(100003, '2022-07-12', '10:30:36', 140, 7, 185, false),
(100001, '2022-07-18', '19:18:22', 1810, 5, 231, false),
(100002, '2022-07-24', '04:06:09', 1470, 1, 239, false),
(100004, '2022-07-30', '12:53:55', 2090, 0, 257, false),
(100005, '2022-08-05', '21:41:42', 840, 2, 332, false),
(100006, '2022-08-11', '06:29:28', 850, 1, 325, false),
(100008, '2022-08-17', '15:17:15', 2180, 0, 127, true),
(100007, '2022-08-23', '00:05:01', 340, 4, 194, false),
(100009, '2022-08-29', '08:52:48', 1120, 6, 229, false),
(100003, '2022-09-04', '17:40:34', 940, 0, 201, true),
(100001, '2022-09-10', '02:28:21', 1980, 2, 408, false),
(100002, '2022-09-16', '11:16:07', 220, 1, 162, false),
(100001, '2022-10-03', '14:04:51', 1670, 1, 169, false),
(100002, '2022-10-09', '22:52:37', 1910, 9, 408, false),
(100003, '2022-10-15', '07:40:24', 2300, 0, 317, true),
(100004, '2022-10-21', '16:28:10', 1810, 7, 209, false),
(100005, '2022-10-27', '01:15:57', 2140, 3, 406, false),
(100006, '2022-11-02', '10:03:43', 1600, 0, 262, false),
(100007, '2022-11-08', '18:51:30', 1980, 2, 248, false),
(100008, '2022-11-14', '03:39:16', 1480, 8, 165, false),
(100009, '2022-11-20', '12:27:03', 1340, 1, 179, false),
(100010, '2022-11-26', '21:14:49', 2300, 0, 408, true),
(100001, '2022-01-07', '10:49:15', 2260, 0, 263, false),
(100002, '2022-01-13', '19:37:01', 1860, 1, 226, false),
(100003, '2022-01-19', '04:24:48', 2110, 5, 248, false),
(100004, '2022-01-25', '13:12:34', 1280, 2, 129, false),
(100005, '2022-01-31', '22:00:21', 1930, 4, 327, false),
(100006, '2022-02-06', '06:48:07', 1640, 1, 203, false),
(100007, '2022-02-12', '15:35:54', 1180, 0, 170, false),
(100008, '2022-02-18', '00:23:40', 1720, 2, 183, false),
(100009, '2022-02-24', '09:11:27', 1450, 3, 217, false),
(100010, '2022-03-02', '18:59:13', 1890, 1, 235, false);


DROP TABLE IF EXISTS `wallet`;
CREATE TABLE `wallet` (
  `user` int(11) NOT NULL ,
  `coins` int(11) NOT NULL,
  PRIMARY KEY (`user`),
  FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into`wallet` values
  (100001, 1000),
  (100002, 95),
  (100003, 50),
  (100004, 200),
  (100005, 75),
  (100006, 150),
  (100007, 80),
  (100008, 110),
  (100009, 40),
  (100010, 90);
  


DROP TABLE IF EXISTS `skins`;
CREATE TABLE `skins` (
  `type` varchar(32) NOT NULL,
	`name` varchar(32) NOT NULL,
	`price` int(11) NOT NULL ,
  PRIMARY KEY (`type`, `name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into`skins` values
("pacman", "classic", 0),
("pacman", "green", 50),
("pacman", "fucsia", 100),
("pacman", "white", 150),
("pacman", "red", 200),

("ghosts", "classic", 0),
("ghosts", "vintage", 50),
("ghosts", "space", 100),
("ghosts", "blackandwhite", 150),
("ghosts", "monocolor", 200),

("map", "classic", 0),
("map", "desert", 50),
("map", "jungle", 80),
("map", "seaside", 100),
("map", "artic", 150),
("map", "blackandwhite", 180),
 ("map", "lollipop", 200); 
DROP TABLE IF EXISTS `unlocked`;
CREATE TABLE `unlocked` (
	`user` int(11) NOT NULL ,
	`type` varchar(32) NOT NULL,
	`name` varchar(32) NOT NULL,
  PRIMARY KEY (`user`, `type`, `name`),
  FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `unlocked` VALUES
(100001, 'pacman', 'classic'),
(100001, 'ghosts', 'classic'),
(100001, 'map', 'classic'),
(100002, 'pacman', 'classic'),
(100002, 'ghosts', 'classic'),
(100002, 'map', 'classic'),
(100003, 'pacman', 'classic'),
(100003, 'ghosts', 'classic'),
(100003, 'map', 'classic'),
(100004, 'pacman', 'classic'),
(100004, 'ghosts', 'classic'),
(100004, 'map', 'classic'),
(100005, 'pacman', 'classic'),
(100005, 'ghosts', 'classic'),
(100005, 'map', 'classic'),
(100006, 'pacman', 'classic'),
(100006, 'ghosts', 'classic'),
(100006, 'map', 'classic'),
(100007, 'pacman', 'classic'),
(100007, 'ghosts', 'classic'),
(100007, 'map', 'classic'),
(100008, 'pacman', 'classic'),
(100008, 'ghosts', 'classic'),
(100008, 'map', 'classic'),
(100009, 'pacman', 'classic'),
(100009, 'ghosts', 'classic'),
(100009, 'map', 'classic'),
(100010, 'pacman', 'classic'),
(100010, 'ghosts', 'classic'),
(100010, 'map', 'classic');


DROP TABLE IF EXISTS `skinsApplied`;
CREATE TABLE `skinsApplied` (
	`user` int(11) NOT NULL ,
	`pacman` varchar(32) NOT NULL,
	`ghosts` varchar(32) NOT NULL,
	`map` varchar(32) NOT NULL,
  PRIMARY KEY (`user`),
  FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `skinsApplied` VALUES
(100001, 'classic', 'classic', 'classic'),
(100002, 'classic', 'classic', 'classic'),
(100003, 'classic', 'classic', 'classic'),
(100004, 'classic', 'classic', 'classic'),
(100005, 'classic', 'classic', 'classic'),
(100006, 'classic', 'classic', 'classic'),
(100007, 'classic', 'classic', 'classic'),
(100008, 'classic', 'classic', 'classic'),
(100009, 'classic', 'classic', 'classic'),
(100010, 'classic', 'classic', 'classic');
