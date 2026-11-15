
import express from "express";
import Member from "../models/Member.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address, interest } = req.body;

    if (!name || !email || !phone || !interest) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      });
    }

    const member = await Member.create({
      name, email, phone, address, interest
    });

    res.status(201).json({
      success: true,
      message: "Membership application submitted successfully.",
      data: member
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
