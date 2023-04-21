-- Progettazione Web 
DROP DATABASE if exists pacman; 
CREATE DATABASE pacman; 
USE pacman; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: arkanoid
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB


DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `hash_psw` varchar(256) NOT NULL,
--   `playerskin` int(11) DEFAULT NULL,
--   `ballskin` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--