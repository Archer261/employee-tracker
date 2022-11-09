// get the client
const mysql = require('mysql2');

async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Mokuba983!!',
        port: 3001,
        database: 'employee_tracker'
    });
}

module.exports = main;