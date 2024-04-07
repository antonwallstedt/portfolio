const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

async function seedAdmin() {
  mongoose.connect(process.env.MONGODB_URI);

  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  mongoose.model("User", userSchema);

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const adminUser = new mongoose.models.User({
    username: process.env.ADMIN_USERNAME,
    password: hashedPassword,
  });

  adminUser.save();
}

async function main() {
  await seedAdmin();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
