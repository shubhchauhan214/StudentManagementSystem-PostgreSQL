const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'IMS',
    password: 'Me@shubham1',
    port: 5432,
});

pool.connect()
    .then(() => console.log('PostgreSQL connected successfully'))
    .catch((err) => console.log('PostgreSQL Connection Error', err));

    
module.exports = pool;