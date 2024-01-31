import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <div className="container">
      <h1 className="text-xl">hello</h1>
      <div className="flex flex-row gap-4">
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
}
