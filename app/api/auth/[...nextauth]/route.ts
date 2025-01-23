import { userCredentials } from "@/db/db";
import { addUserSessions } from "@/lib/lib";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile ");
      }
      console.log(account)
      profile.name = profile.name ? profile.name : "user";
      profile.image = profile.image
        ? profile.image
        : "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png";

      const user = await userCredentials(
        profile.email,
        profile.name,
        profile.image
      );
      addUserSessions(user);
      return true;
    },
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
