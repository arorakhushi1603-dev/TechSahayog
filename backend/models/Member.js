
import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    interest: {
      type: String,
      required: true,
      enum: [
        "Education Support",
        "Teaching",
        "Girls Education",
        "Learning Materials",
        "Community Outreach",
        "Other"
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
