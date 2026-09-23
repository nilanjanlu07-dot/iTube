const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Welcome to iTube API"
  });
});

app.get("/api/health", (req, res) => {
  const mongoose = require("mongoose");
  const ready = mongoose.connection.readyState === 1;
  res.status(ready ? 200 : 503).json({
    success: ready,
    database: ready ? "connected" : "disconnected",
  });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ success: false, message: "An unexpected server error occurred." });
});

module.exports = app;
