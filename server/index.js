require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToDB = require("./config/db");
const { generateKey } = require("crypto");

const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

//middleware to handle cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectToDB();

app.use(express.json());

//routes
app.use("/auth", authRoutes);
app.use("/sessions", sessionRoutes);
app.use("/questions", questionRoutes);

// app.use("/ai/generate-questions", protect, generateInterviewQuestions);
// app.use("/ai/generate-explanation", protect, generateConceptExplanation);

//uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
