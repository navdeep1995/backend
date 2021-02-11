let express = require("express");
let itemsController = require("../controller/itemsController");
let Route = express.Router();

Route.get("/itemList", itemsController.itemList);

module.exports = Route;
