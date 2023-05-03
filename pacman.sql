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
  `userId` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;

insert into`user` values
  (100001, 'pweb', md5('pweb')),
  (100002, 'filippo', md5('filippo')),
  (100003, 'frank', md5('frank')),
  (100004, 'franco', md5('franco')),
  (100005, 'gabriele', md5('gabriele')),
  (100006, 'gianfranco', md5('gianfranco')),
  (100007, 'gingi', md5('gingi')),
  (100008, 'giulio', md5('giulio')),
  (100009, 'luca', md5('luca')),
  (100010, 'marco', MD5('marco')),
  (100011, 'paolo', MD5('paolo')),
  (100012, 'simone', MD5('simone')),
  (100013, 'andrea', MD5('andrea')),
  (100014, 'giuseppe', MD5('giuseppe')),
  (100015, 'antonio', MD5('antonio')),
  (100016, 'riccardo', MD5('riccardo'));


  
DROP TABLE IF EXISTS `matches`;
CREATE TABLE `matches` (
  `user` INT(11) NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `score` INT(11) DEFAULT 0,
  `ghostKilled` INT(11) DEFAULT 0,
  `duration` INT(11) DEFAULT 0,
  `win` bool DEFAULT false,
  PRIMARY KEY (`user`, `date`, `time`),  
    FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
INSERT INTO `matches` VALUES
(100001, '2022-05-10', '15:24:18', 500, 1, 660, false),
(100007, '2022-06-25', '08:51:12', 50, 0, 360, false),
(100003, '2022-08-04', '11:15:34', 1100, 3, 780, true),
(100005, '2022-09-19', '22:47:42', 120, 0, 900, false),
(100008, '2022-10-31', '16:32:09', 1410, 1, 840, true),
(100002, '2022-11-15', '07:59:01', 590, 4, 720, false),
(100006, '2022-12-05', '18:43:27', 370, 2, 900, false),
(100004, '2022-01-20', '10:09:58', 1300, 1, 720, false),
(100009, '2022-02-28', '21:55:04', 140, 0, 660, true),
(100001, '2022-03-15', '11:23:47', 360, 2, 840, false),
(100003, '2022-04-01', '19:12:36', 90, 6, 420, false),
(100002, '2022-04-07', '08:45:13', 1030, 3, 840, false),
(100004, '2022-04-13', '16:33:59', 1420, 4, 1020, true),
(100005, '2022-04-19', '03:21:45', 600, 0, 780, false),
(100006, '2022-04-25', '12:09:32', 780, 5, 840, false),
(100008, '2022-05-01', '21:57:18', 610, 3, 780, false),
(100007, '2022-05-07', '06:45:04', 240, 0, 660, true),
(100009, '2022-05-13', '15:32:51', 1000, 9, 840, false),
(100003, '2022-05-19', '00:20:37', 740, 0, 720, false),
(100001, '2022-05-25', '09:08:24', 140, 2, 840, false),
(100002, '2022-05-31', '18:56:10', 1170, 4, 900, false),
(100004, '2022-06-06', '05:43:57', 1020, 0, 660, false),
(100005, '2022-06-12', '14:31:43', 720, 3, 1020, false),
(100006, '2022-06-18', '23:19:30', 540, 1, 780, false),
(100008, '2022-06-24', '08:07:16', 1110, 6, 660, false),
(100007, '2022-06-30', '16:55:03', 240, 9, 840, true),
(100009, '2022-07-06', '01:42:49', 920, 2, 780, false),
(100003, '2022-07-12', '10:30:36', 120, 7, 840, false),
(100001, '2022-07-18', '19:18:22', 810, 5, 900, false),
(100002, '2022-07-24', '04:06:09', 470, 1, 660, false),
(100004, '2022-07-30', '12:53:55', 1090, 0, 660, false),
(100005, '2022-08-05', '21:41:42', 340, 2, 900, false),
(100006, '2022-08-11', '06:29:28', 450, 1, 720, false),
(100008, '2022-08-17', '15:17:15', 1180, 0, 840, true),
(100007, '2022-08-23', '00:05:01', 300, 4, 540, false),
(100009, '2022-08-29', '08:52:48', 680, 6, 720, false),
(100003, '2022-09-04', '17:40:34', 840, 0, 840, true),
(100001, '2022-09-10', '02:28:21', 980, 2, 960, false),
(100002, '2022-09-16', '11:16:07', 120, 1, 660, false),
(100001, '2022-10-03', '14:04:51', 670, 1, 720, false),
(100002, '2022-10-09', '22:52:37', 910, 9, 840, false),
(100003, '2022-10-15', '07:40:24', 1300, 0, 840, true),
(100004, '2022-10-21', '16:28:10', 810, 7, 660, false),
(100005, '2022-10-27', '01:15:57', 1140, 3, 1020, false),
(100006, '2022-11-02', '10:03:43', 600, 0, 720, false),
(100007, '2022-11-08', '18:51:30', 980, 2, 780, false),
(100008, '2022-11-14', '03:39:16', 480, 8, 720, false),
(100009, '2022-11-20', '12:27:03', 340, 1, 660, false),
(100010, '2022-11-26', '21:14:49', 1300, 0, 840, true),
(100011, '2022-12-02', '06:02:36', 500, 3, 750, false),
(100012, '2022-12-08', '14:50:22', 140, 2, 810, false),
(100013, '2022-12-14', '23:38:09', 1110, 1, 480, true),
(100014, '2022-12-20', '08:25:55', 1370, 0, 840, true),
(100015, '2022-12-26', '17:13:42', 710, 7, 660, false),
(100016, '2022-01-01', '02:01:28', 1000, 5, 870, false),
(100001, '2022-01-07', '10:49:15', 1260, 0, 660, false),
(100002, '2022-01-13', '19:37:01', 860, 1, 720, false),
(100003, '2022-01-19', '04:24:48', 1110, 5, 1020, false),
(100004, '2022-01-25', '13:12:34', 280, 2, 250, false),
(100005, '2022-01-31', '22:00:21', 930, 4, 499, false),
(100006, '2022-02-06', '06:48:07', 640, 1, 375, false),
(100007, '2022-02-12', '15:35:54', 180, 0, 180, false),
(100008, '2022-02-18', '00:23:40', 720, 2, 420, false),
(100009, '2022-02-24', '09:11:27', 450, 3, 292, false),
(100010, '2022-03-02', '18:59:13', 890, 1, 436, false),
(100011, '2022-03-08', '03:47:00', 520, 0, 180, false),
(100012, '2022-03-14', '12:34:46', 760, 4, 397, false),
(100013, '2022-03-20', '21:22:33', 390, 2, 278, false),
(100014, '2022-03-27', '06:10:19', 970, 0, 600, true),
(100015, '2022-04-02', '14:58:06', 250, 1, 223, false),
(100016, '2022-04-08', '23:45:52', 690, 3, 343, false);


DROP TABLE IF EXISTS `wallet`;
CREATE TABLE `wallet` (
  `user` INT(11) NOT NULL ,
  `coins` INT(11) NOT NULL,
  PRIMARY KEY (`user`),
  FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into`wallet` values
  (100001, 120),
  (100002, 95),
  (100003, 50),
  (100004, 200),
  (100005, 75),
  (100006, 150),
  (100007, 80),
  (100008, 110),
  (100009, 40),
  (100010, 90),
  (100011, 30),
  (100012, 100),
  (100013, 60),
  (100014, 85),
  (100015, 170),
  (100016, 120);
  
  
DROP TABLE IF EXISTS `skins`;
CREATE TABLE `skins` (
	`user` INT(11) NOT NULL ,
	`pacman` VARCHAR(32) NOT NULL,
  `ghosts` VARCHAR(32) NOT NULL,
	`map` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`user`),
  FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  insert into`skins` values
(100001, 'red', 'classic', 'classic'),
(100002, 'classic', 'red', 'desert'),
(100003, 'green', 'classic', 'Mars'),
(100004, 'classic', 'artic', 'classic'),
(100005, 'red', 'classic', 'grey'),
(100006, 'classic', 'red', 'vintage'),
(100007, 'fucsia', 'classic', 'classic'),
(100008, 'red', 'green', 'grey'),
(100009, 'classic', 'classic', 'Mars'),
(100010, 'classic', 'red', 'classic'),
(100011, 'green', 'classic', 'desert'),
(100012, 'classic', 'artic', 'vintage'),
(100013, 'white', 'classic', 'classic'),
(100014, 'classic', 'red', 'desert'),
(100015, 'white', 'classic', 'daltonic'),
(100016, 'classic', 'artic', 'classic');
