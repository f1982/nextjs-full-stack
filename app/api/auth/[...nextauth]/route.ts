import NextAuth from "next-auth";
import { authOptions } from "../../../_lib/auth-opt";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
