import { NextResponse } from "next/server";

type Enquiry = { name?: string; email?: string; company?: string; occasion?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = (await req.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email and message." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: forward to the concierge inbox (Resend / Nodemailer) or persist to Supabase.
  console.info("[enquiry]", {
    name,
    email,
    company: body.company?.trim() || null,
    occasion: body.occasion ?? null,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
