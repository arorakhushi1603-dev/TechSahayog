
import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
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
    interest: {
      type: String,
      required: true,
      enum: [
        "Teaching",
        "Girls Education",
        "Learning Materials",
        "Digital Learning",
        "Education Camps",
        "Community Outreach",
        "Other"
      ]
    },
    skills: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Volunteer", volunteerSchema);
