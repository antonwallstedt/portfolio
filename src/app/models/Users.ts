var mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
});

export const User = model("User", userSchema);
