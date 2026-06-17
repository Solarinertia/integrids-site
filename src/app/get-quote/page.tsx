"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./get-quote.module.css";

const fallback = "Not selected";

function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/IIII LOGO.jpg" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function Footer() {
  return (
    <footer>
      <Logo />
      <div><b>QUICK LINKS</b><p><Link href="/">Home</Link><br /><Link href="/about-us">About Us</Link><br /><Link href="/services">Services</Link><br /><Link href="/store">Store</Link></p></div>
      <div><b>SERVICES</b><p><Link href="/services#cleaning-services">Robotic Cleaning</Link><br /><Link href="/services#cleaning-services">Manual Cleaning</Link><br /><Link href="/services#inspection-services">Inspection Services</Link><br /><Link href="/services#performance-support-services">Performance Optimization</Link><br /><Link href="/services#performance-support-services">AMC Contracts</Link></p></div>
      <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.com">info@integrids.com</a><br /><a href="https://www.google.com/maps/place/https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219SOLARINERTIA+POWER+PVT+LTD/@20.3227641,72.9713222,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

export default function GetQuotePage() {
  const [summary] = useState(() => {
    if (typeof window === "undefined") {
      return {
        cleaningType: fallback,
        panels: fallback,
        preferredDate: fallback,
      };
    }

    return {
      cleaningType: window.localStorage.getItem("bookingCleaningType") || fallback,
      panels: window.localStorage.getItem("bookingPanels") || fallback,
      preferredDate: window.localStorage.getItem("bookingPreferredDate") || fallback,
    };
  });

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <img src="/assets/Navbar/IIG.jpg" alt="" className="navbar-ig" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
          <Link className="active" href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className={styles.wrap}>
        <div className={styles.steps}>
          <span className={styles.completedStep}><b>✓</b>Details</span>
          <i />
          <span className={styles.completedStep}><b>✓</b>Pick slot</span>
          <i />
          <span className={styles.activeStep}><b>3</b>Get a Quote</span>
        </div>

        <section className={styles.card}>
          <div className={styles.checkIcon}>✓</div>
          <h1>Request submitted!</h1>
          <p className={styles.thanks}>Thank you for your interest in Integrids.<br />Our team will review your requirements and get<br />back to you with a customized quotation.</p>

          <div className={styles.divider} />

          <div className={styles.summaryBlock}>
            <h2>Request summary</h2>
            <div className={styles.summaryRow}>
              <span>⌘</span>
              <b>Cleaning type</b>
              <strong>{summary.cleaningType}</strong>
            </div>
            <div className={styles.summaryRow}>
              <span>▦</span>
              <b>Number of panels</b>
              <strong>{summary.panels}</strong>
            </div>
            <div className={styles.summaryRow}>
              <span>▣</span>
              <b>Preferred date</b>
              <strong>{summary.preferredDate}</strong>
            </div>
          </div>

          <div className={styles.contactBox}>
            <span className={styles.contactIcon}>☎</span>
            <div>
              <b>We will contact you shortly.</b>
              <p><span>⌕</span> +91 8424097069 <i /> <span>✉</span> info@solarinertia.com</p>
            </div>
          </div>

          <div className={styles.actions}>
            <Link className="button" href="/">Return to Home <span>→</span></Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
