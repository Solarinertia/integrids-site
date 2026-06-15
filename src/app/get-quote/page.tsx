"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./get-quote.module.css";

const fallback = "Not selected";

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
      <div><b>FOLLOW US</b><p className="social">in  â—‰  â—‹</p></div>
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
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
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
