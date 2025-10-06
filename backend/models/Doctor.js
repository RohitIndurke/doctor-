import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  education: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  hospital: { type: String },
  contact: { type: String },
  image: { type: String },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
