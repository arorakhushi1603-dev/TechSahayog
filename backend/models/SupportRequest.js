
import mongoose from "mongoose";

const supportRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 100
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Academic Support",
        "Learning Materials",
        "Girls Education",
        "Digital Learning",
        "Educational Guidance",
        "Other"
      ]
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Resolved"],
      default: "Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("SupportRequest", supportRequestSchema);
