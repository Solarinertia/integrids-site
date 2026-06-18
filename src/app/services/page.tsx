"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./services.module.css";

type ServiceItem = [title: string, description: string, image: string, bullets?: string[]];
type ServiceGroup = { title: string; layout: string; id?: string; services: ServiceItem[] };

const SERVICE_LINKS: Record<string, string> = {
  "Robotic Cleaning":        "/store#svc-robotic-cleaning",
  "Manual Cleaning":         "/store#svc-manual-cleaning",
  "Drone Inspection":        "/store#svc-drone-inspection",
  "Electrical Inspection":   "/store#svc-electrical-inspection",
  "Thermal Inspection":      "/store#svc-thermal-inspection",
  "Preventive Maintenance":  "/store#svc-preventive-maintenance",
  "Performance Optimization":"/store#svc-performance-optimization",
  "Remote Monitoring":       "/store#svc-performance-monitoring",
  "AMC Contracts":           "/package",
  "Support & Consultation":  "/store#svc-technical-consultation",
};

const QUOTE_POPUP_SERVICES = new Set(["Corrective Maintenance", "Repair & Reinstall"]);

const STORE_CARD_IDS: Record<string, string> = {
  "Preventive Maintenance":   "svc-preventive-maintenance",
  "Performance Optimization": "svc-performance-optimization",
  "Remote Monitoring":        "svc-performance-monitoring",
  "Support & Consultation":   "svc-technical-consultation",
};

type QuoteForm = {
  fullName: string; company: string; contact: string; email: string;
  service: string; location: string; message: string;
};

