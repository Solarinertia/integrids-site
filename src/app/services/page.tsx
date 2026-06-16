"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./services.module.css";

type ServiceItem = [title: string, description: string, image: string, bullets?: string[]];
type ServiceGroup = { title: string; layout: string; id?: string; services: ServiceItem[] };

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
      <Image className="brand-logo" src="/assets/Navbar/Integrids logo transparent.png" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className={styles.sectionTitle}>{children}<span /></h2>;
}

function Footer() {
  return (
    <footer>
      <Logo />
      <div><b>QUICK LINKS</b><p><Link href="/">Home</Link><br /><Link href="/about-us">About Us</Link><br /><Link href="/services">Services</Link><br /><Link href="/store">Store</Link></p></div>
      <div><b>SERVICES</b><p><Link href="/services#cleaning-services">Robotic Cleaning</Link><br /><Link href="/services#cleaning-services">Manual Cleaning</Link><br /><Link href="/services#inspection-services">Inspection Services</Link><br /><Link href="/services#performance-support-services">Performance Optimization</Link><br /><Link href="/services#performance-support-services">AMC Contracts</Link></p></div>
      <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.com">info@integrids.com</a><br /><a href="https://www.google.com/maps/place/https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219SOLARINERTIA+POWER+PVT+LTD/@20.3227641,72.9713222,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/channel/UC93y6ggaGpfJMM4ANi4KKsw/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

export default function ServicesPage() {
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
        <img src="/assets/Navbar/IG.png" alt="" className="navbar-ig" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link className="active" href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Expert Care. Maximum Power.<br />Sustained Performance.</h1>
          <p>Comprehensive cleaning, inspection, maintenance and performance solutions for solar assets.</p>
          <span />
        </div>
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
                      <Link href="/book-cleaning" className={styles.requestService}>Request Service →</Link>
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
    </main>
  );
}
