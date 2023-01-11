CREATE TABLE cars(
    car_id serial NOT NULL PRIMARY KEY,
    model VARCHAR(255) UNIQUE NOT NULL,
    year INT NOT NULL,
    details TEXT NOT NULL
);

INSERT INTO cars (model, year, details) VALUES ('Ford', 2010, 'Ford is a car manufacturer');
INSERT INTO cars (model, year, details) VALUES ('BMW', 2015, 'BMW is a car manufacturer');
INSERT INTO cars (model, year, details) VALUES ('Audi', 2017, 'Audi is a car manufacturer');
INSERT INTO cars (model, year, details) VALUES ('Mercedes', 2018, 'Mercedes is a car manufacturer');
INSERT INTO cars (model, year, details) VALUES ('Toyota', 2019, 'Toyota is a car manufacturer');