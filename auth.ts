import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

var mongoose = require("mongoose");

async function getUser(username: string): Promise<User | undefined> {
  try {
    const user = await mongoose.models.User.findOne({ username: "AntonAdministrator" });
    return {
      name: user.username,
      password: user.password,
    };
  } catch (err) {
    console.error("failed to fetch user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object({ username: z.string(), password: z.string().min(6) }).safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return user;
          }
        }

        console.log("invalid credentials.");
        return null;
      },
    }),
  ],
});
