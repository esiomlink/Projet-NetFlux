CREATE TABLE  `category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE  `comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(1500) NOT NULL,
  `movies_id` INT NOT NULL,
  PRIMARY KEY (`id`, `movies_id`),
  INDEX `fk_comment_movies1_idx` (`movies_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_movies1`
    FOREIGN KEY (`movies_id`)
    REFERENCES `movies`.`movies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4

CREATE TABLE  `role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE  `movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `director` VARCHAR(255) NOT NULL,
  `year` VARCHAR(255) NOT NULL,
  `duration` INT NOT NULL,
  `img` VARCHAR(100) NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_movies_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_movies_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `movies`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE  `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `psedo` VARCHAR(45) NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`, `role_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `user_psedo_UNIQUE` (`psedo` ASC) VISIBLE,
  INDEX `fk_users_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE  `movies_has_users` (
  `movies_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`movies_id`, `users_id`),
  INDEX `fk_movies_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_movies_has_users_movies_idx` (`movies_id` ASC) VISIBLE,
  CONSTRAINT `fk_movies_has_users_movies`
    FOREIGN KEY (`movies_id`)
    REFERENCES `movies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movies_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
