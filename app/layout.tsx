import { Metadata } from "next";
import { NextAuthProvider } from "./_lib/next-auth-provider";

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
  return (
    <html lang="en">
      <NextAuthProvider>
        {/* <Header /> */}
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
