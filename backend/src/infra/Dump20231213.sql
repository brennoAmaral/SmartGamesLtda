CREATE DATABASE  IF NOT EXISTS `smartgamesdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `smartgamesdb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: smartgamesdb
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `games`
--
  
DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `idGame` int NOT NULL AUTO_INCREMENT,
  `nameGame` varchar(255) DEFAULT NULL,
  `description` text,
  `linkImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idGame`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Spider-Man','Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.','https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png'),(2,'God Of War','É um novo começo para Kratos. Vivendo como um homem longe da sombra dos deuses, ele se aventura pelas selvagens florestas nórdicas com seu filho Atreus, lutando para cumprir uma missão profundamente pessoal. O Santa Monica Studio e o diretor de criação Cory Barlog lançam um novo começo para um dos personagens mais conhecidos dos jogos. Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal.','https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png'),(3,'Ghost of Tsushima','No final do século XIII, o império mongol devastou nações inteiras durante sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que está entre o Japão continental e uma enorme frota invasora mongol comandada pelo implacável e sagaz general Khotun Khan. À medida que a ilha queima na esteira da primeira onda do assalto mongol, o guerreiro samurai Jin Sakai mantém-se como um dos último membros sobreviventes de seu clã. Ele está decidido a proteger seu povo e recuperar seu lar, independente do que aconteça, custe o que custar. Será preciso romper com as tradições que o tornaram um guerreiro para forjar um novo caminho do Fantasma e declarar uma guerra incomum pela liberdade de Tsushima.','https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Ghost_of_Tsushima_capa.png/270px-Ghost_of_Tsushima_capa.png'),(4,'Tom Clancy\'s Splinter Cell: Double Agent','Vivencie a tensão incessante e os dilemas da vida de um agente duplo. Minta. Mate. Prejudique. Traia. Tudo para proteger os inocentes. Até onde você iria para ganhar a confiança do inimigo? Como o agente secreto Sam Fisher, você deve se infiltrar num grupo terrorista cruel e destruí-lo internamente. Você precisará ponderar muito bem as consequências dos seus atos. Mate terroristas demais e estragará seu disfarce. Hesite e milhões morrerão. Faça o que for preciso para completar a missão, mas procure sobreviver.','https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwb3dccb35/images/large/56c4948a88a7e300458b482c.jpg?sw=341&sh=450&sm=fit'),(5,'God of War III','asdasdasd','https://s3.amazonaws.com/comparegame/thumbnails/41421/large.jpg'),(6,'Watch Dogs 2','Junte-se ao Dedsec, um grupo notório de hackers, para executar o maior hack da história; Derrube o ctOS 2.0, um sistema operacional invasivo que está sendo usado por um gênio do crime para monitorar e manipular os cidadãos em uma escala massiva.','https://s3.amazonaws.com/comparegame/thumbnails/42209/large.jpg'),(7,'Batman arkham city','Batman: Arkham City é um jogo eletrônico de Ação-Aventura e Stealth, baseado na série de quadrinhos Batman da DC Comics. O jogo é distribuído para: PlayStation 3, Xbox 360 e Microsoft Windows. Foi desenvolvido pela Rocksteady Studios e foi publicado pela Warner Bros. Interactive Entertainment e DC Entertainment.','https://upload.wikimedia.org/wikipedia/pt/thumb/f/f0/Batman_arkham_city_logo.jpg/200px-Batman_arkham_city_logo.jpg'),(8,'Overwatch','Overwatch é um jogo de tiro em equipe que conta com um elenco diversificado de heróis poderosíssimos. Viaje pelo mundo, monte uma equipe e dispute objetivos em combates 6v6 de tirar o fôlego.','https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_platforms`
--

DROP TABLE IF EXISTS `games_platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games_platforms` (
  `idGamePlatform` int NOT NULL AUTO_INCREMENT,
  `idGame` int DEFAULT NULL,
  `idPlatform` int DEFAULT NULL,
  PRIMARY KEY (`idGamePlatform`),
  KEY `idGame` (`idGame`),
  KEY `idPlatform` (`idPlatform`),
  CONSTRAINT `games_platforms_ibfk_1` FOREIGN KEY (`idGame`) REFERENCES `games` (`idGame`),
  CONSTRAINT `games_platforms_ibfk_2` FOREIGN KEY (`idPlatform`) REFERENCES `platforms` (`idPlatform`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_platforms`
--

LOCK TABLES `games_platforms` WRITE;
/*!40000 ALTER TABLE `games_platforms` DISABLE KEYS */;
INSERT INTO `games_platforms` VALUES (2,1,3),(3,2,3),(4,3,3),(5,4,1),(6,4,2),(7,4,5),(8,4,8),(9,5,2),(10,5,3),(11,6,3),(12,6,4),(13,6,8),(14,7,8),(15,7,3),(16,7,4),(17,8,4),(18,8,3),(19,8,7),(20,8,8);
/*!40000 ALTER TABLE `games_platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_stores`
--

DROP TABLE IF EXISTS `games_stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games_stores` (
  `idGameStore` int NOT NULL AUTO_INCREMENT,
  `idGame` int NOT NULL,
  `idStore` int NOT NULL,
  `quantity` int NOT NULL,
  `price` bigint NOT NULL,
  PRIMARY KEY (`idGameStore`),
  KEY `idGame` (`idGame`),
  KEY `idStore` (`idStore`),
  CONSTRAINT `games_stores_ibfk_1` FOREIGN KEY (`idGame`) REFERENCES `games` (`idGame`),
  CONSTRAINT `games_stores_ibfk_2` FOREIGN KEY (`idStore`) REFERENCES `stores` (`idStore`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_stores`
--

LOCK TABLES `games_stores` WRITE;
/*!40000 ALTER TABLE `games_stores` DISABLE KEYS */;
INSERT INTO `games_stores` VALUES (1,1,1,17,11690),(2,1,2,6,11690),(3,1,3,3,11690),(4,2,1,5,6990),(5,2,3,7,6990),(6,3,2,8,24990),(7,3,3,0,24990),(8,4,1,10,3690),(9,4,2,10,3690),(10,4,3,7,3690),(11,5,1,10,4990),(12,5,2,10,4990),(13,5,3,8,4990),(14,6,3,10,5990),(15,6,1,10,5990),(16,7,1,10,13100),(17,7,2,10,13100),(18,7,3,9,13100),(19,8,1,10,11700),(20,8,2,10,11700),(21,8,3,8,11700);
/*!40000 ALTER TABLE `games_stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_sells`
--

DROP TABLE IF EXISTS `global_sells`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_sells` (
  `idGlobalSell` int NOT NULL AUTO_INCREMENT,
  `sellCode` varchar(6) NOT NULL,
  `discount` decimal(10,2) DEFAULT '0.00',
  `shipMethod` varchar(255) DEFAULT NULL,
  `totalValue` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idGlobalSell`),
  CONSTRAINT `global_sells_chk_1` CHECK ((`shipMethod` in (_utf8mb4'atHome',_utf8mb4'atStore'))),
  CONSTRAINT `global_sells_chk_2` CHECK ((`totalValue` > 0.00))
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_sells`
--

LOCK TABLES `global_sells` WRITE;
/*!40000 ALTER TABLE `global_sells` DISABLE KEYS */;
INSERT INTO `global_sells` VALUES (1,'m9jtmn',1.00,'atHome',116.00),(2,'bmpkhg',1.00,'atHome',116.00),(3,'hbh66m',1.00,'atHome',116.00),(4,'9rifro',1.00,'atHome',116.00),(5,'lswf55',1.00,'atHome',116.00),(6,'qfzm18',1.00,'atHome',116.00),(7,'ipeuf3',1.00,'atHome',116.00),(8,'v4cv0o',1.00,'atHome',116.00),(9,'4ih9nx',1.00,'atHome',100.00),(10,'oll7ju',0.00,'atHome',116.00),(11,'kyy8rj',0.00,'atHome',116.90),(12,'pzuk5w',0.00,'atHome',116.90),(13,'j80y42',0.00,'atHome',116.90),(14,'3b8fab',0.00,'atHome',116.90),(15,'hnvt8u',0.00,'atHome',116.90),(16,'dlefx3',1000000.00,'atHome',116.90),(17,'i16bqp',1000000.00,'atHome',116.90),(18,'8klpur',0.00,'atHome',11690.00),(19,'l85o03',10000000.00,'atHome',11690.00),(20,'40x15j',10000.00,'atHome',11690.00),(21,'yov80i',1.00,'atHome',116.00),(22,'ltcro9',1.00,'atHome',116.00),(23,'42drjf',1.00,'atHome',116.00),(24,'8yssba',1.00,'atHome',116.00),(25,'y6ekfj',1.00,'atHome',116.00),(26,'bqo9vi',1.00,'atHome',116.00),(27,'7un3oh',1.00,'atHome',116.00),(28,'0r7qcp',1.00,'atHome',116.00),(29,'fxiru3',1.00,'atHome',116.00),(30,'fletmh',1.00,'atHome',116.00),(31,'bjy8u8',0.00,'atStore',11690.00),(32,'wz055i',0.00,'atStore',11690.00),(33,'yi2z6i',0.00,'atStore',11690.00),(34,'1s37n4',0.00,'atStore',11690.00),(35,'t16r0i',0.00,'atStore',24990.00),(36,'ydhl4s',0.00,'atStore',24990.00),(37,'pxr5rt',0.00,'atStore',24990.00),(38,'bfz5y9',0.00,'atStore',24990.00),(39,'j9o36w',0.00,'atStore',24990.00),(40,'fz0alv',0.00,'atStore',24990.00),(41,'iqdj9v',0.00,'atStore',24990.00),(42,'3o8a47',0.00,'atStore',24990.00),(43,'az5tjx',0.00,'atStore',11690.00),(44,'vpyhrj',0.00,'atStore',11690.00),(45,'em7bjq',0.00,'atStore',11690.00),(46,'tq41vq',0.00,'atStore',6990.00),(47,'8lg40q',0.00,'atStore',11690.00),(48,'hes7xq',0.00,'atStore',11690.00),(49,'f4lx4p',0.00,'atStore',24990.00),(50,'1pxkgv',0.00,'atStore',24990.00),(51,'9gxdql',0.00,'atStore',6990.00),(52,'xaue8n',0.00,'atStore',11690.00),(53,'4sdgad',0.00,'atStore',6990.00),(54,'xpf18d',1.00,'atHome',24990.00),(55,'2mo41g',0.00,'atStore',11690.00),(56,'pvwuld',0.00,'atStore',6990.00),(57,'y9wsgm',0.00,'atStore',24990.00);
/*!40000 ALTER TABLE `global_sells` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `globalsells_sellsstores`
--

DROP TABLE IF EXISTS `globalsells_sellsstores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `globalsells_sellsstores` (
  `idGlobalSells_SellsStores` int NOT NULL AUTO_INCREMENT,
  `idGlobalSell` int NOT NULL,
  `idSellStore` int NOT NULL,
  PRIMARY KEY (`idGlobalSells_SellsStores`),
  KEY `idGlobalSell` (`idGlobalSell`),
  KEY `idSellStore` (`idSellStore`),
  CONSTRAINT `globalsells_sellsstores_ibfk_1` FOREIGN KEY (`idGlobalSell`) REFERENCES `global_sells` (`idGlobalSell`),
  CONSTRAINT `globalsells_sellsstores_ibfk_2` FOREIGN KEY (`idSellStore`) REFERENCES `sells_stores` (`idSellStore`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `globalsells_sellsstores`
--

LOCK TABLES `globalsells_sellsstores` WRITE;
/*!40000 ALTER TABLE `globalsells_sellsstores` DISABLE KEYS */;
INSERT INTO `globalsells_sellsstores` VALUES (1,15,50),(2,16,51),(3,17,52),(4,18,53),(5,19,54),(6,20,55),(7,21,56),(8,22,57),(9,23,58),(10,24,59),(11,25,60),(12,26,61),(13,27,62),(14,28,63),(15,29,64),(16,30,65),(17,31,66),(18,32,67),(19,33,68),(20,34,69),(21,35,70),(22,36,71),(23,37,72),(24,38,73),(25,39,74),(26,40,75),(27,41,76),(28,42,79),(29,43,80),(30,44,81),(31,45,82),(32,46,83),(33,47,86),(34,48,87),(35,49,90),(36,50,91),(37,51,92),(38,52,93),(39,53,94),(40,54,95),(41,55,96),(42,56,98),(43,57,99);
/*!40000 ALTER TABLE `globalsells_sellsstores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platforms` (
  `idPlatform` int NOT NULL AUTO_INCREMENT,
  `namePlatform` varchar(255) DEFAULT NULL,
  `manufacturer` varchar(255) NOT NULL,
  PRIMARY KEY (`idPlatform`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (1,'PS2','Sony'),(2,'PS3','Sony'),(3,'PS4','Sony'),(4,'XboxOne','Microsoft'),(5,'Xbox','Microsoft'),(6,'WIIU','Nintendo'),(7,'Switch','Nintendo'),(8,'PC','');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sells_stores`
--

DROP TABLE IF EXISTS `sells_stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sells_stores` (
  `idSellStore` int NOT NULL AUTO_INCREMENT,
  `quantitySellStore` int NOT NULL,
  `priceSellStore` decimal(10,2) NOT NULL,
  `idGame` int NOT NULL,
  `idStore` int NOT NULL,
  PRIMARY KEY (`idSellStore`),
  KEY `idGame` (`idGame`),
  KEY `idStore` (`idStore`),
  CONSTRAINT `sells_stores_ibfk_1` FOREIGN KEY (`idGame`) REFERENCES `games` (`idGame`),
  CONSTRAINT `sells_stores_ibfk_2` FOREIGN KEY (`idStore`) REFERENCES `stores` (`idStore`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sells_stores`
--

LOCK TABLES `sells_stores` WRITE;
/*!40000 ALTER TABLE `sells_stores` DISABLE KEYS */;
INSERT INTO `sells_stores` VALUES (3,1,116.90,1,1),(4,1,116.90,1,1),(5,1,116.90,1,1),(6,1,116.90,1,1),(7,1,116.90,1,1),(8,1,116.90,1,1),(9,1,116.90,1,1),(10,1,116.90,1,1),(11,5,116.90,1,1),(12,5,116.90,1,1),(13,1,116.90,1,1),(14,1,116.90,1,1),(15,1,116.90,1,1),(16,1,116.00,1,1),(17,1,116.00,1,1),(18,1,116.00,1,1),(19,1,116.00,1,1),(20,1,116.00,1,1),(21,1,116.00,1,1),(22,1,116.00,1,1),(23,1,116.00,1,1),(24,1,116.00,1,1),(25,1,116.00,1,1),(26,1,116.00,1,1),(27,1,116.00,1,1),(28,1,100.00,1,1),(29,1,100.00,1,1),(30,1,100.00,1,1),(31,1,100.00,1,1),(32,1,100.00,1,1),(33,1,100.00,1,1),(34,1,100.00,1,1),(35,1,100.00,1,1),(36,1,100.00,1,1),(37,1,100.00,1,1),(38,1,100.00,1,1),(39,1,100.00,1,1),(40,1,100.00,1,1),(41,1,100.00,1,1),(42,1,100.00,1,1),(43,1,100.00,1,1),(44,1,100.00,1,1),(45,1,116.00,1,1),(46,1,116.90,1,1),(47,1,116.90,1,1),(48,1,116.90,1,1),(49,1,116.90,1,1),(50,1,116.90,1,1),(51,1,116.90,1,1),(52,1,116.90,1,1),(53,1,11690.00,1,1),(54,1,11690.00,1,1),(55,1,11690.00,1,1),(56,1,116.00,1,1),(57,1,116.00,1,1),(58,1,116.00,1,1),(59,1,116.00,1,1),(60,1,116.00,1,1),(61,1,116.00,1,1),(62,1,116.00,1,1),(63,1,116.00,1,1),(64,1,116.00,1,1),(65,1,116.00,1,1),(66,1,11690.00,2,1),(67,1,11690.00,2,1),(68,1,11690.00,2,1),(69,1,11690.00,2,1),(70,1,24990.00,2,3),(71,1,24990.00,3,3),(72,1,24990.00,3,3),(73,1,24990.00,3,3),(74,1,24990.00,3,3),(75,1,24990.00,3,3),(76,1,24990.00,3,3),(79,1,24990.00,3,3),(80,1,11690.00,3,1),(81,1,11690.00,3,1),(82,1,11690.00,3,1),(83,1,6990.00,3,2),(86,1,11690.00,3,1),(87,1,11690.00,3,1),(90,1,24990.00,3,3),(91,1,24990.00,3,3),(92,1,6990.00,3,2),(93,1,11690.00,3,1),(94,1,6990.00,3,2),(95,1,24990.00,2,3),(96,1,11690.00,3,1),(98,1,6990.00,1,2),(99,1,24990.00,3,3);
/*!40000 ALTER TABLE `sells_stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `idStore` int NOT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `linkMap` varchar(500) DEFAULT NULL,
  `nameStore` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idStore`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (1,'Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862263!2d-46.83692552467153!3d-23.504358278839028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1702222948150!5m2!1spt-BR!2sbr','Smart Games Tamboré'),(2,'Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.18942091972!2d-46.91675133927902!3d-23.50417424281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1702227142159!5m2!1spt-BR!2sbr','Smart Games Iguatemi'),(3,'Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7510909563857!2d-46.77127671360218!3d-23.541453306218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1702227305630!5m2!1spt-BR!2sbr','Smart Games União');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-13 11:11:26
