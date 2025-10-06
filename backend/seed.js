import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Doctor from "./models/Doctor.js";

dotenv.config();
connectDB();

const sampleDoctors = [
  {
    name: "Dr. Aditi Sharma",
    specialization: "Cardiologist",
    experience: 10,
    education: "MBBS, MD",
    rating: 4.8,
    hospital: "City Hospital",
    contact: "9876543210",
    image: "https://example.com/doctor1.jpg"
  },
  {
    name: "Dr. Raj Mehta",
    specialization: "Dermatologist",
    experience: 8,
    education: "MBBS, DDVL",
    rating: 4.6,
    hospital: "SkinCare Clinic",
    contact: "9123456789",
    image: "https://example.com/doctor2.jpg"
  }
];

const importData = async () => {
  try {
    await Doctor.deleteMany();
    await Doctor.insertMany(sampleDoctors);
    console.log("Sample data added!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
