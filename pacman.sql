-- Progettazione Web 
DROP DATABASE if exists pacman; 
CREATE DATABASE pacman; 
USE pacman; 
-- MySQL dump 10.13  Distrib 5.6.20, for Win32 (x86)
--
-- Host: localhost    Database: delministro_589203
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `user` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `score` int(11) DEFAULT '0',
  `ghostKilled` int(11) DEFAULT '0',
  `duration` int(11) DEFAULT '0',
  `win` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user`,`date`,`time`),
  CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (100000,'0000-00-00','15:24:18',0,0,0,0),(100001,'2022-01-07','10:49:15',2260,0,263,0),(100001,'2022-03-15','11:23:47',1360,2,288,0),(100001,'2022-05-10','15:24:18',1500,1,373,0),(100001,'2022-05-25','09:08:24',1140,2,286,0),(100001,'2022-07-18','19:18:22',1810,5,231,0),(100001,'2022-09-10','02:28:21',1980,2,408,0),(100001,'2022-10-03','14:04:51',1670,1,169,0),(100002,'2022-01-13','19:37:01',1860,1,226,0),(100002,'2022-04-07','08:45:13',2030,3,160,0),(100002,'2022-05-31','18:56:10',2170,4,301,0),(100002,'2022-07-24','04:06:09',1470,1,239,0),(100002,'2022-09-16','11:16:07',220,1,162,0),(100002,'2022-10-09','22:52:37',1910,9,408,0),(100002,'2022-11-15','07:59:01',1590,4,313,0),(100003,'2022-01-19','04:24:48',2110,5,248,0),(100003,'2022-04-01','19:12:36',190,6,147,0),(100003,'2022-05-19','00:20:37',1740,0,359,0),(100003,'2022-07-12','10:30:36',140,7,185,0),(100003,'2022-08-04','11:15:34',2100,3,354,1),(100003,'2022-09-04','17:40:34',940,0,201,1),(100003,'2022-10-15','07:40:24',2300,0,317,1),(100004,'2022-01-20','10:09:58',2300,1,313,0),(100004,'2022-01-25','13:12:34',1280,2,129,0),(100004,'2022-04-13','16:33:59',2420,4,194,1),(100004,'2022-06-06','05:43:57',2020,0,120,0),(100004,'2022-07-30','12:53:55',2090,0,257,0),(100004,'2022-10-21','16:28:10',1810,7,209,0),(100005,'2022-01-31','22:00:21',1930,4,327,0),(100005,'2022-04-19','03:21:45',1600,0,360,0),(100005,'2022-06-12','14:31:43',1720,3,358,0),(100005,'2022-08-05','21:41:42',840,2,332,0),(100005,'2022-09-19','22:47:42',220,0,60,0),(100005,'2022-10-27','01:15:57',2140,3,406,0),(100006,'2022-02-06','06:48:07',1640,1,203,0),(100006,'2022-04-25','12:09:32',1780,5,356,0),(100006,'2022-06-18','23:19:30',1540,1,262,0),(100006,'2022-08-11','06:29:28',850,1,325,0),(100006,'2022-11-02','10:03:43',1600,0,262,0),(100006,'2022-12-05','18:43:27',1370,2,275,0),(100007,'2022-02-12','15:35:54',1180,0,170,0),(100007,'2022-05-07','06:45:04',1240,0,245,1),(100007,'2022-06-25','08:51:12',1050,0,285,0),(100007,'2022-06-30','16:55:03',1240,9,282,1),(100007,'2022-08-23','00:05:01',340,4,194,0),(100007,'2022-11-08','18:51:30',1980,2,248,0),(100008,'2022-02-18','00:23:40',1720,2,183,0),(100008,'2022-05-01','21:57:18',1610,3,352,0),(100008,'2022-06-24','08:07:16',2110,6,100,0),(100008,'2022-08-17','15:17:15',2180,0,127,1),(100008,'2022-10-31','16:32:09',2410,1,180,1),(100008,'2022-11-14','03:39:16',1480,8,165,0),(100009,'2022-02-24','09:11:27',1450,3,217,0),(100009,'2022-02-28','21:55:04',1140,0,247,1),(100009,'2022-05-13','15:32:51',2000,9,386,0),(100009,'2022-07-06','01:42:49',1920,2,136,0),(100009,'2022-08-29','08:52:48',1120,6,229,0),(100009,'2022-11-20','12:27:03',1340,1,179,0);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skins`
