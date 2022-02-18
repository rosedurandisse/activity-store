DROP DATABASE IF EXISTS  adventure_shop_dev;
CREATE DATABASE adventure_shop_dev;

\c  adventure_shop_dev;

DROP TABLE IF EXISTS adventures;

CREATE TABLE adventures (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT,
    rating INT,
    CHECK (rating >= 0 AND rating <= 5),
    adrenaline_approved BOOLEAN
);


-- name - a string, required
-- description - a string
-- price - a number
-- rating - a number between 0 and 5
-- featured - a boolean