CREATE DATABASE alumni_db;
USE alumni_db;
CREATE TABLE Alumni (
    alumni_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    graduation_year YEAR,
    course VARCHAR(50),
    phone VARCHAR(15),
    address TEXT
);
SHOW DATABASES;
USE alumni_db;
SHOW TABLES;
DESCRIBE Alumni;
SELECT * FROM alumni;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100)
);
SELECT * FROM users;
INSERT INTO users (username, password) VALUES ('admin', 'admin123');
ALTER TABLE users ADD UNIQUE (username);

