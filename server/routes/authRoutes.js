const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

//auth routes
router.post("/register", registerUser); //register a user
router.post("/login", loginUser); //login a user
router.get("/profile", protect, getUserProfile); //get a user profile

module.exports = router;
