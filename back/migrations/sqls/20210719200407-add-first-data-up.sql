INSERT INTO `role` (`role`, `name`) VALUES ('1', 'admin');
INSERT INTO `role` (`role`, `name`) VALUES ('2', 'user');

INSERT INTO `category` (`id`, `name`) VALUES ('1', 'humour');
INSERT INTO `category` (`id`, `name`) VALUES ('2', 'action');
INSERT INTO `category` (`id`, `name`) VALUES ('3', 'aventure');
INSERT INTO `category` (`id`, `name`) VALUES ('4', 'horreur');
INSERT INTO `category` (`id`, `name`) VALUES ('5', 'romance');
INSERT INTO `category` (`id`, `name`) VALUES ('6', 'serie');
INSERT INTO `category` (`id`, `name`) VALUES ('7', 'animé');
INSERT INTO `category` (`id`, `name`) VALUES ('8', 'serie netflix');
INSERT INTO `category` (`id`, `name`) VALUES ('9', 'filme netflix');

INSERT INTO `users` (`id`, `psedo`, `password`, `firstname`, `lastname`, `email`, `role_role`) VALUES ('1', 'admin', '$argon2id$v=19$m=65536,t=5,p=1$jal/YOoWNGuCKvDcfMVB0g$t13cBPilyB7N067KlUh9unKwIwsC7Pzpb6DPIk9o3fk', 'admin', 'admin', 'admin@netflux.com', '1');
INSERT INTO `users` (`id`, `psedo`, `password`, `firstname`, `lastname`, `email`, `role_role`) VALUES ('1', 'user', '$argon2id$v=19$m=65536,t=5,p=1$7GCQsSMXhh7rz1HmAB2AXg$qcegLPhh8GzD7QfbqrjBJV9o7wPc53PRCTSvRiqPOHU', 'user', 'user', 'user@netflux.com', '1');

