"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./cart.module.css";
import { submitEnquiry } from "@/lib/enquiryClient";

type CartItem = { id: string; name: string; price: string; image: string; quantity: number };
type FormData = {
  fullName: string; company: string; contact: string; email: string;
  address: string; city: string; state: string; notes: string;
};

const initialForm: FormData = {
  fullName: "", company: "", contact: "", email: "",
  address: "", city: "", state: "", notes: "",
};

// ── Shared sub-components ────────────────────────────────────────────────────

function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/LOGO.png" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function Footer() {
  return (
    <footer>
      <Link className="footer-logo-link" href="/"><img className="footer-logo-img" src="/assets/Navbar/LOGO.png" alt="Integrids" /></Link>
      <div><b>QUICK LINKS</b><p><br /><Link href="/about-us">About Us</Link><br /><Link href="/services">Services</Link><br /><Link href="/store">Store</Link></p></div>
      <div><b>SERVICES</b><p><Link href="/services#cleaning-services">Robotic Cleaning</Link><br /><Link href="/services#cleaning-services">Manual Cleaning</Link><br /><Link href="/services#inspection-services">Inspection Services</Link><br /><Link href="/services#performance-support-services">Performance Optimization</Link><br /><Link href="/services#performance-support-services">AMC Contracts</Link></p></div>
      <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.in">info@integrids.in</a><br /><a href="https://www.google.com/maps/place/SOLARINERTIA+POWER+PVT+LTD/@20.3227691,72.9687473,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11" /></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg></a></p></div>
    </footer>
  );
}