function ServiceQuoteModal({ serviceName, onClose }: { serviceName: string; onClose: () => void }) {
  const [form, setForm] = useState<QuoteForm>({
    fullName: "", company: "", contact: "", email: "",
    service: serviceName, location: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);

  function close() {
    setClosing(true);
    setTimeout(onClose, 200);
  }

  function set(k: keyof QuoteForm, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  const canSubmit = Boolean(
    form.fullName.trim() && form.company.trim() && form.contact.trim() &&
    form.email.trim() && form.service.trim() && form.location.trim()
  );

  return (
    <div
      className={`${styles.sqOverlay} ${closing ? styles.sqOverlayOut : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className={`${styles.sqBox} ${closing ? styles.sqBoxOut : ""}`}>
        <button className={styles.sqClose} onClick={close} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
        </button>

        {submitted ? (
          <div className={styles.sqSuccess}>
            <div className={styles.sqSuccessIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 11 21 24 7"/></svg>
            </div>
            <h2>Request Submitted!</h2>
            <p>Thank you for reaching out. Our team will review your requirements and contact you shortly.</p>
            <button className={styles.sqSubmitBtn} onClick={close}>Close</button>
          </div>
        ) : (
          <>
            <div className={styles.sqHeader}>
              <h2>Request Service Quote</h2>
              <p>Fill in your details and we'll get back to you with a customized quote.</p>
            </div>
            <div className={styles.sqForm}>
              <div className={styles.sqGrid}>
                <div className={styles.sqField}>
                  <label>Full Name <em>*</em></label>
                  <input value={form.fullName} onChange={e => set("fullName", e.target.value)} placeholder="Enter your full name" />
                </div>
                <div className={styles.sqField}>
                  <label>Company Name <em>*</em></label>
                  <input value={form.company} onChange={e => set("company", e.target.value)} placeholder="Enter company name" />
                </div>
                <div className={styles.sqField}>
                  <label>Contact Number <em>*</em></label>
                  <input inputMode="numeric" value={form.contact} onChange={e => set("contact", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10-digit number" maxLength={10} />
                </div>
                <div className={styles.sqField}>
                  <label>Email Address <em>*</em></label>
                  <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@example.com" />
                </div>
                <div className={`${styles.sqField} ${styles.sqFull}`}>
                  <label>Service Required <em>*</em></label>
                  <input value={form.service} onChange={e => set("service", e.target.value)} placeholder="Service name" />
                </div>
                <div className={`${styles.sqField} ${styles.sqFull}`}>
                  <label>Location <em>*</em></label>
                  <input value={form.location} onChange={e => set("location", e.target.value)} placeholder="City, State" />
                </div>
                <div className={`${styles.sqField} ${styles.sqFull}`}>
                  <label>Message / Requirement Details <span className={styles.sqOptional}>(Optional)</span></label>
                  <textarea value={form.message} onChange={e => set("message", e.target.value)} placeholder="Describe your requirements..." rows={3} />
                </div>
              </div>
              <div className={styles.sqActions}>
                <button className={styles.sqSubmitBtn} disabled={!canSubmit} onClick={() => setSubmitted(true)}>
                  Submit Request
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Cleaning Services",
    layout: styles.twoCards,
    id: "cleaning-services",
    services: [
      ["Robotic Cleaning", "AI-powered autonomous cleaning for large-scale solar plants with water-efficient operation.", "/assets/Service Page/Robotic Cleaning 3.png", ["Autonomous Operation", "Water Efficient", "Utility Scale"]],
      ["Manual Cleaning", "Professional manual cleaning for rooftops and accessible solar systems by trained technicians.", "/assets/Service Page/Manual Cleaning 4.png", ["Trained Technicians", "Safe Panel Handling", "Detailed Cleaning"]],
    ],
  },
  {
    title: "Inspection Services",
    layout: styles.threeCards,
    id: "inspection-services",
    services: [
      ["Drone Inspection", "High-resolution drone imaging to detect faults and performance losses.", "/assets/Service Page/Drone Inspection.png", ["High Resolution Mapping", "Defect Detection", "Plant Health Analysis"]],
      ["Electrical Inspection", "Detailed electrical checks to ensure safety, reliability and optimal performance.", "/assets/Service Page/Electical inspection.png", ["String Testing", "Voltage & Current Checks", "Cable & Connection Check"]],
      ["Thermal Inspection", "Identify hotspots and thermal anomalies that impact performance and safety.", "/assets/Service Page/Thermal Inspection.png", ["Hotspot Detection", "Module Fault Identification", "Thermal Reporting"]],
    ],
  },
  {
    title: "Maintenance Services",
    layout: styles.threeCards,
    services: [
      ["Preventive Maintenance", "Regular inspections and servicing to prevent issues and extend system life.", "/assets/Service Page/Preventive Maintenance.png", ["Module & Structure Check", "Inverter & Electrical Checks", "Cable & Earthing Inspection"]],
      ["Corrective Maintenance", "Quick issue resolution to minimize downtime and restore performance.", "/assets/Service Page/Corrective Maintenance.png", ["Fault Rectification", "Component Replacement", "Emergency Support"]],
      ["Repair & Reinstall", "Expert repairs and reinstallation for damaged or underperforming components.", "/assets/Service Page/Repair & Reinstall.png", ["Broken Module Replacement", "Reinstallation Services", "Structure Repair"]],
    ],
  },
  {
    title: "Performance & Support Services",
    layout: styles.fourCards,
    id: "performance-support-services",
    services: [
      ["Performance Optimization", "Data analysis and system tuning to maximize energy generation.", "/assets/Service Page/Performance Optimization.png", ["PR Analysis", "Generation Analysis", "Loss Analysis", "Actionable Recommendation"]],
      ["Remote Monitoring", "24/7 remote monitoring for real-time insights, alerts and reporting.", "/assets/Service Page/Remote Monitoring.png", ["Inverter Monitoring", "Generation Tracking", "Alert Management", "Monthly Reports"]],
      ["AMC Contracts", "Comprehensive Annual Maintenance Contracts for hassle-free operations.", "/assets/Service Page/AMC Contract.png", ["Custom AMC Plans", "Routine Maintenance", "Priority Support", "Annual Performance Review"]],
      ["Support & Consultation", "Expert guidance and technical support whenever your solar site needs it.", "/assets/Service Page/Support & Consultation.png", ["Technical Consultation", "Performance Review", "Support Team Access", "Site Visit Support"]],
    ],
  },
];

const packages = [
  {
    name: "SHIELD",
    subtitle: "Protect",
    tone: styles.basicPackage,
    featureClass: styles.greenFeatures,
    icon: <path d="M12 3L5 6.5v5c0 4.55 3.08 7.16 7 9 3.92-1.84 7-4.45 7-9v-5L12 3z" />,
    intro: "Reliable solar panel cleaning designed to maintain energy generation and system efficiency.",
    features: ["Panel Cleaning", "Visual Inspection", "Service Report"],
  },
  {
    name: "VANGUARD",
    subtitle: "Clean + Maintain",
    tone: styles.essentialPackage,
    featureClass: styles.blueFeatures,
    icon: (
      <>
        <path d="M12 3L5 6.5v5c0 4.55 3.08 7.16 7 9 3.92-1.84 7-4.45 7-9v-5L12 3z" />
        <polyline points="13 8.5 11 12 13 12 11 15.5" />
      </>
    ),
    intro: "Enhanced asset care combining cleaning and preventive maintenance to improve reliability and extend system life.",
    features: ["Enhanced Panel Cleaning", "Preventive Maintenance", "Maintenance Reports"],
  },
  {
    name: "TITAN",
    subtitle: "Clean + Maintain + Optimize",
    tone: styles.advancedPackage,
    featureClass: styles.darkFeatures,
    icon: (
      <>
        <path d="M12 3L5 6.5v5c0 4.55 3.08 7.16 7 9 3.92-1.84 7-4.45 7-9v-5L12 3z" />
        <path d="M9 14l1.5-2.5L12 13l1.5-1.5L15 14" />
      </>
    ),
    intro: "Comprehensive asset performance management with monitoring, maintenance, and optimization for long-term value.",
    features: ["Comprehensive Panel Cleaning", "Performance Monitoring", "Performance Reports"],
  },
];


function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/LOGO.png" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className={styles.sectionTitle}>{children}<span /></h2>;
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

export default function ServicesPage() {
  const router = useRouter();
  const [quoteService, setQuoteService] = useState<string | null>(null);

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
          <Link className="active" href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
          <Link href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <video
          className={styles.heroBg}
          src="/assets/Service Page/Hero section.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <section className={`${styles.wrap} reveal`}>
        <SectionTitle>Our Solar Services</SectionTitle>
        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <section className={`${styles.group} reveal`} key={group.title} id={group.id}>
              <div className={styles.groupHeading}><i /><h3>{group.title}</h3><i /></div>
              <div className={`${styles.serviceGrid} ${group.layout}`}>
                {group.services.map((service) => (
                  <article
                    className={`${styles.serviceCard} reveal-scale`}
                    key={service[0]}
                    data-title={service[0]}
                  >
                    <Image
                      src={service[2]}
                      alt={service[0]}
                      fill
                      sizes="(max-width:680px) 100vw, (max-width:980px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h4>{service[0]}</h4>
                      <p>{service[1]}</p>
                      {service[3] && (
                        <ul className={styles.serviceBullets}>
                          {service[3].map((item) => <li key={item}>✓ {item}</li>)}
                        </ul>
                      )}
                      {QUOTE_POPUP_SERVICES.has(service[0]) ? (
                        <button className={styles.requestService} onClick={() => setQuoteService(service[0])}>Request Service →</button>
                      ) : STORE_CARD_IDS[service[0]] ? (
                        <button className={styles.requestService} onClick={() => router.push(`/store?card=${STORE_CARD_IDS[service[0]]}&t=${Date.now()}`)}>Request Service →</button>
                      ) : (
                        <Link href={SERVICE_LINKS[service[0]] ?? "/book-cleaning"} className={styles.requestService}>Request Service →</Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={`${styles.wrap} reveal`}>
        <SectionTitle>Packages</SectionTitle>
        <p className={styles.packageSubtitle}>Protect, maintain, and optimize your solar assets with tailored annual service programs.</p>
        <div className={styles.packageGrid}>
          {packages.map((item) => (
            <article className={`${styles.packageCard} ${item.name === "VANGUARD" ? styles.mostPopular : ""} reveal-scale`} key={item.name}>
              <div className={`${styles.packageHead} ${item.tone}`}>
                <div className={styles.packageHeadRow}>
                  <svg aria-hidden="true" className={styles.packageIcon} fill="none" stroke="rgba(255,255,255,0.88)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">{item.icon}</svg>
                  <h3>{item.name}</h3>
                </div>
                <p>{item.subtitle}</p>
              </div>
              <div className={styles.packageBody}>
                <p>{item.intro}</p>
                <b>Includes</b>
                <ul className={item.featureClass}>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.packageNote}>All plans are annual service programs designed to keep your solar assets clean, reliable and performing at their best.</p>
        <div className={styles.packageAction}>
          <Link className="button" href="/package">Explore Plans</Link>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.enquiry} reveal`}>
        <div>
          <h2>Ready to Build a Better Solar Care Plan?</h2>
          <p>Tell us your site size, dust level and cleaning needs. Our team will recommend the right service mix for reliable generation.</p>
        </div>
        <Link className="button" href="/#contact">Enquire Now</Link>
      </section>

      <Footer />

      {quoteService && (
        <ServiceQuoteModal serviceName={quoteService} onClose={() => setQuoteService(null)} />
      )}
    </main>
  );
}
