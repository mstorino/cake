CREATE DATABASE cake_db;

USE cake_db;

CREATE TABLE cakes (
	id int NOT NULL AUTO_INCREMENT,
	item_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	orderDate datetime NOT NULL DEFAULT NOW(),
	PRIMARY KEY(id)
)