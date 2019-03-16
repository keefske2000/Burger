var mysql = require("mysql");
var connection;

if(process.env.JAWSBD_URL){
  connection = mysql.createConnection(process.env.JAWSBD_URL);
  } else{

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db"
});
  };

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;