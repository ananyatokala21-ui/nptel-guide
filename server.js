const dotenv = require("dotenv");
const express = require("express");

const connectDB = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 NPTEL Backend is Running!");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});