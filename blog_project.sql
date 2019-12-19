-- MySQL dump 10.13  Distrib 5.6.35, for Win32 (AMD64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.6.35

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `idcomments` int(11) NOT NULL AUTO_INCREMENT,
  `idpost` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `comment` varchar(256) NOT NULL,
  PRIMARY KEY (`idcomments`),
  KEY `idpost_idx` (`idpost`),
  KEY `iduser_idx` (`iduser`),
  CONSTRAINT `idpost` FOREIGN KEY (`idpost`) REFERENCES `post` (`idposts`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,49,2,'Hello\n'),(2,49,4,'HI');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `idposts` int(11) NOT NULL AUTO_INCREMENT,
  `idusers` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(256) DEFAULT NULL,
  `ingredients` longtext NOT NULL,
  `recipe` longtext NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idposts`),
  KEY `iduser_idx` (`idusers`),
  CONSTRAINT `iduser-post` FOREIGN KEY (`idusers`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (49,2,'Beef Suya','Beef_Suya.jpg','1 cup salted peanuts , 1 tablespoon paprika , 2 teaspoons onion powder , 2 teaspoons ground ginger , 1 teaspoon crushed red pepper flakes , 1 teaspoon garlic powder , \n1 beef tri-tip roast or beef top sirloin steak (2 pounds) , \n2 tablespoons canola oil , \n1 teaspoon salt , 1 medium onion, cut into wedges , \n1 large tomato, cut into wedges , \nFresh cilantro leaves.','Place peanuts in a food processor; process until finely chopped. Add paprika, onion powder, ginger, pepper flakes and garlic powder; pulse until combined.Place beef in a large bowl or shallow dish. Drizzle with oil; sprinkle with salt. Toss to coat. Add peanut mixture; turn to coat. Refrigerate, covered, for 2 hours. Drain beef, discarding marinade.Thread beef onto metal or soaked wooden skewers. Grill, covered, over medium-high heat until beef reaches desired doneness, 10-15 minutes, turning occasionally. Serve with onion, tomato and cilantro.','2019-12-17 13:08:46'),(50,2,'Cooker Beef Short Ribs with Chutney','Beef_short_ribs.jpg','1 teaspoon olive oil , \n3 bacon strips(chopped) , \n1 pound boneless beef short ribs , \n1/2 teaspoon salt , \n1/4 teaspoon pepper , \n1 pound grape tomatoes ,\n1 medium onion(chopped) , \n3 garlic cloves (minced) , \n2 cups water , \n1 cup Marsala wine or beef broth , \n1/4 cup fig preserves , \n3 tablespoons minced fresh rosemary or 1 tablespoon dried rosemary(crushed). ','Select saute setting on a 6-qt. electric pressure cooker. Adjust for medium heat; add oil. When oil is hot, cook and stir bacon until crisp. Remove with a slotted spoon; drain on paper towels. Sprinkle ribs with salt and pepper. Brown on all sides in drippings. Remove from pressure cooker. Add tomatoes, onion and garlic to drippings; cook and stir until crisp-tender, 3-5 minutes, mashing tomatoes lightly. Stir in water, Marsala, preserves and rosemary. Cook 1 minute, stirring to loosen browned bits from pan. Return ribs and bacon to pressure cooker. Press cancel. Lock lid; close pressure-release valve. Adjust to pressure-cook on high for 35 minutes. Let pressure release naturally. Remove ribs; shred with 2 forks and serve with reserved cooking juices. Slow-cooker option: In a large skillet, heat oil over medium heat; cook and stir bacon until crisp. Remove with a slotted spoon; drain on paper towels. Sprinkle ribs with salt and pepper. Brown on all sides in drippings. Transfer to a 4-qt. slow cooker. In same skillet, add tomatoes, onion and garlic to drippings; cook and stir until crisp-tender, 3-5 minutes, mashing tomatoes lightly. Add tomato mixture to slow cooker; stir in water, Marsala, preserves and rosemary. Cook, covered, on low until ribs are tender, 6-8 hours. Remove ribs; shred with 2 forks and serve with reserved cooking juices.\n','2019-12-17 13:11:13'),(51,2,'Quick and Simple Meatballs','meatballs.jpg','2 large eggs , \n1/4 cup water , \n1 small onion, finely chopped , \n1-1/3 cups soft bread crumbs , \n2/3 cup grated Parmesan cheese , \n2 garlic cloves, minced , \n2 teaspoons Italian seasoning , \n1-1/2 teaspoons salt , \n1/4 teaspoon pepper , \n2 pounds ground beef .','Preheat oven to 375°. In a large bowl, combine eggs, water, onion, bread crumbs, Parmesan cheese, garlic and seasonings; mix well. Crumble beef over mixture and mix well. Shape into 1-1/2-in. balls. Place meatballs on greased racks in shallow baking pans. Bake, uncovered, until no longer pink, 15-18 minutes.\nFreeze option: Freeze cooled meatballs in freezer containers. To use, partially thaw in refrigerator overnight. Heat through in the microwave.\n','2019-12-17 13:12:34'),(52,2,'Easy Slow-Cooker Potato Soup','potato_soup.jpg',' 1 carton (32 ounces) chicken broth , \n1 package (30 ounces) frozen shredded hash brown potatoes , \n1 small onion (finely chopped) , \n2 garlic cloves (minced) , \n1/4 teaspoon pepper , \n1 package (8 ounces) cream cheese , \n1 cup half-and-half cream , \n1 cup shredded cheddar cheese , \nOptional: crumbled cooked bacon and chopped green onions.','In a 4- or 5-qt. slow cooker, combine broth, potatoes, onion, garlic and pepper. Cook, covered, on low until vegetables are tender, 6-8 hours.\nMash potatoes to desired consistency. Whisk in cream cheese until melted. Stir in half-and-half. Cook, covered, until heated through, 5-10 minutes longer. Serve with cheese and, if desired, bacon and green onions.\n','2019-12-17 13:14:07'),(53,2,'Gluten-Free Vanilla Cupcakes','Cuptakes.jpg','2/3 cup butter (softened) , \n1-3/4 cups sugar , \n2 large eggs (room temperature) , \n1-1/2 teaspoons vanilla extract , \n2-1/2 cups gluten-free all-purpose baking flour , \n2-1/2 teaspoons baking powder , \n1/2 teaspoon xanthan gum , \n1/2 teaspoon salt , \n1-1/4 cups 2% milk . \nFROSTING:\n1/2 cup butter (softened)\n1 package (8 ounces) cream cheese (softened) , \n3 cups confectioners\' sugar , \n2 teaspoons vanilla extract , \n1 to 2 tablespoons 2% milk.','Preheat oven to 350°. Line 24 muffin cups with paper liners.\nIn a large bowl, cream butter and sugar until light and fluffy. Add eggs, one at a time, beating well after each addition. Beat in vanilla. In another bowl, whisk flour, baking powder, xanthan gum and salt; add to creamed mixture alternately with milk, beating well after each addition.\nFill prepared cups three-fourths full. Bake 15-20 minutes or until a toothpick inserted in center comes out clean. Cool in pans 10 minutes before removing to wire racks to cool completely.\nFor frosting, in a large bowl, beat butter, cream cheese, confectioners\' sugar and vanilla until smooth. Gradually beat in enough milk to achieve desired consistency. Frost cupcakes. Refrigerate leftovers.','2019-12-17 13:15:59'),(55,3,'Air Fryer Apple Pie Egg Rolls','Apple-Pie-Egg-Rolls.jpg','3 cups chopped peeled tart apples , \n1/2 cup packed light brown sugar , \n2-1/2 teaspoons ground cinnamon (divided) , \n1 teaspoon corn starch , \n8 egg roll wrappers , \n1/2 cup spreadable cream cheese , \nButter-flavored cooking spray , \n1 tablespoon sugar , \n2/3 cup hot caramel ice cream topping.\n','Preheat air fryer to 400°. In a small bowl, combine apples, brown sugar, 2 teaspoons cinnamon and corn starch. With one corner of an egg roll wrapper facing you, spread 1 scant tablespoon cream cheese to within 1 in. of edges. Place 1/3 cup apple mixture just below center of wrapper. (Cover remaining wrappers with a damp paper towel until ready to use.)\nFold bottom corner over filling; moisten remaining wrapper edges with water. Fold side corners toward center over filling. Roll egg roll up tightly, pressing at tip to seal. Repeat.\nIn batches, arrange egg rolls in a single layer in greased air-fryer basket; spritz with cooking spray. Cook until golden brown, 5-6 minutes. Turn; spritz with cooking spray. Cook golden brown and crisp, 5-6 minutes longer. Combine sugar and remaining 1/2 teaspoon cinnamon; roll hot egg rolls in mixture. Serve with caramel sauce.\n','2019-12-17 13:19:56'),(56,3,'Italian Bread Salad with Olives','bread-salad.jpg',' 1 loaf (14 ounces) ciabatta bread cut into 1/2-inch cubes (about 10 cups) , \n3/4 cup olive oil , \n3 garlic cloves (minced) , \n1/4 teaspoon pepper , \n1/4 cup balsamic vinegar , \n1/4 teaspoon salt , \n2 large tomatoes (chopped) , \n1/4 cup sliced olives , \n1/3 cup coarsely chopped fresh basil , \n2 tablespoons chopped fresh Italian parsley , \n1/4 cup shredded Parmesan cheese.','Preheat oven to 350°. Place bread cubes in a large bowl. In another bowl, mix oil, garlic and pepper; drizzle 3 tablespoons over bread and toss to coat. Reserve remaining oil mixture. Spread in a single layer on two 15x10x1-in. baking pans.\nBake 12-18 minutes or until crisp and light brown, stirring occasionally.\nMeanwhile, whisk vinegar and salt into reserved oil mixture. Add tomatoes, olives and herbs; toss to coat.\nCool bread cubes slightly. Add to tomato mixture; toss to combine. Sprinkle with cheese; serve immediately.','2019-12-17 13:20:32'),(57,4,'Cheese Tortellini','tortellini.jpg','1 package (9 ounces) refrigerated cheese tortellini , \n3-1/3 cups fresh or frozen corn (about 16 ounces) , \n2 cups cherry tomatoes (quartered) , \n2 green onions (thinly sliced) , \n1/4 cup minced fresh basil , \n2 tablespoons grated Parmesan cheese , \n4 teaspoons olive oil , \n1/4 teaspoon garlic powder , \n1/8 teaspoon pepper.','In a 6-qt. stockpot, cook tortellini according to package directions, adding corn during the last 5 minutes of cooking. Drain; transfer to a large bowl. Add remaining ingredients; toss to coat.\n','2019-12-17 13:27:10');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(256) NOT NULL,
  `doB` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'lamhoangpham20','$2a$10$BqRMgtZ75Z/uu3oDj1joE./fNGIbF/yG9HiXRa9zi9G/oPI1nmWMa','Hoang Lam','lamhoangpham20@gmail.com','2000-12-25'),(2,'user_test','$2a$10$tGx5Qa/wTnj9UGEazIVl.OQyV6KfZty.Bx3xRU5OCov7eRXKC96rW','Dinh Tai','tainguyen@gmail.com','1977-01-04'),(3,'hungnguvcl','$2a$10$ngC3PmIMSKnnVpZpShSpl.o9P3c9A5qkRRdJiQXLYyYerXoUFyaYK','Hung pham','hungngu@gmail.com','2000-11-16'),(4,'lampham20','$2a$10$4yAJN5Co7XoA7j/O88kTVurHmYpeaW25LinR5TbrpzckEnwc/TuAa','Hoang Lam','lamhoangpham20@gmail.com','2000-12-25'),(5,'dinhtai41','$2a$10$7LBJSmUyM5vAfCLUuYJGPuNU2jcCB5dFIxpt3sNEcRdL2.DfVb1ay','dinhtai41','lamhoangpham20@gmail.com','2019-12-09');
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

-- Dump completed on 2019-12-19 13:48:16
