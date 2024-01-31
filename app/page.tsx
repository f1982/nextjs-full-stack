import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <div>
      <h1>hello</h1>
      <Link href={"/blog"}>Blog</Link> |
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
