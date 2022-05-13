const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

require("dotenv/config");

const tasksRoute = require("./routes/tasks");

app.use("/tasks", tasksRoute);

app.get("/", (req, res) => {
  res.send("we are on home http://localhost:8001");
});

mongoose.connect(process.env.DB_CONN, () => {
  console.log("connected to DB");
});
app.listen(8002);