// ── Step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: number }) {
  const steps = [
    { label: "Project Details", num: 1 },
    { label: "Order Review", num: 2 },
    { label: "Quotation Request", num: 3 },
  ];
  return (
    <div className={styles.stepIndicator}>
      {steps.map(({ label, num }, i) => {
        const active = step === num;
        const done = step > num;
        return (
          <div key={num} className={styles.stepItem}>
            {i > 0 && <div className={`${styles.stepLine} ${done ? styles.stepLineDone : ""}`} />}
            <div className={`${styles.stepCircle} ${active ? styles.stepCircleActive : ""} ${done ? styles.stepCircleDone : ""}`}>
              {done ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 7 6 11 12 3" /></svg> : num}
            </div>
            <span className={`${styles.stepLabel} ${active ? styles.stepLabelActive : ""} ${done ? styles.stepLabelDone : ""}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── India states & cities data ───────────────────────────────────────────────

const INDIA_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu","Delhi",
  "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const CITIES_BY_STATE: Record<string, string[]> = {
  "Andhra Pradesh": ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Tirupati","Rajamahendravaram","Kakinada","Kadapa","Anantapur","Eluru","Ongole"],
  "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Tawang","Ziro","Bomdila","Tezu"],
  "Assam": ["Guwahati","Silchar","Dibrugarh","Jorhat","Nagaon","Tinsukia","Tezpur","Bongaigaon","Dhubri"],
  "Bihar": ["Patna","Gaya","Bhagalpur","Muzaffarpur","Purnia","Darbhanga","Bihar Sharif","Arrah","Begusarai","Katihar"],
  "Chhattisgarh": ["Raipur","Bhilai","Bilaspur","Korba","Rajnandgaon","Jagdalpur","Ambikapur","Raigarh"],
  "Goa": ["Panaji","Vasco da Gama","Margao","Mapusa","Ponda","Bicholim"],
  "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Bhavnagar","Jamnagar","Bharuch","Vapi","Silvassa","Anand","Morbi","Junagadh","Nadiad","Mehsana","Surendranagar"],
  "Haryana": ["Faridabad","Gurugram","Panipat","Ambala","Yamunanagar","Rohtak","Hisar","Karnal","Sonipat","Panchkula","Bhiwani","Rewari"],
  "Himachal Pradesh": ["Shimla","Manali","Dharamshala","Solan","Mandi","Kullu","Nahan","Hamirpur","Una","Palampur"],
  "Jharkhand": ["Ranchi","Jamshedpur","Dhanbad","Bokaro","Deoghar","Phusro","Hazaribagh","Giridih","Ramgarh"],
  "Karnataka": ["Bengaluru","Mysuru","Mangaluru","Hubballi","Belagavi","Kalaburagi","Davanagere","Ballari","Vijayapura","Shivamogga","Tumakuru","Udupi"],
  "Kerala": ["Thiruvananthapuram","Kochi","Kozhikode","Kollam","Thrissur","Palakkad","Alappuzha","Kannur","Kottayam","Malappuram"],
  "Madhya Pradesh": ["Bhopal","Indore","Jabalpur","Gwalior","Ujjain","Sagar","Rewa","Satna","Ratlam","Dewas","Murwara","Singrauli"],
  "Maharashtra": ["Mumbai","Pune","Nagpur","Nashik","Thane","Aurangabad","Kolhapur","Solapur","Navi Mumbai","Vasai-Virar","Malegaon","Jalgaon","Akola","Latur","Dhule","Ahmednagar","Chandrapur","Parbhani"],
  "Manipur": ["Imphal","Thoubal","Bishnupur","Churachandpur","Kakching"],
  "Meghalaya": ["Shillong","Tura","Jowai","Nongpoh","Baghmara"],
  "Mizoram": ["Aizawl","Lunglei","Champhai","Serchhip","Kolasib"],
  "Nagaland": ["Kohima","Dimapur","Mokokchung","Tuensang","Wokha","Zunheboto"],
  "Odisha": ["Bhubaneswar","Cuttack","Brahmapur","Sambalpur","Rourkela","Balasore","Baripada","Bhadrak","Jharsuguda","Puri"],
  "Punjab": ["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Mohali","Firozpur","Pathankot","Hoshiarpur","Batala"],
  "Rajasthan": ["Jaipur","Jodhpur","Kota","Bikaner","Ajmer","Udaipur","Bhilwara","Alwar","Bharatpur","Sikar","Pali","Sri Ganganagar"],
  "Sikkim": ["Gangtok","Namchi","Gyalshing","Mangan"],
  "Tamil Nadu": ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Tiruppur","Erode","Vellore","Thoothukudi","Dindigul","Thanjavur","Ranipet","Sivakasi"],
  "Telangana": ["Hyderabad","Warangal","Nizamabad","Karimnagar","Khammam","Ramagundam","Secunderabad","Mahbubnagar","Nalgonda","Adilabad"],
  "Tripura": ["Agartala","Udaipur","Dharmanagar","Kailasahar","Belonia"],
  "Uttar Pradesh": ["Lucknow","Kanpur","Ghaziabad","Agra","Meerut","Varanasi","Prayagraj","Bareilly","Aligarh","Moradabad","Saharanpur","Gorakhpur","Noida","Firozabad","Jhansi","Mathura","Muzaffarnagar","Shahjahanpur"],
  "Uttarakhand": ["Dehradun","Haridwar","Roorkee","Haldwani","Rudrapur","Kashipur","Rishikesh","Mussoorie","Nainital","Pithoragarh"],
  "West Bengal": ["Kolkata","Howrah","Asansol","Siliguri","Durgapur","Bardhaman","Malda","Baharampur","Habra","Kharagpur","Shantipur","Dankuni"],
  "Andaman and Nicobar Islands": ["Port Blair","Car Nicobar","Mayabunder","Diglipur"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Silvassa","Daman","Diu"],
  "Delhi": ["New Delhi","Delhi","Dwarka","Rohini","Janakpuri","Laxmi Nagar","Saket","Pitampura"],
  "Jammu and Kashmir": ["Srinagar","Jammu","Anantnag","Baramulla","Sopore","Kathua","Udhampur","Punch"],
  "Ladakh": ["Leh","Kargil"],
  "Lakshadweep": ["Kavaratti","Agatti","Amini","Androth"],
  "Puducherry": ["Puducherry","Karaikal","Mahe","Yanam"],
};

// ── Step 1 — Project Details ─────────────────────────────────────────────────

function Step1({ form, onChange }: { form: FormData; onChange: (k: keyof FormData, v: string) => void }) {
  const cities = form.state ? (CITIES_BY_STATE[form.state] ?? []) : [];
  return (
    <div className={styles.stepContent}>
      <div className={styles.stepHeading}>
        <h2>Project Details</h2>
        <p>Please fill in your contact and project information below.</p>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label>Full Name <em>*</em></label>
          <input value={form.fullName} onChange={e => onChange("fullName", e.target.value)} placeholder="Enter your full name" />
        </div>
        <div className={styles.formField}>
          <label>Company Name <em>*</em></label>
          <input value={form.company} onChange={e => onChange("company", e.target.value)} placeholder="Enter company name" />
        </div>
        <div className={styles.formField}>
          <label>Contact Number <em>*</em></label>
          <input
            inputMode="numeric"
            value={form.contact}
            onChange={e => onChange("contact", e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="10-digit number"
            maxLength={10}
          />
        </div>
        <div className={styles.formField}>
          <label>Email Address <em>*</em></label>
          <input type="email" value={form.email} onChange={e => onChange("email", e.target.value)} placeholder="you@example.com" />
        </div>
        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <label>Address <em>*</em></label>
          <input value={form.address} onChange={e => onChange("address", e.target.value)} placeholder="Enter your address" />
        </div>
        <div className={styles.formField}>
          <label>State <em>*</em></label>
          <select
            value={form.state}
            onChange={e => { onChange("state", e.target.value); onChange("city", ""); }}
          >
            <option value="" disabled>Select state</option>
            {INDIA_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className={styles.formField}>
          <label>City <em>*</em></label>
          <select
            value={form.city}
            onChange={e => onChange("city", e.target.value)}
            disabled={!form.state}
          >
            <option value="" disabled>{form.state ? "Select city" : "Select state first"}</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <label>Notes <span className={styles.optional}>(Optional)</span></label>
          <textarea
            value={form.notes}
            onChange={e => onChange("notes", e.target.value)}
            placeholder="Any additional notes or special requirements..."
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}

// ── Step 2 — Order Review ────────────────────────────────────────────────────

function Step2({
  items,
  onQty,
  onRemove,
}: {
  items: CartItem[];
  onQty: (id: string, d: number) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className={styles.stepContent}>
      <div className={styles.stepHeading}>
        <h2>Order Review</h2>
        <p>Review and adjust your selected items before proceeding.</p>
      </div>
      {items.length === 0 ? (
        <p className={styles.emptyReview}>Your order is empty.</p>
      ) : (
        <div className={styles.reviewList}>
          {items.map((item) => (
            <div key={item.id} className={styles.reviewCard}>
              <div className={styles.reviewImg}>
                <Image src={item.image} alt={item.name} width={90} height={90} style={{ objectFit: "contain" }} />
              </div>
              <div className={styles.reviewInfo}>
                <p className={styles.reviewName}>{item.name}</p>
                <p className={styles.reviewPrice}>{item.price}</p>
                <div className={styles.qtyRow}>
                  <span className={styles.qtyLabel}>Quantity</span>
                  <div className={styles.qtyBox}>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, -1)} disabled={item.quantity <= 1} aria-label="Decrease">−</button>
                    <span className={styles.qtyNum}>{item.quantity}</span>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, 1)} disabled={item.quantity >= 50} aria-label="Increase">+</button>
                  </div>
                </div>
              </div>
              <button className={styles.reviewRemove} onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Step 3 — Quotation Request ───────────────────────────────────────────────

function Step3({ form, items }: { form: FormData; items: CartItem[] }) {
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className={styles.stepContent}>
      <div className={styles.stepHeading}>
        <h2>Request Your Quotation</h2>
        <p>Review your order details below and submit your quotation request. Our team will review your requirements and contact you shortly.</p>
      </div>

      <div className={styles.summarySection}>
        <h3 className={styles.summaryTitle}>Customer Information</h3>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryRow}><span>Full Name</span><strong>{form.fullName}</strong></div>
          <div className={styles.summaryRow}><span>Company</span><strong>{form.company}</strong></div>
          <div className={styles.summaryRow}><span>Contact Number</span><strong>{form.contact}</strong></div>
          <div className={styles.summaryRow}><span>Email</span><strong>{form.email}</strong></div>
          <div className={`${styles.summaryRow} ${styles.fullWidth}`}><span>Address</span><strong>{form.address}</strong></div>
          <div className={styles.summaryRow}><span>City</span><strong>{form.city}</strong></div>
          <div className={styles.summaryRow}><span>State</span><strong>{form.state}</strong></div>
          {form.notes && <div className={`${styles.summaryRow} ${styles.fullWidth}`}><span>Notes</span><strong>{form.notes}</strong></div>}
        </div>
      </div>

      <div className={styles.summarySection}>
        <h3 className={styles.summaryTitle}>Selected Products</h3>
        <div className={styles.productTable}>
          <div className={styles.productTableHead}>
            <span>Product</span>
            <span>Qty</span>
            <span>Unit Price</span>
          </div>
          {items.map((item) => (
            <div key={item.id} className={styles.productTableRow}>
              <div className={styles.productTableItem}>
                <div className={styles.productTableImg}>
                  <Image src={item.image} alt={item.name} width={48} height={48} style={{ objectFit: "contain" }} />
                </div>
                <span className={styles.productTableName}>{item.name}</span>
              </div>
              <span className={styles.productTableQty}>{item.quantity}</span>
              <span className={styles.productTablePrice}>{item.price}</span>
            </div>
          ))}
        </div>
        <div className={styles.totalRow}>
          <span>Total Items</span>
          <strong>{totalQty}</strong>
        </div>
        <div className={`${styles.totalRow} ${styles.grandTotal}`}>
          <span>Grand Total</span>
          <strong>To be confirmed by our team</strong>
        </div>
      </div>
    </div>
  );
}

// ── Quotation Wizard ─────────────────────────────────────────────────────────

function QuotationWizard({
  items,
  onItemsChange,
  onClose,
  onSubmit,
}: {
  items: CartItem[];
  onItemsChange: (next: CartItem[]) => void;
  onClose: () => void;
  onSubmit: (form: FormData, items: CartItem[]) => Promise<void>;
}) {
  const [step, setStep] = useState(1);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState<FormData>({ ...initialForm });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  function close() {
    setClosing(true);
    setTimeout(onClose, 210);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);

  // Scroll body to top on step change
  useEffect(() => { bodyRef.current?.scrollTo({ top: 0 }); }, [step]);

  function updateForm(k: keyof FormData, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function changeQty(id: string, delta: number) {
    const next = items.map((item) =>
      item.id === id ? { ...item, quantity: Math.min(50, Math.max(1, item.quantity + delta)) } : item
    );
    onItemsChange(next);
  }

  function removeItem(id: string) {
    const next = items.filter((item) => item.id !== id);
    onItemsChange(next);
    if (next.length === 0) close();
  }

  async function handleSubmit() {
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      await onSubmit(form, items);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not send your quote request right now. Please try again.");
      setSubmitting(false);
    }
  }

  const canStep1 = Boolean(
    form.fullName.trim() && form.company.trim() && form.contact.trim() &&
    form.email.trim() && form.address.trim() && form.city.trim() && form.state.trim()
  );

  const stepTitles = ["Project Details", "Order Review", "Quotation Request"];

  return (
    <div
      className={`${styles.wizardOverlay} ${closing ? styles.wizardOverlayOut : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className={`${styles.wizardBox} ${closing ? styles.wizardBoxOut : ""}`}>
        {/* Close */}
        <button className={styles.wizardClose} onClick={close} aria-label="Close wizard">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="3" y1="3" x2="13" y2="13" /><line x1="13" y1="3" x2="3" y2="13" /></svg>
        </button>

        {/* Step indicator */}
        <div className={styles.wizardHeader}>
          <StepIndicator step={step} />
        </div>

        {/* Scrollable body */}
        <div className={styles.wizardBody} ref={bodyRef}>
          {step === 1 && <Step1 form={form} onChange={updateForm} />}
          {step === 2 && <Step2 items={items} onQty={changeQty} onRemove={removeItem} />}
          {step === 3 && <Step3 form={form} items={items} />}
        </div>

        {/* Footer navigation */}
        <div className={styles.wizardFooter}>
          {submitError && <p style={{ color: "#b91c1c", margin: 0, fontWeight: 500 }}>{submitError}</p>}
          {step > 1 ? (
            <button className={styles.prevBtn} onClick={() => setStep((s) => s - 1)}>← Previous</button>
          ) : (
            <span />
          )}
          {step < 3 && (
            <button
              className={styles.nextBtn}
              disabled={step === 1 ? !canStep1 : items.length === 0}
              onClick={() => setStep((s) => s + 1)}
            >
              {step === 2 ? "Confirm Order →" : "Next →"}
            </button>
          )}
          {step === 3 && (
            <button className={styles.submitBtn} onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Sending..." : "Submit Quote Request"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Success Popup ────────────────────────────────────────────────────────────

function SuccessPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);

  return (
    <div className={styles.wizardOverlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`${styles.wizardBox} ${styles.successBox}`}>
        <div className={styles.successIcon}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 18 14 26 30 10" /></svg>
        </div>
        <h2 className={styles.successHeading}>Quotation Request Submitted</h2>
        <p className={styles.successText}>
          Thank you for your request.<br />
          Our team will review your selected products and contact you shortly with a customized quotation.
        </p>
        <Link href="/store" className={styles.submitBtn} style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

// ── Cart Page ────────────────────────────────────────────────────────────────

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("solarCart");
    setItems(stored ? JSON.parse(stored) : []);
    setLoaded(true);
  }, []);

  function save(next: CartItem[]) {
    setItems(next);
    localStorage.setItem("solarCart", JSON.stringify(next));
  }

  function changeQty(id: string, delta: number) {
    save(items.map((item) =>
      item.id === id ? { ...item, quantity: Math.min(50, Math.max(1, item.quantity + delta)) } : item
    ));
  }

  function removeItem(id: string) {
    save(items.filter((item) => item.id !== id));
  }

  function handleWizardItemsChange(next: CartItem[]) {
    save(next);
  }

  async function handleSubmit(form: FormData, quoteItems: CartItem[]) {
    await submitEnquiry("Store Quote", {
      ...form,
      selectedProducts: quoteItems.map((item) => `${item.name} x ${item.quantity}`).join(", "),
      items: quoteItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      quantity: quoteItems.reduce((total, item) => total + item.quantity, 0),
    });
    setWizardOpen(false);
    save([]);
    setShowSuccess(true);
  }

  const hasItems = items.length > 0;

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <Link href="/" aria-label="Home"><img src="/assets/Navbar/GS.png" alt="" className="navbar-ig" /></Link>
        <nav>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
          <Link href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        </nav>
      </header>

      <section className={styles.cartSection}>
        {loaded && (
          <>
            <h1 className={styles.pageHeading}>Your Cart</h1>

            {hasItems ? (
              <div className={styles.itemList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.itemWrapper}>
                    <div className={styles.itemCard}>
                      <div className={styles.itemImg}>
                        <Image src={item.image} alt={item.name} width={110} height={110} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                      </div>
                      <div className={styles.itemInfo}>
                        <h2 className={styles.itemName}>{item.name}</h2>
                        <p className={styles.itemPrice}>{item.price}</p>
                        <div className={styles.qtyRow}>
                          <span className={styles.qtyLabel}>Quantity</span>
                          <div className={styles.qtyBox}>
                            <button className={styles.qtyBtn} onClick={() => changeQty(item.id, -1)} disabled={item.quantity <= 1} aria-label="Decrease quantity">−</button>
                            <span className={styles.qtyNum}>{item.quantity}</span>
                            <button className={styles.qtyBtn} onClick={() => changeQty(item.id, 1)} disabled={item.quantity >= 50} aria-label="Increase quantity">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.removeRow}>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove Item</button>
                    </div>
                  </div>
                ))}

                <div className={styles.cartActions}>
                  <Link href="/store" className={styles.continueBtn}>Continue Shopping →</Link>
                  <button className={styles.quoteBtn} onClick={() => setWizardOpen(true)}>Get a Quote →</button>
                </div>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.cartIcon}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <p className={styles.subheading}>Items added to your cart will appear here.</p>
                <p className={styles.emptyMsg}>Your cart is currently empty.</p>
                <Link href="/store" className={styles.continueBtn}>Continue Shopping →</Link>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />

      {wizardOpen && (
        <QuotationWizard
          items={items}
          onItemsChange={handleWizardItemsChange}
          onClose={() => setWizardOpen(false)}
          onSubmit={handleSubmit}
        />
      )}

      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </main>
  );
}
