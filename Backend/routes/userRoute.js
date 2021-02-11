let express = require("express");
let userController = require("../controller/userController");
let Route = express.Router();
let multer = require("multer");
let upload = multer({ dest: "uploads/" });

Route.post("/createUser", upload.single("photo"), userController.createUser);
Route.post("/userLogin", userController.userLogin);
Route.get("/getAllUsers", userController.getAllUsers);
Route.post("/editProfile", userController.editProfile);
Route.post("/getUser", userController.getLoggedInUserProfile);

module.exports = Route;
