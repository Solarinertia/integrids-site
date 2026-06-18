import { NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/email";

type EnquiryRequest = {
  formName?: unknown;
  fields?: unknown;
};

function isFields(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryRequest;
    const formName = typeof body.formName === "string" ? body.formName.trim() : "";

    if (!formName) {
      return NextResponse.json({ error: "Form name is required." }, { status: 400 });
    }

    if (!isFields(body.fields)) {
      return NextResponse.json({ error: "Submitted form fields are required." }, { status: 400 });
    }

    await sendEnquiryEmail({ formName, fields: body.fields });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry email failed", error);
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
