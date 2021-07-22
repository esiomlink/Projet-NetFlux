INSERT INTO `role` (`id`, `name`) VALUES ('1', 'admin');
INSERT INTO `role` (`id`, `name`) VALUES ('2', 'user');

INSERT INTO `category` (`id`, `name`) VALUES ('1', 'humour');
INSERT INTO `category` (`id`, `name`) VALUES ('2', 'action');
INSERT INTO `category` (`id`, `name`) VALUES ('3', 'aventure');
INSERT INTO `category` (`id`, `name`) VALUES ('4', 'horreur');
INSERT INTO `category` (`id`, `name`) VALUES ('5', 'romance');
INSERT INTO `category` (`id`, `name`) VALUES ('6', 'serie');
INSERT INTO `category` (`id`, `name`) VALUES ('7', 'animé');
INSERT INTO `category` (`id`, `name`) VALUES ('8', 'serie netflix');
INSERT INTO `category` (`id`, `name`) VALUES ('9', 'filme netflix');

INSERT INTO `users` (`id`, `psedo`, `hashedPassword`, `firstname`, `lastname`, `email`, `role_id`) VALUES ('1', 'admin', '$argon2id$v=19$m=65536,t=5,p=1$jal/YOoWNGuCKvDcfMVB0g$t13cBPilyB7N067KlUh9unKwIwsC7Pzpb6DPIk9o3fk', 'admin', 'admin', 'admin@netflux.com', '1');
INSERT INTO `users` (`id`, `psedo`, `hashedPassword`, `firstname`, `lastname`, `email`, `role_id`) VALUES ('2', 'user', '$argon2id$v=19$m=65536,t=5,p=1$7GCQsSMXhh7rz1HmAB2AXg$qcegLPhh8GzD7QfbqrjBJV9o7wPc53PRCTSvRiqPOHU', 'user', 'user', 'user@netflux.com', '1');

 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('1', 'DIKKENEK', 'Olivier Van Hoofstadt', '2006', '86', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/87/40/18629488.jpg', '1');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('2', 'HUNTER X HUNTER', 'Yoshiyuki Suga', '1999', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('3', 'INNOCENT', 'Netflix', '2021', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/09/15/28/4453411.jpg', '8');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('4', 'LE HOBBIT : UN VOYAGE INATTENDU', 'Peter Jackson', '2012', '169', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg', '3');

 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('5', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('6', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('7', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('8', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('9', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('10', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('11', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('12', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('13', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('14', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('15', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('16', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('17', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
 INTO `movies`.`movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('18', 'SEVEN DEADLY SINS', 'Shotaro Suga', '2014', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');





INSERT INTO `movies_has_users` (`movies_id`, `users_id`) VALUES ('1', '1');