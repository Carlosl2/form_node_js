--create database 
create database nodedb; 
use nodedb nodedb; 

create table  customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR (150) NOT NULL,
    address  VARCHAR (150) NOT NULL, 
    phone VARCHAR (20) NOT NULL 
); 

SHOW TABLES; 

DESCRIBE customer; 