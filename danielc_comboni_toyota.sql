-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: ciu_one
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

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
-- Table structure for table `customer_info`
--

DROP TABLE IF EXISTS `customer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cust_id` varchar(50) NOT NULL,
  `name` varchar(70) NOT NULL,
  `state` varchar(5) NOT NULL,
  `is_retail` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_info`
--

LOCK TABLES `customer_info` WRITE;
/*!40000 ALTER TABLE `customer_info` DISABLE KEYS */;
INSERT INTO `customer_info` VALUES (36,'12','','kla',1),(37,'123-45-6789','Daniel Comboni','kla',1),(38,'123-45-6789','Daniel Comboni','kla',1),(39,'123-45-6789','Daniel Comboni','kla',1),(40,'123-45-6789','Daniel Comboni','kla',1),(41,'123-45-6789','Daniel Comboni','kla',1),(42,'123-45-6789','Daniel Comboni','kla',1),(43,'123-45-6789','Daniel Comboni','kla',0);
/*!40000 ALTER TABLE `customer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('comboni','12345'),('odong','12'),('nyeko','13');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `part_ordered`
--

DROP TABLE IF EXISTS `part_ordered`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `part_ordered` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_number` varchar(20) DEFAULT NULL,
  `description` text,
  `price_per_part` decimal(15,5) NOT NULL,
  `quantity` decimal(15,5) NOT NULL,
  `is_oversize` tinyint(4) NOT NULL DEFAULT '0',
  `customer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `part_ordered_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `part_ordered`
--

LOCK TABLES `part_ordered` WRITE;
/*!40000 ALTER TABLE `part_ordered` DISABLE KEYS */;
INSERT INTO `part_ordered` VALUES (8,'1235','a small description',7.51000,2.00000,0,37),(9,'1235','a small description',7.51000,2.00000,0,38),(10,'1235','a small description',7.51000,2.00000,0,39),(11,'1235','a small description',7.51000,3.00000,0,40),(12,'1235','a small description',7.51000,3.00000,0,41),(13,'1235','a small description',8.00000,5.00000,0,42),(14,'1235','a small description',9.00000,5.00000,0,43);
/*!40000 ALTER TABLE `part_ordered` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registration` (
  `id` varchar(12) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `address` varchar(35) DEFAULT NULL,
  `country` varchar(25) DEFAULT NULL,
  `zip` int(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `gender` varchar(8) DEFAULT NULL,
  `language` varchar(35) DEFAULT NULL,
  `about` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES ('1','2','3','4','Colombia',5,'test@test.com','Male','english','the desc'),('4','5','6','7','Mexico',8,'test@test.com','Male','english','          '),('1','a87ff679a2f3e71d9181a67b7542122c','5','6','Colombia',5,'test@test.com','Male','english','the');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping`
--

DROP TABLE IF EXISTS `shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shipping_method` varchar(100) NOT NULL,
  `shipping_charge` decimal(15,5) NOT NULL,
  `part_ordered_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shipping_ibfk_1` (`part_ordered_id`),
  CONSTRAINT `shipping_ibfk_1` FOREIGN KEY (`part_ordered_id`) REFERENCES `part_ordered` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping`
--

LOCK TABLES `shipping` WRITE;
/*!40000 ALTER TABLE `shipping` DISABLE KEYS */;
INSERT INTO `shipping` VALUES (3,'ups',7.00000,8),(4,'ups',7.00000,9),(5,'ups',7.00000,10),(6,'ups',7.00000,11),(7,'ups',7.00000,12),(8,'ups',7.00000,13),(9,'ups',7.00000,14);
/*!40000 ALTER TABLE `shipping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-10 13:52:35
