import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { NextAuthProvider } from "./_lib/next-auth-provider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Header from "./_modules/components/Header";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <NextAuthProvider>
        {/* <Header /> */}
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
