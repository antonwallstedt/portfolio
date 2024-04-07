var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
