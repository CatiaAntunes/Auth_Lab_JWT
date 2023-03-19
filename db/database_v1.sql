ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'secret';
flush privileges;
create schema todos;
CREATE TABLE `Todo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(512) NOT NULL,
  `desc` varchar(512) DEFAULT NULL,
  `isComplete` tinyint(1) DEFAULT NULL,
  `remindAtAddress` varchar(512) DEFAULT NULL,
  `remindAtGeo` varchar(512) DEFAULT NULL,
  `tag` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
use todos;
insert into Todo (id, title, `desc`) values 
(1, "Take over the galaxy", "MWAHAHAHAHAHAHAHAHAHAHAHAHAMWAHAHAHAHAHAHAHAHAHAHAHAHA"),
(2, "destroy alderaan", "Make sure there are no survivors left!"),
(3, "play space invaders", "Become the very best!"),
(4, "crush rebel scum", "Every.Last.One.");