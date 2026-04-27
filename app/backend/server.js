const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API route for frontend button
app.get("/api", (req, res) => {
  res.send("✅ Backend connected successfully!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});