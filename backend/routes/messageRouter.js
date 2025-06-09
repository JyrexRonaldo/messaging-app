const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

messageRouter
  .route("/")
  .post(messageController.createMessage)
  .get(messageController.getAllMessages);

module.exports = messageRouter;
