import mongoose, { Document, Model } from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

interface UserDocument extends Document {
  username: string;
  password: string;
}

type UserModelType = Model<UserDocument>;

const User: UserModelType = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);

export { User, type UserDocument };
