const { Router } = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");

userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = userRouter;
