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
      <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.com">info@integrids.com</a><br /><a href="https://www.google.com/maps/place/SOLARINERTIA+POWER+PVT+LTD/@20.3227691,72.9687473,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [pkg, setPkg] = useState("");
  const [schedule, setSchedule] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = name.trim() !== "" && company.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && capacity.trim() !== "" && location.trim() !== "" && pkg !== "" && schedule !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.quoteSuccess}>
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#068b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
        <h3>Thank you for your message.</h3>
        <p>Our team will review your requirements and share a customised proposal shortly.</p>
      </div>
    );
  }
  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Name</label>
          <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formField}>
          <label>Company Name</label>
          <input type="text" placeholder="Your company" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Email Address</label>
          <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formField}>
          <label>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Plant Capacity (kWp / MWp)</label>
          <input type="text" placeholder="e.g. 500 kWp" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <div className={styles.formField}>
          <label>Location</label>
          <input type="text" placeholder="City, State" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label>Select Package</label>
          <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
            <option value="">— Choose a package —</option>
            <option value="shield">SHIELD (Protect)</option>
            <option value="vanguard">VANGUARD (Protect + Maintain)</option>
            <option value="titan">TITAN (Protect + Maintain + Perform)</option>
          </select>
        </div>
        <div className={styles.formField}>
          <label>Service Schedule</label>
          <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
            <option value="">— Choose a schedule —</option>
            <option value="monthly">Monthly Care (1 Cleaning / Month)</option>
            <option value="enhanced">Enhanced Care (2 Cleanings / Month)</option>
            <option value="peak">Peak Performance Care (4 Cleanings / Month)</option>
          </select>
        </div>
      </div>
      <div className={styles.formField}>
        <label>Message</label>
        <textarea rows={4} placeholder="Tell us anything specific about your site or requirements…" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit" className={styles.quoteSubmit} disabled={!canSubmit}>Request Proposal</button>
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
        <Link href="/" aria-label="Home"><img src="/assets/Navbar/GS.png" alt="" className="navbar-ig" /></Link>
        <nav>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link className="active" href="/package">Package</Link>
          <Link href="/store">Store</Link>
          <Link href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
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
