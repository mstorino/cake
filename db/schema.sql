CREATE DATABASE astroblast_db;
USE astroblast_db;

CREATE TABLE astroblastMenu {
	id int NOT NULL AUTO_INCREMENT,
	item_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false;
	date 
	PRIMARY KEY(id)

} 