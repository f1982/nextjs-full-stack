"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CreateDraftForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: session, status } = useSession();
  console.log("session", session);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/blog/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={submitData}
      >
        <h1>New Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input disabled={!content || !title} type="submit" value="Create" />
        <Link className="back" href="#" onClick={() => router.push("/")}>
          or Cancel
        </Link>
      </form>
    </div>
  );
}
