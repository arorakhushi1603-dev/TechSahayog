
import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";

import supportRoutes from "./routes/supportRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// Security and middleware
app.use(helmet());

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

// API rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false
});

app.use("/api", limiter);

// Backend home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Har Ghar Shiksha Backend API is running."
  });
});

// API routes
app.use("/api/requests", supportRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/messages", messageRoutes);

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found."
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server."
  });
});

// Start backend
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error.message);
    process.exit(1);
  }
};

startServer();
