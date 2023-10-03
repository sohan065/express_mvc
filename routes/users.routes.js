// dependencies
const express = require("express");
const {
  getUser,
  saveUser,
  getAllUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/get/all", getAllUser);
router.get("/", getUser);
router.post("/", saveUser);

module.exports = router;
