const pool = require('./database');

const createTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS students(
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100) UNIQUE,
       class VARCHAR(50),
       section VARCHAR(10),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       )
       `;
       await pool.query(query);
};

createTable();

module.exports = {};