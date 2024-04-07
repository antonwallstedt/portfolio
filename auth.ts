import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { User, UserDocument } from "@/app/models/User";
import bcrypt from "bcrypt";

async function getUser(username: string): Promise<UserDocument | null> {
  try {
    const user = await User.findOne({ username: username });
    return user;
  } catch (err) {
    console.error("failed to fetch user");
    return null;
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
