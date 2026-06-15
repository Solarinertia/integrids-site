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
      <Image className="brand-logo" src="/assets/Navbar/Integrids logo transparent.png" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function Footer() {
  return (
    <footer>
      <Logo />
      <div><b>QUICK LINKS</b><p>Home<br />About Us<br />Services<br />Store</p></div>
      <div><b>SERVICES</b><p>Robotic Cleaning<br />Manual Cleaning<br />Inspection Services<br />Performance Optimization<br />AMC Contracts</p></div>
      <div><b>CONTACT US</b><p>8424097069<br />info@integrids.com<br />Silvassa, Gujarat<br />Mumbai, Maharashtra</p></div>
      <div><b>FOLLOW US</b><p className="social">in  ◉  ○</p></div>
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
    window.localStorage.setItem("bookingCleaningType", form.cleaningType);
    window.localStorage.setItem("bookingPanels", form.panels);
    router.push("/pick-slot");
  }

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
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
            <label className={styles.full}>
              <span>◉ WhatsApp number (10 digits)</span>
              <input inputMode="numeric" pattern="[0-9]*" maxLength={10} value={form.whatsappNumber} onChange={(event) => updateWhatsApp(event.target.value)} placeholder="Enter 10-digit WhatsApp number" required />
            </label>
            <label className={styles.full}>
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
