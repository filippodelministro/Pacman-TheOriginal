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
  (100001, 'pweb', md5('test')),
  (100002, 'filippo', md5('filippo')),
  (100003, 'francesco', md5('francesco')),
  (100004, 'franco', md5('franco')),
  (100005, 'gabriele', md5('gabriele')),
  (100006, 'gianfranco', md5('gianfranco')),
  (100007, 'gingi', md5('gingi')),
  (100008, 'giulio', md5('giulio')),
  (100009, 'luca', md5('luca'));