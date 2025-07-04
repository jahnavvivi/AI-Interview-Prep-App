const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//generates the jwt token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//@desc     Register a new User
//@route    POST /auth/register
//@access   Public
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, profileImageUrl } = req.body;

    //checking mif user already exits
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //creating a new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      profileImageUrl,
    });

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server Error. Try again Later..", error: err.message });
  }
};

//@desc     Login User
//@route    POST /auth/login
//@access   Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(500)
        .json({ message: "Invalid email or password entered" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send(500).json({ message: "Invalid Password entered" });
    }

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error. Try again Later..", error: err.message });
  }
};

//@desc     Get User Profile
//@route    POST /auth/profile
//@access   Private(Requires JWT)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error. Try again Later..", error: err.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
