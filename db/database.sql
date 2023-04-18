CREATE DATABASE IF NOT EXISTS miBaseDeDatos;

USE miBaseDeDatos;

CREATE TABLE users (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    stack INT (6) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE users;

INSERT INTO users VALUES
    (1, 'JOE', 1000),
    (2, 'HENRY', 200),
    (3, 'sam', 5000),
    (4, 'max', 10500);

SELECT * FROM users WHERE id = 1;

DELETE FROM users WHERE id = 1;

UPDATE users SET name = IFNULL(?, name), stack = ifnull(?, stack) WHERE id = ?