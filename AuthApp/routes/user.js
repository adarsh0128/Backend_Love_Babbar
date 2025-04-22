const express = require("express");
const router = express.Router();

const user = require("../models/User");

const { signup } = require("../controllers/auth.js");

router.post("/signup", signup);

module.exports = router;
