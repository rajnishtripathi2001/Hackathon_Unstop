const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const users = require("./routes/api/users");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", users);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
