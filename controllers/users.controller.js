// dependencies
const users = require("../models/users.model");
const { v4: uuid } = require("uuid");
const path = require("path");
const pool = require("../config/database");

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUser = (req, res) => {
  const id = uuid();
  const sql = pool.query(`insert into user(id, name, age) values(?,?,?)`);
  const values = [id, req.body.name, req.body.age];
  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while inserting data" });
    }

    // Data inserted successfully
    console.log("Data inserted:", results);
    return res.status(200).json({ message: "Data inserted successfully" });
  });
  // const name = req.body.name;
  // const age = Number(req.body.age);
  // const user = { id: uuid(), name, age };
  // users.push(user);

  // res.status(201).json({
  //   success: true,
  //   users,
  // });
};

exports.getAllUser = (req, res) => {
  res.status(201).json({
    success: true,
    users,
  });
};
