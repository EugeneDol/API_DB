const mysql = require('mysql2');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testsurvey"
}
)

dbConn.connect(function(error){
    if(error) throw error;
    console.log('database connected');
})

module.exports = dbConn;