create database movie_system;
show databases; 
use movie_system; 
show tables;


CREATE TABLE users (
    user_id INT PRIMARY KEY auto_increment,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50) UNIQUE,
    password varchar(255),
    mobile varchar(15),
    birth DATE
);

CREATE TABLE movies (
    movie_id INT PRIMARY KEY auto_increment,
    title varchar(100),
    release_date date
);

CREATE TABLE reviews (
    review_id INT PRIMARY KEY auto_increment,
    movie_id INT,
    review varchar(255),
    rating INT,
    user_id INT REFERENCES users(user_id),
    modified Date,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

CREATE TABLE shares (
    review_id INT REFERENCES reviews(review_id),
    user_id INT REFERENCES users(user_id),
    PRIMARY KEY (review_id, user_id)
);



-- Dummy Data


show DATABASES;
USE movie_system;


SHOW TABLES;


INSERT INTO users (first_name, last_name, email, password, mobile, birth) VALUES
('John', 'Doe', 'john.doe@example.com', '123', '1234567890', '1990-01-15'),
('Jane', 'Smith', 'jane.smith@example.com', '123', '0987654321', '1985-05-22'),
('Peter', 'Jones', 'peter.jones@example.com', '123', '1122334455', '2001-11-30');


INSERT INTO movies (title, release_date) VALUES
('The Shawshank Redemption', '1994-10-14'),
('The Godfather', '1972-03-24'),
('The Dark Knight', '2008-07-18'),
('Pulp Fiction', '1994-10-14'),
('Inception', '2010-07-16'),
('Fight Club', '1999-10-15'),
('Forrest Gump', '1994-07-06'),
('The Matrix', '1999-03-31'),
('Goodfellas', '1990-09-21'),
('City of God', '2002-08-30');


INSERT INTO reviews (movie_id, review, rating, user_id, modified) VALUES
(1, 'A timeless classic, simply the best.', 5, 1, '2025-01-01'),
(2, 'An epic masterpiece about power and family.', 5, 2, '2025-01-02'),
(3, 'Gritty, dark, and an incredible performance by Heath Ledger.', 5, 3, '2025-01-03'),
(4, 'Quentin Tarantino at his best. Great dialogue.', 4, 1, '2025-01-04'),
(5, 'Mind-bending and visually stunning.', 5, 2, '2025-01-05'),
(6, 'You do not talk about fight club.', 4, 3, '2025-01-06'),
(7, 'Life is like a box of chocolates.', 4, 1, '2025-01-07'),
(8, 'The red pill or the blue pill?', 5, 2, '2025-01-08'),
(9, 'Great insight into mob life.', 4, 3, '2025-01-09'),
(10, 'A powerful and intense story from Brazil.', 5, 1, '2025-01-10');


INSERT INTO shares (review_id, user_id) VALUES
(1, 2), 
(1, 3), 
(3, 1), 
(5, 1), 
(8, 3); 




