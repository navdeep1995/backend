const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  //password: "admin123",
  database: "restraveg",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
