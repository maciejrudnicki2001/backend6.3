import json
import psycopg2
from flask import Flask

app = Flask(__name__)


def get_database():
    return psycopg2.connect(database="cars", user="postgress", password="123", host="localhost", port="3306")


@app.route('/cars')
def get_cars():
    conn = get_database()
    cur = conn.cursor()
    cur.execute("SELECT * FROM cars")
    rows = cur.fetchall()
    conn.close()
    return json.dumps(rows)


@app.route('/cars/<int:year>', methods=['GET'])
def get_cars_by_year(year):
    conn = get_database()
    cur = conn.cursor()
    cur.execute("SELECT * FROM cars WHERE year = %s", (year,))
    rows = cur.fetchall()
    conn.close()
    return json.dumps(rows)


if __name__ == '__main__':
    app.run()
