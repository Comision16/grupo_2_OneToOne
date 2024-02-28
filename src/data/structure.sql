-- MySQL Script generated by MySQL Workbench
-- Sun Feb 18 03:07:42 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema onetoone_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema onetoone_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS onetoone_db DEFAULT CHARACTER SET utf8 ;
USE onetoone_db ;

-- -----------------------------------------------------
-- Table onetoone_db.sizes
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.sizes ;

CREATE TABLE IF NOT EXISTS onetoone_db.sizes (
  id INT NULL,
  name VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.color
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.color ;

CREATE TABLE IF NOT EXISTS onetoone_db.color (
  id INT NULL,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.sections
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.sections ;

CREATE TABLE IF NOT EXISTS onetoone_db.sections (
  id INT NOT NULL,
  name VARCHAR(45) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.categories
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.categories ;

CREATE TABLE IF NOT EXISTS onetoone_db.categories (
  id INT NOT NULL,
  name VARCHAR(45) NULL,
  productos_id VARCHAR(45) NOT NULL,
  sections_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_categories_sections1_idx (sections_id ASC) VISIBLE,
  CONSTRAINT fk_categories_sections1
    FOREIGN KEY (sections_id)
    REFERENCES onetoone_db.sections (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.products
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.products ;

CREATE TABLE IF NOT EXISTS onetoone_db.products (
  id INT NOT NULL,
  name VARCHAR(45) NULL,
  description TEXT NULL,
  price INT NULL,
  discount INT NULL,
  image VARCHAR(45) NULL,
  categoryId INT NULL,
  sectionId INT NULL,
  categories_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_products_categories1_idx (categories_id ASC) VISIBLE,
  CONSTRAINT fk_products_categories1
    FOREIGN KEY (categories_id)
    REFERENCES onetoone_db.categories (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.products_sizes
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.products_sizes ;

CREATE TABLE IF NOT EXISTS onetoone_db.products_sizes (
  id INT NULL,
  size_id INT NOT NULL,
  products_id INT NOT NULL,
  sizes_id INT NOT NULL,
  products_id1 INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_products_sizes_sizes1_idx (sizes_id ASC) VISIBLE,
  INDEX fk_products_sizes_products1_idx (products_id1 ASC) VISIBLE,
  CONSTRAINT fk_products_sizes_sizes1
    FOREIGN KEY (sizes_id)
    REFERENCES onetoone_db.sizes (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_products_sizes_products1
    FOREIGN KEY (products_id1)
    REFERENCES onetoone_db.products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.products_colors
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.products_colors ;

CREATE TABLE IF NOT EXISTS onetoone_db.products_colors (
  id INT NULL,
  colors_id INT NOT NULL,
  products_id INT NOT NULL,
  color_id INT NOT NULL,
  products_id1 INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_products_colors_color_idx (color_id ASC) VISIBLE,
  INDEX fk_products_colors_products1_idx (products_id1 ASC) VISIBLE,
  CONSTRAINT fk_products_colors_color
    FOREIGN KEY (color_id)
    REFERENCES onetoone_db.color (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_products_colors_products1
    FOREIGN KEY (products_id1)
    REFERENCES onetoone_db.products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.roles
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.roles ;

CREATE TABLE IF NOT EXISTS onetoone_db.roles (
  id INT NULL,
  name VARCHAR(45) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.users
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.users ;

CREATE TABLE IF NOT EXISTS onetoone_db.users (
  id INT NULL,
  name VARCHAR(45) NULL,
  surnamel VARCHAR(45) NULL,
  email VARCHAR(100) NULL,
  password VARCHAR(45) NULL,
  roles_id INT NULL,
  roles_id1 INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX userscol_UNIQUE (password ASC) VISIBLE,
  INDEX fk_users_roles1_idx (roles_id1 ASC) VISIBLE,
  CONSTRAINT fk_users_roles1
    FOREIGN KEY (roles_id1)
    REFERENCES onetoone_db.roles (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.orders
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.orders ;

CREATE TABLE IF NOT EXISTS onetoone_db.orders (
  id INT NULL,
  user_id INT NOT NULL,
  date_order DATE NOT NULL,
  total INT NOT NULL,
  status_id INT NOT NULL,
  users_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_orders_users1_idx (users_id ASC) VISIBLE,
  CONSTRAINT fk_orders_users1
    FOREIGN KEY (users_id)
    REFERENCES onetoone_db.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.statuses
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.statuses ;

CREATE TABLE IF NOT EXISTS onetoone_db.statuses (
  id INT NULL,
  name VARCHAR(45) NULL,
  orders_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_statuses_orders1_idx (orders_id ASC) VISIBLE,
  CONSTRAINT fk_statuses_orders1
    FOREIGN KEY (orders_id)
    REFERENCES onetoone_db.orders (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.items
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.items ;

CREATE TABLE IF NOT EXISTS onetoone_db.items (
  id INT NOT NULL,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  total DECIMAL(1000) NOT NULL,
  products_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_items_products1_idx (products_id ASC) VISIBLE,
  CONSTRAINT fk_items_products1
    FOREIGN KEY (products_id)
    REFERENCES onetoone_db.products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.cart
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.cart ;

CREATE TABLE IF NOT EXISTS onetoone_db.cart (
  id INT NULL,
  users_id INT NOT NULL,
  products_id INT NOT NULL,
  users_id1 INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_cart_users1_idx (users_id1 ASC) VISIBLE,
  CONSTRAINT fk_cart_users1
    FOREIGN KEY (users_id1)
    REFERENCES onetoone_db.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.images
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.images ;

CREATE TABLE IF NOT EXISTS onetoone_db.images (
  id INT NOT NULL,
  file VARCHAR(45) NULL,
  producto_id VARCHAR(45) NULL,
  products_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_images_products1_idx (products_id ASC) VISIBLE,
  CONSTRAINT fk_images_products1
    FOREIGN KEY (products_id)
    REFERENCES onetoone_db.products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table onetoone_db.products_cart
-- -----------------------------------------------------
DROP TABLE IF EXISTS onetoone_db.products_cart ;

CREATE TABLE IF NOT EXISTS onetoone_db.products_cart (
  id INT NOT NULL,
  card_id INT NULL,
  products_id INT NULL,
  quantity INT NULL,
  total DECIMAL(1000) NULL,
  products_id1 INT NOT NULL,
  cart_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_products_cart_products1_idx (products_id1 ASC) VISIBLE,
  INDEX fk_products_cart_cart1_idx (cart_id ASC) VISIBLE,
  CONSTRAINT fk_products_cart_products1
    FOREIGN KEY (products_id1)
    REFERENCES onetoone_db.products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_products_cart_cart1
    FOREIGN KEY (cart_id)
    REFERENCES onetoone_db.cart (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;