// app/api/github/repos/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const page = Number(searchParams.get("page") || "1");
  const per_page = Number(searchParams.get("per_page") || "1");

  if (!username)
    return NextResponse.json({ error: "username required" }, { status: 400 });

  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(
      username
    )}/repos?per_page=${per_page}&page=${page}&sort=updated`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (res.status === 404)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "GitHub error", detail: text },
      { status: res.status }
    );
  }

  const data = await res.json();

  // GitHub does not always return total count in this endpoint; you may fetch user.public_repos separately if needed.
  return NextResponse.json({ repos: data });
}
