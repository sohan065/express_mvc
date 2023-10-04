// dependencies
const express = require("express");
const Joi = require("joi");
const { runValidation } = require("../validation/index");
const { schemas } = require("../validation/schemas");
const {
  getUser,
  saveUser,
  getAllUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/get/all", getAllUser);
router.get("/", getUser);
router.post("/", runValidation(schemas.registrationSchema), saveUser);

module.exports = router;
