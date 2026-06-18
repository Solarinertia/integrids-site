"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./book-cleaning.module.css";

const requiredFields = [
  "fullName",
  "companyName",
  "whatsappNumber",
  "email",
  "address",
  "panels",
  "cleaningType",
] as const;

type FieldName = typeof requiredFields[number] | "notes";

const initialForm = {
  fullName: "",
  companyName: "",
  whatsappNumber: "",
  email: "",
  address: "",
  panels: "",
  cleaningType: "",
  notes: "",
};

const trustCards = [
  ["♢", "Trained & Insured", "Certified professionals"],
  ["♧", "Eco-Friendly", "Safe for panels & environment"],
  ["◷", "Fast & Reliable", "On-time, every time"],
  ["☏", "Support", "We are here to help"],
];

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
      <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

export default function BookCleaningPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);

  const canPickSlot = useMemo(
    () =>
      requiredFields.every((field) => {
        if (field === "whatsappNumber") return form.whatsappNumber.length === 10;
        return form[field].trim().length > 0;
      }),
    [form],
  );

  function updateField(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  /** Strip non-digits; WhatsApp is capped at 10 digits */
  function updateWhatsApp(value: string) {
    updateField("whatsappNumber", value.replace(/\D/g, "").slice(0, 10));
  }

  function updateNumberField(field: "panels", value: string) {
    updateField(field, value.replace(/\D/g, ""));
  }

  function goToPickSlot() {
    window.localStorage.setItem("bookingDetails", JSON.stringify(form));
    window.localStorage.setItem("bookingCleaningType", form.cleaningType);
    window.localStorage.setItem("bookingPanels", form.panels);
    router.push("/pick-slot");
  }

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
          <Link className="active" href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <h1>Professional cleaning.<br /><em>Peak performance.</em></h1>
          <h2>Remove buildup. Restore efficiency.<br />Protect your solar investment.</h2>
          <div className={styles.heroBenefits}>
            <span><b>♢</b><strong>Better Performance</strong><small>Maximise energy output</small></span>
            <span><b>✓</b><strong>Extend System Life</strong><small>Prevent wear and damage</small></span>
            <span><b>▥</b><strong>Transparent Pricing</strong><small>No hidden costs</small></span>
          </div>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className={styles.steps}>
          <span className={styles.activeStep}><b>1</b>Details</span>
          <i />
          <span><b>2</b>Slot</span>
          <i />
          <span><b>3</b>Get a Quote</span>
        </div>

        <form className={styles.formCard}>
          <h2>Your details</h2>
          <p>So we can contact you and send your quote.</p>

          <div className={styles.fieldGrid}>
            <label>
              <span>♙ Full name</span>
              <input value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} placeholder="Enter your full name" required />
            </label>
            <label>
              <span>▤ Company name</span>
              <input value={form.companyName} onChange={(event) => updateField("companyName", event.target.value)} placeholder="Enter company name" required />
            </label>
            <label>
              <span>◉ WhatsApp number (10 digits)</span>
              <input inputMode="numeric" pattern="[0-9]*" maxLength={10} value={form.whatsappNumber} onChange={(event) => updateWhatsApp(event.target.value)} placeholder="Enter 10-digit WhatsApp number" required />
            </label>
            <label>
              <span>✉ Email address</span>
              <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" required />
            </label>
            <label className={styles.full}>
              <span>⌖ Service address</span>
              <input value={form.address} onChange={(event) => updateField("address", event.target.value)} placeholder="Enter service address" required />
            </label>
          </div>

          <div className={styles.setupTitle}>
            <h2>Tell us about your solar setup</h2>
            <p>We use this to build your personalised, transparent quote.</p>
          </div>

          <div className={styles.fieldGrid}>
            <label>
              <span>⌂ Number of panels</span>
              <input className={styles.noSpinner} inputMode="numeric" pattern="[0-9]*" value={form.panels} onChange={(event) => updateNumberField("panels", event.target.value)} placeholder="12" required />
              <small>₹/panel pricing confirmed after site review</small>
            </label>
            <label>
              <span>✦ Cleaning type</span>
              <select value={form.cleaningType} onChange={(event) => updateField("cleaningType", event.target.value)} required>
                <option value="" disabled>Select cleaning type</option>
                <option value="Manual Cleaning">Manual Cleaning</option>
                <option value="Robotic Cleaning">Robotic Cleaning</option>
              </select>
            </label>
            <label className={styles.full}>
              <span>Notes (Optional)</span>
              <textarea value={form.notes} onChange={(event) => updateField("notes", event.target.value)} placeholder="Roof type, access, gate codes..." />
            </label>
          </div>

          <div className={styles.formActions}>
            <button className="button" type="button" disabled={!canPickSlot} onClick={goToPickSlot}>Pick a Slot →</button>
          </div>
        </form>

        <div className={styles.trustStrip}>
          {trustCards.map((card) => (
            <article key={card[1]}>
              <span>{card[0]}</span>
              <div><b>{card[1]}</b><small>{card[2]}</small></div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
