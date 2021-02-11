let express = require("express");
let orderController = require("../controller/orderController");
let Route = express.Router();

Route.post("/addOrder", orderController.addOrder);
Route.post("/removeOrder", orderController.removeOrder);
Route.post("/getUserOrderList", orderController.getUserOrderList);

module.exports = Route;
