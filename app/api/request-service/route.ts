import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.info("Service request received", data);
  return NextResponse.json({ success: true, message: "Request received" });
}
