CREATE DATABASE orders;

\c orders

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    number_of_items INTEGER NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL
);

INSERT INTO orders (user_id, number_of_items, total_amount) VALUES 
('user1', 3, 59.99),
('user2', 5, 120.50),
('user3', 1, 15.75),
('user4', 2, 30.00),
('user5', 7, 210.00);
