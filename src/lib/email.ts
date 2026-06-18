import { Resend } from "resend";

type EnquiryFields = Record<string, unknown>;

type SendEnquiryEmailInput = {
  formName: string;
  fields: EnquiryFields;
};

const FROM_EMAIL = "Integrids <info@integrids.in>";
const TO_EMAIL = "info@integrids.in";

const FIELD_LABELS: Record<string, string> = {
  fullName: "Customer Name",
  name: "Customer Name",
  customerName: "Customer Name",
  companyName: "Company",
  company: "Company",
  email: "Email",
  contact: "Phone",
  phone: "Phone",
  contactNumber: "Phone",
  whatsappNumber: "WhatsApp Number",
  address: "Address",
  serviceAddress: "Address",
  location: "Location",
  city: "City",
  state: "State",
  service: "Selected Service",
  selectedService: "Selected Service",
  product: "Selected Product",
  selectedProduct: "Selected Product",
  package: "Selected Package",
  pkg: "Selected Package",
  quantity: "Quantity",
  message: "Message",
  notes: "Notes",
  additional: "Additional Requirements",
  panels: "Number of Panels",
  preferredDate: "Preferred Date",
  cleaningType: "Cleaning Type",
  capacity: "Plant Capacity",
  schedule: "Preferred Schedule",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "Not provided";
  if (Array.isArray(value)) return value.map(formatValue).join(", ");
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function getField(fields: EnquiryFields, keys: string[]) {
  for (const key of keys) {
    if (fields[key] !== undefined && fields[key] !== null && fields[key] !== "") {
      return fields[key];
    }
  }
  return "";
}

function buildEmailRows(formName: string, fields: EnquiryFields) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const coreRows: Array<[string, unknown]> = [
    ["Website", "Integrids"],
    ["Form/Page Name", formName],
    ["Submission Date & Time", submittedAt],
    ["Customer Name", getField(fields, ["customerName", "fullName", "name"])],
    ["Company", getField(fields, ["company", "companyName"])],
    ["Email", getField(fields, ["email"])],
    ["Phone", getField(fields, ["phone", "contact", "contactNumber", "whatsappNumber"])],
    ["Address", getField(fields, ["address", "serviceAddress", "location"])],
    ["City", getField(fields, ["city"])],
    ["State", getField(fields, ["state"])],
    [
      "Selected Service/Product/Package",
      getField(fields, ["selectedService", "service", "selectedProduct", "product", "package", "pkg", "cleaningType"]),
    ],
    ["Quantity", getField(fields, ["quantity"])],
    ["Message", getField(fields, ["message", "notes", "additional"])],
  ];

  const usedLabels = new Set(coreRows.map(([label]) => label));
  const additionalRows = Object.entries(fields)
    .map(([key, value]) => [FIELD_LABELS[key] || key, value] as [string, unknown])
    .filter(([label]) => !usedLabels.has(label));

  return [...coreRows, ...additionalRows];
}

export async function sendEnquiryEmail({ formName, fields }: SendEnquiryEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const rows = buildEmailRows(formName, fields);
  const htmlRows = rows
    .map(([label, value]) => {
      const formattedValue = formatValue(value);
      return `
        <tr>
          <td style="padding:10px 12px;border:1px solid #d9e2e7;background:#f7fafb;font-weight:700;color:#0f3440;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #d9e2e7;color:#263238;white-space:pre-wrap;">${escapeHtml(formattedValue)}</td>
        </tr>
      `;
    })
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${formatValue(value)}`).join("\n");
  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New Enquiry - ${formName} - Integrids`,
    text,
    html: `
      <div style="font-family:Arial,sans-serif;color:#263238;line-height:1.5;">
        <h2 style="margin:0 0 16px;color:#0f3440;">New Enquiry - ${escapeHtml(formName)} - Integrids</h2>
        <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;">
          <tbody>${htmlRows}</tbody>
        </table>
      </div>
    `,
  });
}
