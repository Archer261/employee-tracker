const cTable = require('console.table');

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
    const [rows, fields] = await main.execute('SELECT * FROM employee');

    console.table(
        console.log(`
        ███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗
        ██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝
        █████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░
        ██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░
        ███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗
        ╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝
        
        ████████╗██████╗░░█████╗░░█████╗░██╗░░██╗███████╗██████╗░
        ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗
        ░░░██║░░░██████╔╝███████║██║░░╚═╝█████═╝░█████╗░░██████╔╝
        ░░░██║░░░██╔══██╗██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗
        ░░░██║░░░██║░░██║██║░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║
        ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝
    `),
        console.log(main()),


        [
            // Menu Header
            {
                name: 'foo',
                age: 10
            }, {
                name: 'bar',
                age: 20
            }
        ]);


}





function viewAllEmployees() {
    return;
}


