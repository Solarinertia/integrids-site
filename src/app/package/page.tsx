"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./package.module.css";

const packageDetails = [
  {
    name: "SHIELD",
    subtitle: "Clean",
    tone: "basic" as const,
    intro: "Reliable solar panel cleaning to maintain optimal energy generation and system efficiency.",
    includes: [
      "Standard Solar Panel Cleaning",
      "Dust, Dirt & Debris Removal",
      "Basic Inspection & Performance Check",
      "Service Completion Report",
    ],
    ideal: "Ideal for residential rooftops and small commercial solar power installations.",
  },
  {
    name: "VANGUARD",
    subtitle: "Clean + Maintain",
    tone: "essential" as const,
    intro: "Professional cleaning combined with preventive maintenance to reduce downtime and extend system life.",
    includes: [
      "Everything in Shield, enhanced with:",
      "Standard & Deep Surface Cleaning",
      "Preventive Maintenance Inspection",
      "Electrical, Cable & Connector Inspection",
      "Structure & Equipment Inspection",
      "Detailed Maintenance Report",
    ],
    ideal: "Commercial rooftops, warehouses, institutions and medium-scale solar plants.",
  },
  {
    name: "TITAN",
    subtitle: "Clean + Maintain + Monitor",
    tone: "advanced" as const,
    intro: "Complete solar asset care designed for maximum generation, reliability and long-term performance.",
    includes: [
      "Everything in Vanguard, enhanced with",
      "Advanced Cleaning by Certified Team",
      "Performance & Yield Analysis",
      "Generation Loss Assessment",
      "Performance Reporting & Maintenance Planning",
      "Dedicated Support Team",
    ],
    ideal: "Industrial plants, large commercial facilities and utility-scale solar assets.",
  },
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

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className={styles.quoteSuccess}>
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#068b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
        <h3>Thank you for your enquiry.</h3>
        <p>Our team will review your requirements and share a customised proposal shortly.</p>
      </div>
    );
  }
  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Name</label>
          <input type="text" placeholder="Your full name" required />
        </div>
        <div className={styles.formField}>
          <label>Company Name</label>
          <input type="text" placeholder="Your company" />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Email Address</label>
          <input type="email" placeholder="you@company.com" required />
        </div>
        <div className={styles.formField}>
          <label>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Plant Capacity (kWp / MWp)</label>
          <input type="text" placeholder="e.g. 500 kWp" />
        </div>
        <div className={styles.formField}>
          <label>Location</label>
          <input type="text" placeholder="City, State" />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Select Package</label>
          <select>
            <option value="">— Choose a package —</option>
            <option value="shield">SHIELD (Protect)</option>
            <option value="vanguard">VANGUARD (Protect + Maintain)</option>
            <option value="titan">TITAN (Protect + Maintain + Perform)</option>
          </select>
        </div>
        <div className={styles.formField}>
          <label>Service Schedule</label>
          <select>
            <option value="">— Choose a schedule —</option>
            <option value="monthly">Monthly Care (1 Cleaning / Month)</option>
            <option value="enhanced">Enhanced Care (2 Cleanings / Month)</option>
            <option value="peak">Peak Performance Care (4 Cleanings / Month)</option>
          </select>
        </div>
      </div>
      <div className={styles.formField}>
        <label>Message</label>
        <textarea rows={4} placeholder="Tell us anything specific about your site or requirements…" />
      </div>
      <button type="submit" className={styles.quoteSubmit}>Request Proposal</button>
    </form>
  );
}

