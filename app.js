// dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users.routes");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// custom routes
app.use("/user", userRouter);

// default route
app.get("/", (req, res) => {
  res.send("welcome to REST API");
});
// bad request
app.use((req, res) => {
  res.status(404).json({ message: "bad request" });
});
// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Server error" });
});

module.exports = app;
