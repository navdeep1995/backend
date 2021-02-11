let express = require("express");
require("dotenv").config();
let connection = require("./db");
let app = express();
let http = require("http");
let mysql = require("mysql");
var cors = require("cors");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

var userController = require("./controller/userController");
var userRoute = require("./routes/userRoute");

var itemsController = require("./controller/itemsController");
var itemsRoute = require("./routes/itemsRoute");

var orderController = require("./controller/orderController");
var orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoute);
app.use("/", itemsRoute);
app.use("/", orderRoute);
//use cors to allow cross origin resource sharing

http
  .createServer(app, () => {
    console.log("server created");
  })
  .listen(8000);