--

DROP TABLE IF EXISTS `skins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skins` (
  `type` varchar(32) NOT NULL,
  `name` varchar(32) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`type`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skins`
--

LOCK TABLES `skins` WRITE;
/*!40000 ALTER TABLE `skins` DISABLE KEYS */;
INSERT INTO `skins` VALUES ('ghosts','blackandwhite',150),('ghosts','classic',0),('ghosts','monocolor',200),('ghosts','space',100),('ghosts','vintage',50),('map','artic',150),('map','blackandwhite',180),('map','classic',0),('map','desert',50),('map','jungle',80),('map','lollipop',200),('map','seaside',100),('pacman','classic',0),('pacman','fucsia',100),('pacman','green',50),('pacman','red',200),('pacman','white',150);
/*!40000 ALTER TABLE `skins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skinsapplied`
--

DROP TABLE IF EXISTS `skinsapplied`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skinsapplied` (
  `user` int(11) NOT NULL,
  `pacman` varchar(32) NOT NULL,
  `ghosts` varchar(32) NOT NULL,
  `map` varchar(32) NOT NULL,
  PRIMARY KEY (`user`),
  CONSTRAINT `skinsapplied_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skinsapplied`
--

LOCK TABLES `skinsapplied` WRITE;
/*!40000 ALTER TABLE `skinsapplied` DISABLE KEYS */;
INSERT INTO `skinsapplied` VALUES (100000,'classic','classic','classic'),(100001,'classic','classic','classic'),(100002,'classic','classic','classic'),(100003,'classic','classic','classic'),(100004,'classic','classic','classic'),(100005,'classic','classic','classic'),(100006,'classic','classic','classic'),(100007,'classic','classic','classic'),(100008,'classic','classic','classic'),(100009,'classic','classic','classic');
/*!40000 ALTER TABLE `skinsapplied` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unlocked`
--

DROP TABLE IF EXISTS `unlocked`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unlocked` (
  `user` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`user`,`type`,`name`),
  CONSTRAINT `unlocked_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unlocked`
--

LOCK TABLES `unlocked` WRITE;
/*!40000 ALTER TABLE `unlocked` DISABLE KEYS */;
INSERT INTO `unlocked` VALUES (100000,'ghosts','classic'),(100000,'map','classic'),(100000,'pacman','classic'),(100001,'ghosts','classic'),(100001,'map','classic'),(100001,'pacman','classic'),(100002,'ghosts','classic'),(100002,'map','classic'),(100002,'pacman','classic'),(100003,'ghosts','classic'),(100003,'map','classic'),(100003,'pacman','classic'),(100004,'ghosts','classic'),(100004,'map','classic'),(100004,'pacman','classic'),(100005,'ghosts','classic'),(100005,'map','classic'),(100005,'pacman','classic'),(100006,'ghosts','classic'),(100006,'map','classic'),(100006,'pacman','classic'),(100007,'ghosts','classic'),(100007,'map','classic'),(100007,'pacman','classic'),(100008,'ghosts','classic'),(100008,'map','classic'),(100008,'pacman','classic'),(100009,'ghosts','classic'),(100009,'map','classic'),(100009,'pacman','classic');
/*!40000 ALTER TABLE `unlocked` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (100000,'pweb','1d5bd9438595df463ccdd4f649c752ff'),(100001,'pow3r','49c10cf00e24348953793880207d241c'),(100002,'jhon','4c25b32a72699ed712dfa80df77fc582'),(100003,'frank','26253c50741faa9c2e2b836773c69fe6'),(100004,'punk12','df08eab798037eb8cd83a1f63dcc7845'),(100005,'luke','46ecbec5ec7951ce102670dbd0b2def5'),(100006,'aaaa1','51b568ea7c7969a881ebf3a6478f8486'),(100007,'cdm','16a81ec4aaab8d96c4398d202af5b527'),(100008,'jules','58e537189c53a9d3969e8795588ea574'),(100009,'kappa125','cbdb5b42be230fc5acaf4274b01be555');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wallet` (
  `user` int(11) NOT NULL,
  `coins` int(11) NOT NULL,
  PRIMARY KEY (`user`),
  CONSTRAINT `wallet_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (100000,1000),(100001,100),(100002,95),(100003,50),(100004,200),(100005,75),(100006,150),(100007,80),(100008,110),(100009,40);
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 15:07:25
