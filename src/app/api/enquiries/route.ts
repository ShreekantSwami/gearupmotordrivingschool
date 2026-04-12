import { NextResponse } from "next/server";

type EnquiryPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  experience?: string;
  preferredBatch?: string;
  goal?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as EnquiryPayload;

  if (
    !payload.fullName?.trim() ||
    !payload.phone?.trim() ||
    !payload.vehicle?.trim()
  ) {
    return NextResponse.json(
      {
        error:
          "Please complete your name, phone number, and preferred vehicle.",
      },
      { status: 400 },
    );
  }

  // Replace the server log with your CRM, email, or WhatsApp workflow before go-live.
  console.info("Gear Up enquiry received", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    message:
      "Thanks. Your enquiry has been captured and can now be followed up by the team.",
  });
}
