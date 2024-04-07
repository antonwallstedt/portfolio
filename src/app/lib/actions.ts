"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/../auth";

var mongoose = require("mongoose");
try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log(mongoose.models.User);
} catch (err) {
  console.error("could not connect to MongoDB " + err);
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
