const prisma = require("../config/prisma");

async function createMessage(req, res) {
  const { messageBody, receiverId, senderId } = req.body;
  await prisma.message.create({
    data: {
      messageBody,
      receiverId: +receiverId,
      sender: +senderId,
    },
  });
  res.json(req.body);
}

async function getAllMessages(req, res) {
  const allMessages = await prisma.message.findMany();
  res.json(allMessages);
}

module.exports = { createMessage, getAllMessages };
