// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rbjio6i767nnkcga",
  password: "pqmx5ev31s3q6up1",
  database: "	rb2nw93s1mwhhiaj"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
