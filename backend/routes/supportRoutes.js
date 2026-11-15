
import express from "express";
import SupportRequest from "../models/SupportRequest.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, age, phone, category, location, description } = req.body;

    if (!name || !age || !phone || !category || !location || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      });
    }

    const request = await SupportRequest.create({
      name, age, phone, category, location, description
    });

    res.status(201).json({
      success: true,
      message: "Educational support request submitted successfully.",
      data: request
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