export default function PackagePage() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-scale,.reveal-fast");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link className="active" href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Choose the Right Solar Care Plan</h1>
        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <h2 className={styles.sectionTitle}>Packages<span /></h2>
        <div className={styles.packageGrid}>
          {packageDetails.map((plan) => (
            <article className={`${styles.packageCard} ${plan.name === "VANGUARD" ? styles.mostPopular : ""} reveal-scale`} key={plan.name}>
              <div className={`${styles.packageHead} ${styles[plan.tone]}`}>
                <h3>{plan.name}</h3>
                <p>{plan.subtitle}</p>
              </div>
              <div className={styles.packageBody}>
                <p>{plan.intro}</p>
                <b>Includes</b>
                <ul>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                <strong>Ideal For</strong>
                <p className={styles.idealText}>{plan.ideal}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <h2 className={styles.sectionTitle}>Additional Benefits<span /></h2>
        <div className={styles.benefitsGrid}>

          {/* Card 1 — Vanguard */}
          <article className={`${styles.benefitCard} reveal-scale`}>
            <div className={`${styles.benefitHead} ${styles.essential}`}>
              <h3>Vanguard</h3>
              <p>Included Once a Year</p>
            </div>
            <div className={styles.benefitBody}>
              <ul>
                <li>Preventive Maintenance</li>
                <li>Maintenance Recommendations</li>
                <li>Detailed Maintenance Reports</li>
              </ul>
            </div>
          </article>

          {/* Card 2 — Titan */}
          <article className={`${styles.benefitCard} reveal-scale`}>
            <div className={`${styles.benefitHead} ${styles.advanced}`}>
              <h3>Titan</h3>
              <p>Included Twice a Year</p>
            </div>
            <div className={styles.benefitBody}>
              <ul>
                <li>Preventive Maintenance</li>
                <li>Maintenance Insights & Reporting</li>
                <li>Performance Optimization & Analysis</li>
                <li>Monthly Performance Reports</li>
                <li>Annual Maintenance Planning</li>
                <li>Dedicated Support Team</li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <h2 className={styles.sectionTitle}>Available Annual Service Frequencies<span /></h2>
        <div className={styles.freqGrid}>

          {/* Card 1 */}
          <article className={`${styles.freqCard} reveal-scale`}>
            <div className={styles.freqIcon}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/><line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5"/><line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className={styles.freqTitle}>Monthly Care</h3>
            <p className={styles.freqRate}>1 Cleaning / Month</p>
            <div className={styles.freqDivider} />
            <p className={styles.freqLabel}>Suitable for</p>
            <ul className={styles.freqList}>
              <li>Residential rooftops</li>
              <li>Low dust environments</li>
              <li>Routine maintenance</li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className={`${styles.freqCard} reveal-scale`}>
            <div className={styles.freqIcon}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/><line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5"/><line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5"/>
                <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className={styles.freqTitle}>Enhanced Care</h3>
            <p className={styles.freqRate}>2 Cleanings / Month</p>
            <div className={styles.freqDivider} />
            <p className={styles.freqLabel}>Suitable for</p>
            <ul className={styles.freqList}>
              <li>Commercial installations</li>
              <li>Moderate dust exposure</li>
              <li>Improved energy performance</li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className={`${styles.freqCard} reveal-scale`}>
            <div className={styles.freqIcon}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/><line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5"/><line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5"/>
                <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/><line x1="16" y1="18" x2="16" y2="18" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className={styles.freqTitle}>Peak Performance Care</h3>
            <p className={styles.freqRate}>4 Cleanings / Month</p>
            <div className={styles.freqDivider} />
            <p className={styles.freqLabel}>Suitable for</p>
            <ul className={styles.freqList}>
              <li>Industrial facilities</li>
              <li>Utility-scale solar plants</li>
              <li>High-soiling environments</li>
            </ul>
          </article>

        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <h2 className={styles.sectionTitle}>Compare Plans<span /></h2>
        <div className={`${styles.compareWrap} reveal-scale`}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th className={styles.featureCol}>Feature</th>
                <th><span className={`${styles.planBadge} ${styles.basic}`}>SHIELD</span></th>
                <th><span className={`${styles.planBadge} ${styles.essential}`}>VANGUARD</span></th>
                <th><span className={`${styles.planBadge} ${styles.advanced}`}>TITAN</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Solar Cleaning",              true,  true,  true ],
                ["Visual Inspection",           true,  true,  true ],
                ["Performance Assessment",      true,  true,  true ],
                ["Preventive Maintenance",      false, true,  true ],
                ["Electrical Inspection",       false, true,  true ],
                ["Structure Inspection",        false, true,  true ],
                ["Inverter Inspection",         false, true,  true ],
                ["Performance Monitoring",      false, false, true ],
                ["Yield Analysis",              false, false, true ],
                ["Generation Loss Assessment",  false, false, true ],
                ["Dedicated Support",           false, false, true ],
              ].map(([feature, shield, vanguard, titan], i) => (
                <tr key={i} className={i % 2 === 0 ? styles.rowEven : ""}>
                  <td className={styles.featureCell}>{feature as string}</td>
                  <td className={styles.checkCell}>{shield  ? <span className={styles.yes}>✓</span> : <span className={styles.no}>—</span>}</td>
                  <td className={styles.checkCell}>{vanguard ? <span className={styles.yes}>✓</span> : <span className={styles.no}>—</span>}</td>
                  <td className={styles.checkCell}>{titan   ? <span className={styles.yes}>✓</span> : <span className={styles.no}>—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <h2 className={styles.sectionTitle}>Get a Quote<span /></h2>
        <div className={`${styles.quoteCard} reveal-scale`}>

          {/* Left — pitch */}
          <div className={styles.quoteLeft}>
            <h3 className={styles.quoteHeading}>Ready to Protect Your Solar Assets?</h3>
            <p className={styles.quoteSub}>Tell us about your solar plant and we'll recommend the best package and service schedule for your needs.</p>
            <ul className={styles.trustList}>
              <li><span className={styles.trustCheck}>✓</span>Fast Response</li>
              <li><span className={styles.trustCheck}>✓</span>Expert Consultation</li>
              <li><span className={styles.trustCheck}>✓</span>Customized Proposal</li>
            </ul>
          </div>

          {/* Right — form */}
          <div className={styles.quoteRight}>
            <QuoteForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
