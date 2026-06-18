type EnquiryFields = Record<string, unknown>;

export async function submitEnquiry(formName: string, fields: EnquiryFields) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formName, fields }),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error || "We could not send your enquiry right now. Please try again.");
  }

  return response.json();
}
