const prisma = require("../config/prisma");

async function createUser(req, res) {
  const { username, password } = req.body;
  await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.json(req.body)
}

async function getAllUsers(req,res) {
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
}

module.exports = {createUser, getAllUsers};
