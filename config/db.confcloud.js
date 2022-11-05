const mysql = require('mysql');
require('dotenv').config();

    const dbConn =  mysql.createPool({
          user: process.env.DB_USER, // e.g. 'my-db-user'
          password: process.env.DB_NAME, // e.g. 'my-db-password'
          database: process.env.DB_NAME, // e.g. 'my-database'
          socketPath:`/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
          
        });
      

    module.exports = dbConn; 