// app/api/github/user/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  console.log(username);

  if (!username) {
    return NextResponse.json({ error: "username required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (res.status === 404) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "GitHub error", detail: text },
      { status: res.status }
    );
  }

  const data = await res.json();
  console.log(data);
  return NextResponse.json(data);
}
