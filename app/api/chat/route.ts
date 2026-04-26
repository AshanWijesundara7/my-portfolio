// app/api/chat/route.ts
// ─── Local ML Chatbot API Route ───────────────────────────────────────────────
// No external API needed — runs entirely on your Next.js server

import { NextRequest, NextResponse } from "next/server";
import { predict } from "@/lib/chatEngine";  // adjust path if needed

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: { role: string; content: string }[] = body.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ message: "No messages provided." }, { status: 400 });
    }

    // Get the latest user message
    const lastUserMessage = messages
      .filter((m) => m.role === "user")
      .at(-1)?.content ?? "";

    // Run through local ML engine
    const reply = predict(lastUserMessage);

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}