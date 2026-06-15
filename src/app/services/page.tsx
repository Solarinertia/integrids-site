"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./services.module.css";

type ServiceItem = [title: string, description: string, image: string, bullets?: string[], hideLearnMore?: boolean];
type ServiceGroup = { title: string; layout: string; cardClass?: string; horizontal?: boolean; services: ServiceItem[] };

const serviceGroups: ServiceGroup[] = [
  {
    title: "Cleaning Services",
    layout: styles.cleaningCards,
    cardClass: styles.cleaningHorizontal,
    services: [
      ["Robotic Cleaning", "AI-powered autonomous cleaning for large-scale solar plants with water-efficient operation.", "/assets/Service Page/Robotic Cleaning 3.png", ["Autonomous Operation", "Water Efficient", "Utility Scale"], true],
      ["Manual Cleaning", "Professional manual cleaning for rooftops and accessible solar systems by trained technicians.", "/assets/Service Page/Manual Cleaning 4.png", ["Trained Technicians", "Safe Panel Handling", "Detailed Cleaning"], true],
    ],
  },
  {
    title: "Inspection Services",
    layout: styles.cleaningCards,
    cardClass: `${styles.cleaningHorizontal} ${styles.horizontalTall}`,
    horizontal: true,
    services: [
      ["Drone Inspection", "High-resolution drone imaging to detect faults and performance losses.", "/assets/Service Page/Drone Inspection.png", ["High Resolution Mapping", "Defect Detection", "Plant Health Analysis"], true],
      ["Electrical Inspection", "Detailed electrical checks to ensure safety, reliability and optimal performance.", "/assets/Service Page/Electical inspection.png", ["String Testing", "Voltage & Current Checks", "Cable & Connection Check"], true],
      ["Thermal Inspection", "Identify hotspots and thermal anomalies that impact performance and safety.", "/assets/Service Page/Thermal Inspection.png", ["Hotspot Detection", "Module Fault Identification", "Thermal Reporting"], true],
    ],
  },
  {
    title: "Maintenance Services",
    layout: styles.cleaningCards,
    cardClass: `${styles.cleaningHorizontal} ${styles.horizontalTall}`,
    horizontal: true,
    services: [
      ["Preventive Maintenance", "Regular inspections and servicing to prevent issues and extend system life.", "/assets/Service Page/Preventive Maintenance.png", ["Module & Structure Check", "Inverter & Electrical Checks", "Cable & Earthing Inspection"], true],
      ["Corrective Maintenance", "Quick issue resolution to minimize downtime and restore performance.", "/assets/Service Page/Corrective Maintenance.png", ["Fault Rectification", "Component Replacement", "Emergency Support"], true],
      ["Repair & Reinstall", "Expert repairs and reinstallation for damaged or underperforming components.", "/assets/Service Page/Repair & Reinstall.png", ["Broken Module Replacement", "Reinstallation Services", "Structure Repair"], true],
    ],
  },
  {
    title: "Performance & Support Services",
    layout: styles.cleaningCards,
    cardClass: `${styles.cleaningHorizontal} ${styles.horizontalTall}`,
    horizontal: true,
    services: [
      ["Performance Optimization", "Data analysis and system tuning to maximize energy generation.", "/assets/Service Page/Performance Optimization.png", ["PR Analysis", "Generation Analysis", "Loss Analysis", "Actionable Recommendation"], true],
      ["Remote Monitoring & Diagnostics", "24/7 remote monitoring for real-time insights, alerts and reporting.", "/assets/Service Page/Remote Monitoring.png", ["Inverter Monitoring", "Generation Tracking", "Alert Management", "Monthly Reports"], true],
      ["Annual Maintenance Contracts", "Comprehensive Annual Maintenance Contracts for hassle-free operations.", "/assets/Service Page/AMC Contract.png", ["Custom AMC Plans", "Routine Maintenance", "Priority Support", "Annual Performance Review"], true],
      ["Support & Consultation", "Expert guidance and technical support whenever your solar site needs it.", "/assets/Service Page/Support & Consultation.png", ["Technical Consultation", "Performance Review", "Support Team Access", "Site Visit Support"], true],
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
      <div><b>QUICK LINKS</b><p>Home<br />About Us<br />Services<br />Store</p></div>
      <div><b>SERVICES</b><p>Robotic Cleaning<br />Manual Cleaning<br />Inspection Services<br />Performance Optimization<br />AMC Contracts</p></div>
      <div><b>CONTACT US</b><p>8424097069<br />info@integrids.com<br />Silvassa, Gujarat<br />Mumbai, Maharashtra</p></div>
      <div><b>FOLLOW US</b><p className="social">in  ◉  ◌</p></div>
    </footer>
  );
}

function HorizontalCard({ service, cardClass }: { service: ServiceItem; cardClass: string }) {
  return (
    <article className={`${styles.serviceCard} ${cardClass} reveal-scale`} key={service[0]} data-title={service[0]}>
      <div className={styles.cleaningImgWrap}>
        <Image src={service[2]} alt={service[0]} fill sizes="(max-width:680px) 100vw, 30vw" style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.cleaningContent}>
        <h4>{service[0]}</h4>
        <p>{service[1]}</p>
        {service[3] && <ul className={styles.serviceBullets}>{service[3].map((item) => <li key={item}>✓ {item}</li>)}</ul>}
        <Link href="/book-cleaning" className={styles.requestService}>Request Service →</Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-scale,.reveal-fast");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal-scale:not(.visible)");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [expanded]);

  function toggleGroup(title: string) {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <main className={styles.page}>
      <header>
        <Logo />
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
        <SectionTitle>Services</SectionTitle>
        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <section className={`${styles.group} reveal`} key={group.title}>
              <div className={styles.groupHeading}><i /><h3>{group.title}</h3><i /></div>

              {group.horizontal ? (
                <>
                  <div className={`${styles.serviceGrid} ${group.layout}`}>
                    {group.services.slice(0, 2).map((service) => (
                      <HorizontalCard key={service[0]} service={service} cardClass={group.cardClass!} />
                    ))}
                  </div>

                  {expanded[group.title] && group.services.length === 3 && (
                    <div className={styles.centeredRow}>
                      <HorizontalCard service={group.services[2]} cardClass={group.cardClass!} />
                    </div>
                  )}

                  {expanded[group.title] && group.services.length === 4 && (
                    <div className={`${styles.serviceGrid} ${group.layout} ${styles.extraRow}`}>
                      {group.services.slice(2).map((service) => (
                        <HorizontalCard key={service[0]} service={service} cardClass={group.cardClass!} />
                      ))}
                    </div>
                  )}

                  <div className={styles.moreBtnWrap}>
                    <button className={styles.moreBtn} onClick={() => toggleGroup(group.title)}>
                      {expanded[group.title] ? "Less Service →" : "More Service →"}
                    </button>
                  </div>
                </>
              ) : (
                <div className={`${styles.serviceGrid} ${group.layout}`}>
                  {group.services.map((service) => (
                    <article className={`${styles.serviceCard} ${group.cardClass ?? (service[3] ? styles.cleaningCard : "")} reveal-scale`} key={service[0]} data-title={service[0]}>
                      {group.cardClass ? (
                        <div className={styles.cleaningImgWrap}>
                          <Image src={service[2]} alt={service[0]} fill sizes="(max-width:680px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                        </div>
                      ) : (
                        <Image className="reveal-scale" src={service[2]} alt={service[0]} width={320} height={190} />
                      )}
                      <div className={group.cardClass ? styles.cleaningContent : undefined}>
                        <h4>{service[0]}</h4>
                        <p>{service[1]}</p>
                        {service[3] && <ul className={styles.serviceBullets}>{service[3].map((item) => <li key={item}>✓ {item}</li>)}</ul>}
                        {!service[4] && <Link href="/#contact">Learn More →</Link>}
                        <Link href="/book-cleaning" className={styles.requestService}>Request Service →</Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
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
