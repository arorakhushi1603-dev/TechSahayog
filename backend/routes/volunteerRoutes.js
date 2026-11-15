
import express from "express";
import Volunteer from "../models/Volunteer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, interest, skills } = req.body;

    if (!name || !email || !phone || !interest) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      });
    }

    const volunteer = await Volunteer.create({
      name, email, phone, interest, skills
    });

    res.status(201).json({
      success: true,
      message: "Volunteer application submitted successfully.",
      data: volunteer
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
