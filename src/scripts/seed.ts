var mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  username: String,
  password: String,
});

const User = model("User", userSchema);

const bcrypt = require("bcrypt");

require("dotenv").config();

async function seedUsers() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const adminUser = new User({
    username: process.env.ADMIN_USERNAME,
    password: hashedPassword,
  });

  try {
    await adminUser.save();
    console.log("seeded admin user.");
  } catch (err) {
    throw new Error("could not save user " + err);
  }
}

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("connection successful");
    });
  } catch (err) {
    console.error("could not connect to db.");
  }

  await seedUsers();
}

main().catch((err) => {
  console.error("An error occured while attempting to seed the database.", err);
});
