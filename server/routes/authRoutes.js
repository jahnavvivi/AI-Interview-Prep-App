const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");
const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

//auth routes
router.post("/register", registerUser); //register a user
router.post("/login", loginUser); //login a user
router.get("/profile", protect, getUserProfile); //get a user profile

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
