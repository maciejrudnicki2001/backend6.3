const express = require('express');
const app = express();

const port = process.env.DB_PORT || 3306;
const host = process.env.DB_HOST || 'localhost';

const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: host,
    database: 'cars',
    password: '123',
    port: port,
});

client.connect();

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});

app.get('/cars', async (req, res) => {
    client.query('SELECT * FROM cars', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
          res.json(result.rows);
        }

    })
});

app.post('/addCar', async (req, res) => {
    client.query('INSERT INTO cars (id, brand, model, production_year) VALUES (3, "Fiat", "Punto", 2005)', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result.rows);
        }

    })
});
