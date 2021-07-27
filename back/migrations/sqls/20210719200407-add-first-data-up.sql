INSERT INTO `role` (`id`, `name`) VALUES ('1', 'admin');
INSERT INTO `role` (`id`, `name`) VALUES ('2', 'user');

INSERT INTO `category` (`id`, `name`) VALUES ('1', 'Comedie');
INSERT INTO `category` (`id`, `name`) VALUES ('2', 'Action');
INSERT INTO `category` (`id`, `name`) VALUES ('3', 'Aventure');
INSERT INTO `category` (`id`, `name`) VALUES ('4', 'Horreur');
INSERT INTO `category` (`id`, `name`) VALUES ('5', 'Romance');
INSERT INTO `category` (`id`, `name`) VALUES ('6', 'Fantastique');
INSERT INTO `category` (`id`, `name`) VALUES ('7', 'Animé');
INSERT INTO `category` (`id`, `name`) VALUES ('8', 'Serie Netflix');
INSERT INTO `category` (`id`, `name`) VALUES ('9', 'Film Netflix');


INSERT INTO `users` (`id`, `psedo`, `hashedPassword`, `firstname`, `lastname`, `email`, `role_id`) VALUES ('1', 'admin', '$argon2id$v=19$m=65536,t=5,p=1$jal/YOoWNGuCKvDcfMVB0g$t13cBPilyB7N067KlUh9unKwIwsC7Pzpb6DPIk9o3fk', 'admin', 'admin', 'admin@netflux.com', '1');
INSERT INTO `users` (`id`, `psedo`, `hashedPassword`, `firstname`, `lastname`, `email`, `role_id`) VALUES ('2', 'user', '$argon2id$v=19$m=65536,t=5,p=1$7GCQsSMXhh7rz1HmAB2AXg$qcegLPhh8GzD7QfbqrjBJV9o7wPc53PRCTSvRiqPOHU', 'user', 'user', 'user@netflux.com', '1');



INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('1', 'DIKKENEK', 'Olivier Van Hoofstadt', '2006', '86', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/87/40/18629488.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('2', 'ASTÉRIX ET OBÉLIX : MISSION CLÉOPÂTRE', 'Alain Chabat', '2002', '117', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/39/29/aff_asterix.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('3', 'RRRRRRR !!!', 'Alain Chabat', '2003', '108', 'https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/18/13/18370242.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('4', 'THE DARK KNIGHT', 'Christopher Nolan', '2008', '152', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('5', 'EDGE OF TOMORROW', 'Doug Liman', '2013', '113', 'https://fr.web.img3.acsta.net/c_310_420/pictures/14/05/23/17/03/300170.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('6', 'BLOOD DIAMOND', ' Edward Zwick', '2007', '143', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('7', 'SHUTTER ISLAND', 'Dennis Lehane', '2010', '137', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('8', 'CONSTANTINE', 'Francis Lawrence', '2005', '121', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/23/94/18401439.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('9', 'LE HOBBIT : UN VOYAGE INATTENDU', 'Peter Jackson', '2012', '169', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('10', 'HUNTER X HUNTER', 'Yoshiyuki Suga', '1999', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('11', 'STRANGER THINGS', 'Ross Duffer', '2016', '55', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/01/03/10/42/0987125.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('12', 'LA CASA DE PAPEL', 'Álex Pina', '2017', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/03/08/45/266320.jpg?coixp=50&coiyp=40', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('13', 'DARK', 'Jantje Friese', '2017', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('14', 'THE OA', 'Brit Marling', '2016', '60', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/29/15/36/3032146.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('15', 'INNOCENT', 'Netflix', '2021', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/09/15/28/4453411.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('16', 'EL CAMINO : UN FILM BREAKING BAD', 'Vince Gilligan', '2019', '93', 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/24/17/24/4667551.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('17', 'KENSHIN : L’ACHÈVEMENT', 'Keishi Ohtomo', '2021', '138', 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/21/14/18/0335348.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('18', 'THE WITCHER', 'Shotaro Suga', '2020', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('19', 'DIKKENEK', 'Olivier Van Hoofstadt', '2006', '86', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/87/40/18629488.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('20', 'ASTÉRIX ET OBÉLIX : MISSION CLÉOPÂTRE', 'Alain Chabat', '2002', '117', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/39/29/aff_asterix.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('21', 'RRRRRRR !!!', 'Alain Chabat', '2003', '108', 'https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/18/13/18370242.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('22', 'THE DARK KNIGHT', 'Christopher Nolan', '2008', '152', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('23', 'EDGE OF TOMORROW', 'Doug Liman', '2013', '113', 'https://fr.web.img3.acsta.net/c_310_420/pictures/14/05/23/17/03/300170.jpg', '1');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('24', 'BLOOD DIAMOND', ' Edward Zwick', '2007', '143', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('25', 'SHUTTER ISLAND', 'Dennis Lehane', '2010', '137', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('26', 'CONSTANTINE', 'Francis Lawrence', '2005', '121', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/23/94/18401439.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('27', 'LE HOBBIT : UN VOYAGE INATTENDU', 'Peter Jackson', '2012', '169', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('28', 'HUNTER X HUNTER', 'Yoshiyuki Suga', '1999', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('29', 'STRANGER THINGS', 'Ross Duffer', '2016', '55', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/01/03/10/42/0987125.jpg', '2');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('30', 'LA CASA DE PAPEL', 'Álex Pina', '2017', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/03/08/45/266320.jpg?coixp=50&coiyp=40', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('31', 'DARK', 'Jantje Friese', '2017', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('32', 'THE OA', 'Brit Marling', '2016', '60', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/29/15/36/3032146.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('33', 'INNOCENT', 'Netflix', '2021', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/09/15/28/4453411.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('34', 'EL CAMINO : UN FILM BREAKING BAD', 'Vince Gilligan', '2019', '93', 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/24/17/24/4667551.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('35', 'KENSHIN : L’ACHÈVEMENT', 'Keishi Ohtomo', '2021', '138', 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/21/14/18/0335348.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('36', 'THE WITCHER', 'Shotaro Suga', '2020', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '3');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('37', 'DIKKENEK', 'Olivier Van Hoofstadt', '2006', '86', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/87/40/18629488.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('38', 'ASTÉRIX ET OBÉLIX : MISSION CLÉOPÂTRE', 'Alain Chabat', '2002', '117', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/39/29/aff_asterix.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('39', 'RRRRRRR !!!', 'Alain Chabat', '2003', '108', 'https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/18/13/18370242.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('40', 'THE DARK KNIGHT', 'Christopher Nolan', '2008', '152', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('41', 'EDGE OF TOMORROW', 'Doug Liman', '2013', '113', 'https://fr.web.img3.acsta.net/c_310_420/pictures/14/05/23/17/03/300170.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('42', 'BLOOD DIAMOND', ' Edward Zwick', '2007', '143', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '4');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('43', 'SHUTTER ISLAND', 'Dennis Lehane', '2010', '137', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg', '5');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('44', 'CONSTANTINE', 'Francis Lawrence', '2005', '121', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/23/94/18401439.jpg', '5');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('45', 'LE HOBBIT : UN VOYAGE INATTENDU', 'Peter Jackson', '2012', '169', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg', '5');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('46', 'HUNTER X HUNTER', 'Yoshiyuki Suga', '1999', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '5');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('47', 'STRANGER THINGS', 'Ross Duffer', '2016', '55', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/01/03/10/42/0987125.jpg', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('48', 'LA CASA DE PAPEL', 'Álex Pina', '2017', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/03/08/45/266320.jpg?coixp=50&coiyp=40', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('49', 'DARK', 'Jantje Friese', '2017', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('50', 'THE OA', 'Brit Marling', '2016', '60', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/29/15/36/3032146.jpg', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('51', 'INNOCENT', 'Netflix', '2021', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/09/15/28/4453411.jpg', '6');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('52', 'EL CAMINO : UN FILM BREAKING BAD', 'Vince Gilligan', '2019', '93', 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/24/17/24/4667551.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('53', 'KENSHIN : L’ACHÈVEMENT', 'Keishi Ohtomo', '2021', '138', 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/21/14/18/0335348.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('54', 'THE WITCHER', 'Shotaro Suga', '2020', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('55', 'DIKKENEK', 'Olivier Van Hoofstadt', '2006', '86', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/87/40/18629488.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('56', 'ASTÉRIX ET OBÉLIX : MISSION CLÉOPÂTRE', 'Alain Chabat', '2002', '117', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/39/29/aff_asterix.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('57', 'RRRRRRR !!!', 'Alain Chabat', '2003', '108', 'https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/18/13/18370242.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('58', 'THE DARK KNIGHT', 'Christopher Nolan', '2008', '152', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg', '7');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('59', 'EDGE OF TOMORROW', 'Doug Liman', '2013', '113', 'https://fr.web.img3.acsta.net/c_310_420/pictures/14/05/23/17/03/300170.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('60', 'BLOOD DIAMOND', ' Edward Zwick', '2007', '143', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('61', 'SHUTTER ISLAND', 'Dennis Lehane', '2010', '137', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('62', 'CONSTANTINE', 'Francis Lawrence', '2005', '121', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/23/94/18401439.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('63', 'LE HOBBIT : UN VOYAGE INATTENDU', 'Peter Jackson', '2012', '169', 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('64', 'HUNTER X HUNTER', 'Yoshiyuki Suga', '1999', '25', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '8');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('65', 'STRANGER THINGS', 'Ross Duffer', '2016', '55', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/01/03/10/42/0987125.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('66', 'LA CASA DE PAPEL', 'Álex Pina', '2017', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/03/08/45/266320.jpg?coixp=50&coiyp=40', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('67', 'DARK', 'Jantje Friese', '2017', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/17/11/10/12/18/2448823.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('68', 'THE OA', 'Brit Marling', '2016', '60', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/29/15/36/3032146.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('69', 'INNOCENT', 'Netflix', '2021', '60', 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/09/15/28/4453411.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('70', 'EL CAMINO : UN FILM BREAKING BAD', 'Vince Gilligan', '2019', '93', 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/24/17/24/4667551.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('71', 'KENSHIN : L’ACHÈVEMENT', 'Keishi Ohtomo', '2021', '138', 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/21/14/18/0335348.jpg', '9');
INSERT INTO `movies` (`id`, `title`, `director`, `year`, `duration`, `img`, `category_id`) VALUES ('72', 'THE WITCHER', 'Shotaro Suga', '2020', '45', 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/07/12/13/55/2239749.jpg', '9');




INSERT INTO `movies_has_users` (`movies_id`, `users_id`) VALUES ('1', '1');

