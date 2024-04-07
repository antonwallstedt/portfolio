var mongoose = require("mongoose");

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_UR);
  } catch (err) {
    console.error("error connecting to MongoDB");
  }
}
