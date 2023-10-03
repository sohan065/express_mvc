// dependencies
const users = require("../models/users.model");
const { v4: uuid } = require("uuid");
const path = require("path");

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = { id: uuid(), name, age };
  users.push(user);

  res.status(201).json({
    success: true,
    users,
  });
};

exports.getAllUser = (req, res) => {
  res.status(201).json({
    success: true,
    users,
  });
};
