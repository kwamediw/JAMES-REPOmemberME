const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/posts", postsRouter);
app.use("/auth", usersRouter);

app.listen(port, () => {
  console.log(`Port up and running on  ${port} `);
});
