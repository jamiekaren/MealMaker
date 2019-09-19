DROP DATABASE IF EXISTS `app-users`;
CREATE DATABASE `app-users`;

USE `app-users`;

CREATE TABLE accounts
(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(300) NOT NULL,
    googleId VARCHAR(300),
    password VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);