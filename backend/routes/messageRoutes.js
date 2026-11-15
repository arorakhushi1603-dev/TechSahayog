
import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      });
    }

    const newMessage = await Message.create({
      name, email, phone, message
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully.",
      data: newMessage
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
