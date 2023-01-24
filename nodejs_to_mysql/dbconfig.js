const fs = require("fs");

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require('mysql');


const connection = mysql.createConnection({
    "host" : conf.host,
    "user" : conf.user,
    "passowrd" : conf.passowrd,
    "port" : conf.port,
    "database" : conf.database
})

connection.connect();

module.exports = connection
