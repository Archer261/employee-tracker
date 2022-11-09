const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
// const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mokuba983!!',
    port: 3001,
    database: 'employee_tracker'
});

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
    `)

main();

function main() {
    inquirer.prompt([
        {
            type: "list",
            message: "Main Menu",
            name: "choice",
            choices: [
                "Add New Employee",
                "Delete Employee",
                "View All Employees",
                "Add New Role",
                "Delete Role",
                "View All Roles",
                "Add New Department",
                "Delete Department",
                "View All Departements",
                "Exit"
            ],
        },
    ]).then((choices) => {
        switch (choices) {
            case "Add New Employee":
                addNewEmp();
                break;
            case "Delete Employee":
                deleteEmp();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add New Role":
                addNewRole();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add New Department":
                addNewDept();
                break;
            case "Delete Department":
                deleteDept();
                break;
            case "View All Departements":
                viewAllDept();
                break;
            case "Exit":
                break;
            default:
                main()
        }
    })
}

function addNewEmp() {
    return;
}

function deleteEmp() {
    return;
}

function viewAllEmployees() {
    return;
}

function addNewRole() {
    return;
}

function deleteRole() {
    return;
}

function viewAllRoles() {
    return;
}
function addNewDept() {
    return;
}
function deleteDept() {
    return;
}
function viewAllDept() {
    return;
}



