CREATE DATABASE  IF NOT EXISTS `onetoone_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `onetoone_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: onetoone_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'REMERAS','2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'PANTALONES','2024-03-23 23:08:30','2024-03-23 23:08:30'),(3,'ABRIGOS','2024-03-23 23:08:30','2024-03-23 23:08:30'),(4,'ACCESORIOS','2024-03-23 23:08:30','2024-03-23 23:08:30'),(5,'CAMISAS','2024-03-23 23:08:30','2024-03-23 23:08:30');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'rojo','2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'celeste','2024-03-23 23:08:30','2024-03-23 23:08:30'),(3,'blanco','2024-03-23 23:08:30','2024-03-23 23:08:30'),(4,'negro','2024-03-23 23:08:30','2024-03-23 23:08:30'),(5,'azul','2024-03-23 23:08:30','2024-03-23 23:08:30'),(6,'gris','2024-03-23 23:08:30','2024-03-23 23:08:30'),(7,'amarillo','2024-03-23 23:08:30','2024-03-23 23:08:30'),(8,'verde','2024-03-23 23:08:30','2024-03-23 23:08:30'),(9,'violeta','2024-03-23 23:08:30','2024-03-23 23:08:30'),(10,'marron','2024-03-23 23:08:30','2024-03-23 23:08:30');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `productsId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'pantalon1-b.jpg',1,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'pantalon1-c.jpg',1,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(3,'pantalon1-d.jpg',1,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(7,'pantalon3-A.jpg',3,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(8,'pantalon3-C.jpg',3,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(10,'remera4-A.jpg',4,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(11,'remera4-B.jpg',4,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(12,'remera4-C.jpg',4,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(13,'remera5-A.jpg',5,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(14,'remera5-B.jpg',5,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(15,'remera5-C.jpg',5,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(19,'remera7-A.jpg',7,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(20,'remera7-B.jpg',7,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(21,'remera7-C.jpg',7,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(22,'remera8-A.jpg',8,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(23,'remera8-B.jpg',8,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(24,'remera8-C.jpg',8,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(25,'campera9-A.jpg',9,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(26,'campera9-B.jpg',9,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(27,'campera9-C.jpg',9,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(28,'Buzo10-A.jpg',10,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(29,'Buzo10-B.jpg',10,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(30,'Buzo10-C.jpg',10,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(31,'Buzo11-A.jpg',11,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(32,'Buzo11-B.jpg',11,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(33,'Buzo11-C.jpg',11,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(34,'camisa12-B.jpg',12,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(35,'camisa12-C.jpg',12,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(36,'camisa12-D.jpg',12,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(37,'camisa13-A.jpg',13,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(38,'camisa13-B.jpg',13,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(39,'camisa13-C.jpg',13,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(40,'camisa14-B.jpg',14,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(41,'camisa14-C.jpg',14,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(42,'camisa14-D.jpg',14,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(43,'GORRA2.jpg',15,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(44,'GORRA3.jpg',15,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(45,'GORRA4.jpg',15,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(46,'CINTO1.JPG',16,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(47,'CINTO2.JPG',16,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(48,'CINTO3.JPG',16,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(49,'pañoleta1.jpg',17,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(50,'pañoleta2.jpg',17,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(51,'pañoleta3.jpg',17,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(52,'pantalon18-A.jpg',18,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(53,'pantalon18-B.jpg',18,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(54,'pantalon18-C.jpg',18,'2024-03-23 23:08:30','2024-03-23 23:08:30'),(67,'1712799316003_products.jpeg',26,'2024-04-11 01:35:16','2024-04-11 01:35:16'),(68,'1712799316003_products.jpg',26,'2024-04-11 01:35:16','2024-04-11 01:35:16'),(69,'1712799316008_products.jpg',26,'2024-04-11 01:35:16','2024-04-11 01:35:16'),(70,'1712835810227_products.jpg',2,'2024-04-11 11:43:30','2024-04-11 11:43:30'),(71,'1712835815160_products.jpg',2,'2024-04-11 11:43:35','2024-04-11 11:43:35'),(72,'1712835824306_products.jpg',2,'2024-04-11 11:43:44','2024-04-11 11:43:44'),(73,'1712835859731_products.jpg',3,'2024-04-11 11:44:19','2024-04-11 11:44:19'),(74,'1712836013739_products.jpg',6,'2024-04-11 11:46:53','2024-04-11 11:46:53'),(75,'1712836030772_products.jpg',6,'2024-04-11 11:47:10','2024-04-11 11:47:10'),(76,'1712836037251_products.jpg',6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(77,'1712839671080_products.jpg',27,'2024-04-11 12:47:51','2024-04-11 12:47:51'),(78,'1712839671083_products.jpg',27,'2024-04-11 12:47:51','2024-04-11 12:47:51'),(79,'1712839671084_products.jpg',27,'2024-04-11 12:47:51','2024-04-11 12:47:51');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int DEFAULT NULL,
  `productsId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usersId` int DEFAULT NULL,
  `dateOrder` datetime DEFAULT NULL,
  `total` int DEFAULT NULL,
  `statusId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `price` int DEFAULT NULL,
  `descount` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `colorsId` int DEFAULT NULL,
  `sizesId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `setionId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'JEAN THOMI','\"\"Pantalón JEAN THOMI\"\"',25000,15,'pantalon1-a.jpg',5,3,2,2,'2024-03-23 23:08:30','2024-04-11 11:42:32'),(2,'REMERA CLASS','\"Remera color Blanca de algodon, estampado de frente y espalda, apto para lavadoras con agua fria y sin centrifugar\"',15999,15,'1712605726934_products.jpg',0,3,1,1,'2024-03-23 23:08:30','2024-04-11 11:43:45'),(3,'JEAN FLOKI','\"Pantalon Jean Floki  con roturas\"',26,15,'1711235522691_products.jpg',0,4,2,2,'2024-03-23 23:08:30','2024-04-11 11:44:20'),(4,'REMERA TIME','Remera color Marron de algodon, estampado de frente y espalda, apto para lavadoras con agua fria y sin centrifugar',17500,15,'1711235565959_products.jpg',0,2,1,1,'2024-03-23 23:08:30','2024-04-11 11:45:02'),(5,'REMERA BOMB','Remera color gris de algodon, estampado de frente y espalda lisa, apto para lavadoras con agua fria y sin centrifugar',19000,15,'1711235599143_products.jpg',0,2,1,1,'2024-03-23 23:08:30','2024-04-11 11:45:17'),(6,'REMERA ORDING','Remera color Blanca de algodon, estampado de frente y espalda, apto para lavadoras con agua fria y sin centrifugar',16900,15,'1711235615984_products.jpg',0,2,1,1,'2024-03-23 23:08:30','2024-04-11 11:47:17'),(7,'REMERA BUTTER','Remera color negra de algodon, estampado de espalda y frente lisa,  apto para lavadoras con agua fria y sin centrifugar',17300,15,'1711235644616_products.jpg',0,2,1,1,'2024-03-23 23:08:30','2024-04-11 11:50:11'),(8,'REMERA ROSS','Remera color rosado de algodon, estampado de frente y espalda, apto para lavadoras con agua fria y sin centrifugar',18800,0,'1711235656376_products.jpg',0,3,1,1,'2024-03-23 23:08:30','2024-04-11 11:49:49'),(9,'CAMPERA','Campera gris, rompe viento calidad 100% garantizada',37900,0,'1711235674335_products.jpg',6,3,3,3,'2024-03-23 23:08:30','2024-04-11 11:49:34'),(10,'BUZZO FLOWERS','Buzzo color gris con estampado de flores, no apto para lavadoras',9999,15,'1711235684583_products.jpg',0,2,3,3,'2024-03-23 23:08:30','2024-04-11 11:51:01'),(11,'BUZO BASSIC','Buzo color negro basico con cierre, tela 100% algodon, apto para lavadora con agua fria y sin centrifugar',22500,0,'1711235693750_products.jpg',0,2,3,3,'2024-03-23 23:08:30','2024-04-11 11:49:23'),(12,'Camisa Summer','Camisa corta color celeste con pequeño estampado en la pate de al frente, apta para lavadora con agua fria',13000,15,'1711235724654_products.jpg',2,2,5,5,'2024-03-23 23:08:30','2024-04-11 11:50:31'),(13,'CAMISA RAYAS','Camisa color blanco con rayas celestes, excelente para el verano y apta para el lavado',20600,0,'1711235750975_products.jpg',0,2,5,5,'2024-03-23 23:08:30','2024-04-11 11:49:09'),(14,'CAMISA PALM','Camisa con estampado de palmeras excelente para la primavera/verano, apta para lavarropas',15900,15,'1711235771694_products.jpg',0,2,5,5,'2024-03-23 23:08:30','2024-04-11 11:50:38'),(15,'Gorra Blacky','Gorra negra con stikers',15800,15,'1711235782838_products.jpg',0,3,4,4,'2024-03-23 23:08:30','2024-04-11 11:50:45'),(16,'Cinto De Cuero','Cinturon 100%  de cuero',11999,15,'1711235797242_products.jpg',0,2,4,4,'2024-03-23 23:08:30','2024-04-11 11:48:14'),(17,'PAÑOLETA','Pañoleta varios usos color lila',7999,0,'1711235810766_products.jpg',0,3,4,4,'2024-03-23 23:08:30','2024-04-11 11:47:58'),(18,'PANTALON CARG','Pantalon estilo cargo, de tela jeans con recortes',17800,0,'1711235819726_products.jpg',0,5,2,2,'2024-03-23 23:08:30','2024-04-11 11:47:40'),(26,'PANTALON','pantalon',10000,0,'1712799316001_products.jpg',NULL,NULL,2,NULL,'2024-04-11 01:35:16','2024-04-11 12:47:07'),(27,'CAMPERA','campera',10000,15,'1712839671078_products.jpg',NULL,NULL,3,NULL,'2024-04-11 12:47:51','2024-04-11 12:47:51');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `colorsId` int DEFAULT NULL,
  `productsId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
INSERT INTO `products_colors` VALUES (5,3,24,'2024-04-07 03:36:24','2024-04-07 03:36:24'),(25,7,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(26,5,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(27,3,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(28,2,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(29,6,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(30,10,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(31,4,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(32,1,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(33,8,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(34,9,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(35,10,23,'2024-04-10 23:37:28','2024-04-10 23:37:28'),(36,4,23,'2024-04-10 23:37:28','2024-04-10 23:37:28'),(41,5,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(42,3,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(43,2,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(44,10,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(45,1,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(46,3,2,'2024-04-11 11:43:45','2024-04-11 11:43:45'),(47,2,2,'2024-04-11 11:43:45','2024-04-11 11:43:45'),(48,6,2,'2024-04-11 11:43:45','2024-04-11 11:43:45'),(49,7,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(50,5,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(51,3,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(52,2,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(53,7,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(54,5,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(55,3,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(56,5,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(57,3,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(58,2,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(59,3,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(60,2,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(61,6,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(62,2,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(63,10,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(64,4,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(65,5,17,'2024-04-11 11:47:58','2024-04-11 11:47:58'),(66,3,17,'2024-04-11 11:47:58','2024-04-11 11:47:58'),(67,1,17,'2024-04-11 11:47:58','2024-04-11 11:47:58'),(68,5,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(69,3,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(70,2,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(76,3,13,'2024-04-11 11:49:09','2024-04-11 11:49:09'),(77,2,13,'2024-04-11 11:49:09','2024-04-11 11:49:09'),(78,4,11,'2024-04-11 11:49:23','2024-04-11 11:49:23'),(79,6,9,'2024-04-11 11:49:34','2024-04-11 11:49:34'),(80,9,8,'2024-04-11 11:49:49','2024-04-11 11:49:49'),(81,4,7,'2024-04-11 11:50:11','2024-04-11 11:50:11'),(82,5,12,'2024-04-11 11:50:31','2024-04-11 11:50:31'),(83,2,12,'2024-04-11 11:50:31','2024-04-11 11:50:31'),(84,5,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(85,3,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(86,4,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(87,3,15,'2024-04-11 11:50:45','2024-04-11 11:50:45'),(88,4,15,'2024-04-11 11:50:45','2024-04-11 11:50:45'),(89,4,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(90,7,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(91,5,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(92,3,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(93,6,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(94,4,27,'2024-04-11 12:47:51','2024-04-11 12:47:51');
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sizes`
--

