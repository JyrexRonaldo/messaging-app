require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
// const gameRouter = require("./routes/gameRouter")
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");

app.use(cors());
app.use(express.json());

// app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express app running at port ${PORT}`);
});
