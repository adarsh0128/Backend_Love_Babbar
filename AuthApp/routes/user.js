const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/auth.js");
const { auth, isStudent, isAdmin } = require("../middlewares/auth.js");

router.post("/signup", signup);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for TESTS",
  });
});

//Protected Route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

module.exports = router;