DROP TABLE IF EXISTS `products_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sizesId` int DEFAULT NULL,
  `productsId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sizes`
--

LOCK TABLES `products_sizes` WRITE;
/*!40000 ALTER TABLE `products_sizes` DISABLE KEYS */;
INSERT INTO `products_sizes` VALUES (5,5,24,'2024-04-07 03:36:24','2024-04-07 03:36:24'),(22,4,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(23,3,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(24,2,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(25,5,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(26,1,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(27,6,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(28,7,25,'2024-04-09 12:30:15','2024-04-09 12:30:15'),(29,5,23,'2024-04-10 23:37:28','2024-04-10 23:37:28'),(30,6,23,'2024-04-10 23:37:28','2024-04-10 23:37:28'),(31,7,23,'2024-04-10 23:37:28','2024-04-10 23:37:28'),(35,2,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(36,5,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(37,1,1,'2024-04-11 11:42:32','2024-04-11 11:42:32'),(38,2,2,'2024-04-11 11:43:45','2024-04-11 11:43:45'),(39,6,2,'2024-04-11 11:43:45','2024-04-11 11:43:45'),(40,4,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(41,3,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(42,5,3,'2024-04-11 11:44:20','2024-04-11 11:44:20'),(43,4,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(44,3,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(45,2,4,'2024-04-11 11:45:02','2024-04-11 11:45:02'),(46,3,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(47,2,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(48,5,5,'2024-04-11 11:45:17','2024-04-11 11:45:17'),(49,3,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(50,2,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(51,5,6,'2024-04-11 11:47:17','2024-04-11 11:47:17'),(52,3,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(53,2,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(54,5,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(55,7,18,'2024-04-11 11:47:40','2024-04-11 11:47:40'),(56,3,17,'2024-04-11 11:47:58','2024-04-11 11:47:58'),(57,2,17,'2024-04-11 11:47:58','2024-04-11 11:47:58'),(58,4,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(59,3,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(60,2,16,'2024-04-11 11:48:14','2024-04-11 11:48:14'),(68,4,13,'2024-04-11 11:49:09','2024-04-11 11:49:09'),(69,3,13,'2024-04-11 11:49:09','2024-04-11 11:49:09'),(70,2,13,'2024-04-11 11:49:09','2024-04-11 11:49:09'),(71,4,11,'2024-04-11 11:49:23','2024-04-11 11:49:23'),(72,3,11,'2024-04-11 11:49:23','2024-04-11 11:49:23'),(73,2,11,'2024-04-11 11:49:23','2024-04-11 11:49:23'),(74,4,9,'2024-04-11 11:49:34','2024-04-11 11:49:34'),(75,3,9,'2024-04-11 11:49:34','2024-04-11 11:49:34'),(76,2,9,'2024-04-11 11:49:34','2024-04-11 11:49:34'),(77,4,8,'2024-04-11 11:49:49','2024-04-11 11:49:49'),(78,3,8,'2024-04-11 11:49:49','2024-04-11 11:49:49'),(79,2,8,'2024-04-11 11:49:49','2024-04-11 11:49:49'),(80,4,7,'2024-04-11 11:50:11','2024-04-11 11:50:11'),(81,3,7,'2024-04-11 11:50:11','2024-04-11 11:50:11'),(82,2,7,'2024-04-11 11:50:11','2024-04-11 11:50:11'),(83,5,7,'2024-04-11 11:50:11','2024-04-11 11:50:11'),(84,4,12,'2024-04-11 11:50:31','2024-04-11 11:50:31'),(85,3,12,'2024-04-11 11:50:31','2024-04-11 11:50:31'),(86,2,12,'2024-04-11 11:50:31','2024-04-11 11:50:31'),(87,4,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(88,3,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(89,2,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(90,5,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(91,1,14,'2024-04-11 11:50:38','2024-04-11 11:50:38'),(92,4,15,'2024-04-11 11:50:45','2024-04-11 11:50:45'),(93,3,15,'2024-04-11 11:50:45','2024-04-11 11:50:45'),(94,4,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(95,3,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(96,2,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(97,5,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(98,1,10,'2024-04-11 11:51:01','2024-04-11 11:51:01'),(99,4,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(100,3,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(101,2,26,'2024-04-11 12:47:08','2024-04-11 12:47:08'),(102,4,27,'2024-04-11 12:47:51','2024-04-11 12:47:51'),(103,3,27,'2024-04-11 12:47:51','2024-04-11 12:47:51'),(104,2,27,'2024-04-11 12:47:51','2024-04-11 12:47:51');
/*!40000 ALTER TABLE `products_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'user','2024-03-23 23:08:30','2024-03-23 23:08:30');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'REMERAS','2024-03-23 23:08:29','2024-03-23 23:08:29'),(2,'pantalones','2024-03-23 23:08:29','2024-03-23 23:08:29'),(3,'ABRIGOS','2024-03-23 23:08:29','2024-03-23 23:08:29'),(4,'ACCESORIOS','2024-03-23 23:08:29','2024-03-23 23:08:29'),(5,'CAMISAS','2024-03-23 23:08:29','2024-03-23 23:08:29');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240221021104-create-sections.js'),('20240221021458-create-category.js'),('20240221021541-create-colors.js'),('20240221021624-create-sizes.js'),('20240221021750-create-roles.js'),('20240221022221-create-statuses.js'),('20240221024031-create-products.js'),('20240221024315-create-users.js'),('20240221024942-create-images.js'),('20240221025927-create-orders.js'),('20240221030444-create-items.js'),('20240221030644-create-products-colors.js'),('20240221030739-create-products-sizes.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'XS','2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'S','2024-03-23 23:08:30','2024-03-23 23:08:30'),(3,'M','2024-03-23 23:08:30','2024-03-23 23:08:30'),(4,'L','2024-03-23 23:08:30','2024-03-23 23:08:30'),(5,'XL','2024-03-23 23:08:30','2024-03-23 23:08:30'),(6,'XXL','2024-03-23 23:08:30','2024-03-23 23:08:30'),(7,'XXXL','2024-03-23 23:08:30','2024-03-23 23:08:30');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'Pendiente','2024-03-23 23:08:30','2024-03-23 23:08:30'),(2,'Aprobado','2024-03-23 23:08:30','2024-03-23 23:08:30'),(3,'Rechazado','2024-03-23 23:08:30','2024-03-23 23:08:30'),(4,'Anulado','2024-03-23 23:08:30','2024-03-23 23:08:30');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Nahuel','Mendez','jesus_dsm@hotmail.com.ar','$2a$10$WqWPWkr731dLjZjDowW5y.sLF4n/PVoZs/KmnD/luvSkWAakqnWWy',1,'2024-03-23 23:08:30','2024-04-10 21:05:14'),(5,'nahuel','lolo','nahuel@gmail.com','$2a$10$Y0Jgm/IVpB44H1QQUHpNN./qY4T67378iMGF.liJ8C4UMF7VVZ7L2',1,'2024-03-23 23:08:30','2024-04-10 23:59:31'),(6,'Luca','oribe1','lucaoribe01@gmail.com','$2a$10$5dgd572xbcPLzKWc6Cjd2eQ0mpW.hRzoGTmULRoKZGFHnxCagD112',2,'2024-03-23 23:08:30','2024-04-11 00:00:06'),(8,'gise','oribe','lucaoribe02@gmail.com','$2a$10$1Ke5Wyn2MAzy4aPaYf/APeWN.EFzoKL.4ATFjPM9VEXll.YLio6cG',1,'2024-04-09 23:37:05','2024-04-10 23:59:40'),(11,'messi','messi','buchito@gmail.com','$2a$10$bYsAbsUrgj7Qn6yYUDvzk.KSShegdhRHsq1nWU1PwYZF7XJLraSYa',2,'2024-04-10 00:39:16','2024-04-10 02:31:17'),(15,'gise','oribe','pantalon@gmail.com','$2a$10$WfD0DHywF4DX2vJsI3Z0f.cSv0B/5kimX2BCB.3oXoOzTixZwZvLK',2,'2024-04-10 14:08:38','2024-04-10 14:34:37'),(16,'lolo','oribe','jesusdsm17@gmail.com','$2a$05$TrFbg1dbdn4o/Kg9qgey6uMzK7xZGGgAPGbNQusyaZl42F0VejuBe',1,'2024-04-10 19:27:14','2024-04-10 19:27:14'),(18,'VICTORIA','oribe4','Digital@gmail.com','$2a$10$4xd/DtGIVVmXyjQ/fFuJCe.pNYapu5HLV1rPQGDMspjQo33snB9Yi',2,'2024-04-11 12:44:53','2024-04-11 19:59:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-11 18:40:27
