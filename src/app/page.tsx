"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { submitEnquiry } from "@/lib/enquiryClient";

const services: [string, string, string, React.ReactNode][] = [
  ["Solar Cleaning", "Professional cleaning for peak output.", "/assets/services/solar Cleaning.png", "▥"],
  ["Maintenance Services", "Preventive care for long-term performance.", "/assets/Service Page/Maintenance Service.png", "⚙"],
  ["Inspection Services", "Identify issues early and prevent energy losses.", "/assets/services/Service ispection.png", "⌕"],
  ["Performance Insights", "Data-driven insights to improve performance.", "/assets/services/Performance Optimization.png",
    <svg key="perf" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>
  ],
  ["AMC Contracts", "Reliable maintenance, year-round.", "/assets/services/AMC Contract.png", "▤"],
];

const benefits = [
  "Water-Efficient Eco Process",
  "Robotic & Professional Cleaning",
  "Drone Inspection & Analytics",
  "Comprehensive AMC Support",
];

const faqs = [
  "How often should solar panels be cleaned?",
  "What is the benefit of robotic cleaning?",
  "Is water used in the cleaning process?",
  "Do you provide AMC contracts?",
  "How much increase in energy can we expect?",
];

const trustedLogos = [
  { src: "/assets/logos/1.jpeg", alt: "Amigo Industries Hariom Paper Products" },
  { src: "/assets/logos/2.jpeg", alt: "UNEX PVC Profiles" },
  { src: "/assets/logos/3.jpeg", alt: "Mango" },
  { src: "/assets/logos/4.jpeg", alt: "Black Rose" },
  { src: "/assets/logos/5.jpeg", alt: "Petrofac" },
  { src: "/assets/logos/6.jpeg", alt: "Vardhan" },
  { src: "/assets/logos/7.jpeg", alt: "VM" },
  { src: "/assets/logos/8.jpeg", alt: "Virtuous Retail" },
  { src: "/assets/logos/9.jpeg", alt: "Supreme Group" },
  { src: "/assets/logos/10.jpeg", alt: "ER" },
  { src: "/assets/logos/11.jpeg", alt: "Wallace" },
  { src: "/assets/logos/12.jpeg", alt: "GIMA Tex" },
  { src: "/assets/logos/13.jpeg", alt: "Phoenix Marketcity" },
  { src: "/assets/logos/14.jpeg", alt: "Bharat Petroleum" },
  { src: "/assets/logos/15.jpeg", alt: "ITC Limited" },
  { src: "/assets/logos/16.jpeg", alt: "Indian Oil" },
  { src: "/assets/logos/17.jpeg", alt: "Indian Railways" },
];

const projects = [
  {
    title: "Dharam Synthesis, Umbergaon",
    beforeImage: "/assets/Projects/Dharam - Before.png",
    afterImage: "/assets/Projects/Dharam - After.png",
    capacity: "183 kWp",
    generationIncrease: "+18%",
    waterSaved: "1.2 Cr Liters",
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    title: "Oracle Polypack Pvt Ltd, DNH",
    beforeImage: "/assets/Projects/Oracle - Before.png",
    afterImage: "/assets/Projects/Oracle - After.png",
    capacity: "964 kWp",
    generationIncrease: "+14%",
    waterSaved: "42 Lakh Liters",
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    title: "Roha Dychem Pvt Ltd, Bikaner",
    beforeImage: "/assets/Projects/Roha Before.png",
    afterImage: "/assets/Projects/Roha After.png",
    capacity: "5000 kWp",
    generationIncrease: "+21%",
    waterSaved: "2.4 Cr Liters",
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    title: "Vipul Textiles, Malegaon, MH",
    beforeImage: "/assets/Projects/vipul textiles - Before.png",
    afterImage: "/assets/Projects/vipul textiles - After.png",
    capacity: "3039 kWp",
    generationIncrease: "+16%",
    waterSaved: "18 Lakh Liters",
    beforePosition: "center center",
    afterPosition: "center center",
  },
  {
    title: "Wallace Laboratories, Dharwad",
    beforeImage: "/assets/Projects/Wallace Before.png",
    afterImage: "/assets/Projects/Wallace After.png",
    capacity: "558 kWp",
    generationIncrease: "+18%",
    waterSaved: "1.2 Cr Liters",
    beforePosition: "center center",
    afterPosition: "center center",
  },
];

const dustRecovery: Record<string, { percent: string; factor: number }> = {
  Low: { percent: "+8%", factor: 0.08 },
  Medium: { percent: "+13%", factor: 0.13 },
  High: { percent: "+18%", factor: 0.18 },
};

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Clenvo home">
      <Image className="brand-logo" src="/assets/Navbar/LOGO.png" alt="Integrids" width={1024} height={827} priority />
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title"><i />{children}<i /></h2>;
}

export default function Home() {
  const [capacity, setCapacity] = useState(1);
  const [dust, setDust] = useState("High");
  const [generation, setGeneration] = useState(100000);
  const [calculatedInputs, setCalculatedInputs] = useState({ capacity: 1, dust: "High", generation: 100000 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState("");
  const contactReady = contactName.trim() !== "" && contactPhone.trim() !== "" && contactEmail.trim() !== "" && contactMessage.trim() !== "";
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    projects.forEach((project) => {
      [project.beforeImage, project.afterImage].forEach((src) => {
        const image = new window.Image();
        image.src = src;
      });
    });
  }, []);

  async function handleContactSubmit() {
    if (!contactReady || contactSending) return;

    setContactSending(true);
    setContactError("");

    try {
      await submitEnquiry("Homepage Contact", {
        fullName: contactName,
        phone: contactPhone,
        email: contactEmail,
        message: contactMessage,
      });
      setContactSent(true);
    } catch (error) {
      setContactError(error instanceof Error ? error.message : "We could not send your message right now. Please try again.");
    } finally {
      setContactSending(false);
    }
  }

  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-scale,.reveal-fast");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const gains = useMemo(() => {
    const dustFactor = dustRecovery[calculatedInputs.dust].factor;
    return Math.round(calculatedInputs.generation * dustFactor * calculatedInputs.capacity);
  }, [calculatedInputs]);
  const recoveryPercent = dustRecovery[calculatedInputs.dust].percent;
  const activeProject = projects[activeProjectIndex];
  const showPreviousProject = () => setActiveProjectIndex((index) => (index - 1 + projects.length) % projects.length);
  const showNextProject = () => setActiveProjectIndex((index) => (index + 1) % projects.length);
  const updateComparisonPosition = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setComparisonPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  return (
    <main className="home-page">
      <header>
        <Logo />
        <a href="#home" aria-label="Home"><img src="/assets/Navbar/GS.png" alt="" className="navbar-ig" /></a>
        <nav>
          <a href="/about-us">About Us</a>
          <a href="/services">Services</a>
          <a href="/package">Package</a>
          <a href="/store">Store</a>
          <a href="/book-cleaning">Booking</a>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/assets/hero/Hero%20video.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="hero-text-group">
            <p className="eyebrow">WE KEEP YOUR SOLAR PLANT</p>
            <h1>Maximum Performance.<br /><em>Every Single Day.</em></h1>
            <p className="hero-text">Commercial & Industrial Solar Cleaning Solutions<br />for Higher Energy Yield and Longer Asset Life.</p>
          </div>
          <div className="hero-lower-group">
            <div className="hero-actions">
              <a className="button" href="/book-cleaning">Book Cleaning <Arrow /></a>
              <a className="button outline" href="#services">Explore Services <Arrow /></a>
            </div>
            <div className="hero-features">
              <span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3c0 0-7 7.5-7 12a7 7 0 0014 0c0-4.5-7-12-7-12z"/>
                </svg>
                <b>Water Optimized Cleaning</b>
              </span>
              <span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3L4 6.5v5c0 5 3.5 9 8 10.5 4.5-1.5 8-5.5 8-10.5v-5L12 3z"/>
                  <rect x="8" y="8" width="8" height="5.5" rx="0.5"/>
                  <line x1="12" y1="8" x2="12" y2="13.5"/><line x1="8" y1="10.7" x2="16" y2="10.7"/>
                  <polyline points="9.5 16.5 11.2 18 14.8 15"/>
                </svg>
                <b>Safe for Panels</b>
              </span>
              <span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="1"/>
                  <line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                </svg>
                <b>Zero Panel Damage</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="trusted card reveal">
          <SectionTitle>TRUSTED BY INDUSTRY LEADERS</SectionTitle>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div className="logo-card" key={`${logo.src}-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="services" className="reveal">
          <SectionTitle>OUR SOLAR SERVICES</SectionTitle>
          <div className="service-grid">
            {services.map(([title, description, image, icon], i) => (
              <article className="service-card reveal-scale" key={title} style={{transitionDelay:`${0.08 + i * 0.09}s`}}>
                {title === "Solar Cleaning"
                  ? <div className="service-card-bg-img" style={{backgroundImage:`url('/assets/services/solar%20cleaning%201.png')`}} role="img" aria-label="Solar Cleaning" />
                  : <img src={image} alt="" />}
                <span className="round-icon">{icon}</span>
                <h3>{title}</h3>
                <p className="service-description">{description}</p>
              </article>
            ))}
          </div>
          <a className="services-more" href="/services">More <Arrow /></a>
        </section>

        <section className="projects card reveal">
          <SectionTitle>OUR PROJECTS</SectionTitle>
          <div className="project-slide" key={activeProject.title}>
            <div className="project-labels"><span>Before</span><b>{activeProject.title}</b><span>After</span></div>
            <div
              className="comparison"
              style={{
                "--before-position": activeProject.beforePosition,
                "--after-position": activeProject.afterPosition,
                "--comparison-position": `${comparisonPosition}%`,
              } as CSSProperties}
              onPointerDown={(event) => {
                event.preventDefault();
                setIsComparing(true);
                event.currentTarget.setPointerCapture(event.pointerId);
                updateComparisonPosition(event);
              }}
              onPointerMove={(event) => {
                if (isComparing) updateComparisonPosition(event);
              }}
              onPointerUp={(event) => {
                setIsComparing(false);
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={() => setIsComparing(false)}
            >
            <img draggable={false} className="comparison-after-image" src={activeProject.afterImage} alt="Solar plant panels after cleaning" />
            <div className="comparison-before"><img draggable={false} src={activeProject.beforeImage} alt="Solar plant panels before cleaning" /></div>
            <button className="project-nav project-nav-left" type="button" aria-label="Previous project" onPointerDown={(event) => event.stopPropagation()} onClick={showPreviousProject}>&lt;</button>
            <strong>‹ ›</strong>
            <button className="project-nav project-nav-right" type="button" aria-label="Next project" onPointerDown={(event) => event.stopPropagation()} onClick={showNextProject}>&gt;</button>
            </div>
            <div className="project-stats"><span>⌂ <b>{activeProject.capacity}</b><small>Capacity</small></span><span className="green"><b>{activeProject.generationIncrease}</b><small>Generation Increase</small></span><span><svg viewBox="0 0 24 24" width="20" height="20" fill="#1a7ce6" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle",marginBottom:"2px"}}><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/></svg> <b>{activeProject.waterSaved}</b><small>Water Saved</small></span></div>
          </div>
        </section>

        <section className="two-col">
          <div className="benefits card reveal-scale">
            <div className="benefits-copy">
              <h2>WHY CHOOSE INTEGRIDS?</h2>
              <div className="benefit-list">
                {benefits.map((benefit, index) => (
                  <div className="benefit-row" key={benefit}>
                    <span className={`benefit-icon benefit-icon-${index + 1}`}>
                      {[
                        /* water drop */
                        <svg key="w" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/></svg>,
                        /* robot / cleaning */
                        <svg key="r" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><path d="M12 8V5"/><circle cx="12" cy="4" r="1" fill="currentColor" stroke="none"/><path d="M3 13h1m16 0h1"/></svg>,
                        /* drone */
                        <svg key="d" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="6.5" r="2.5"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><line x1="8.5" y1="8.5" x2="10" y2="10"/><line x1="15.5" y1="8.5" x2="14" y2="10"/><line x1="8.5" y1="15.5" x2="10" y2="14"/><line x1="15.5" y1="15.5" x2="14" y2="14"/></svg>,
                        /* analytics / performance */
                        <svg key="a" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="2 17 8 11 13 16 22 5"/><line x1="2" y1="21" x2="22" y2="21"/></svg>,
                      ][index]}
                    </span>
                    <b>{benefit}</b>
                  </div>
                ))}
              </div>
              <a className="dark-button" href="#about-us">Know More About Us <Arrow /></a>
            </div>
            <img className="benefits-image" src="/assets/why-choose/why%20why.png" alt="" />
          </div>
          <div className="calculator reveal-scale" style={{transitionDelay:"0.15s"}}>
            <h2>ESTIMATE YOUR BENEFITS</h2>
            <label>Plant Capacity (MW)<select value={capacity} onChange={(event) => setCapacity(Number(event.target.value))}><option>1</option><option>2</option><option>5</option><option>10</option></select></label>
            <label>Dust Level<select value={dust} onChange={(event) => setDust(event.target.value)}><option>High</option><option>Medium</option><option>Low</option></select></label>
            <label><span>Current Monthly<br />Generation (kWh)</span><input value={generation} onChange={(event) => setGeneration(Number(event.target.value))} /></label>
            <div className="recovery"><div className="recovery-values"><div><small>Estimated Recovery</small><b>{recoveryPercent}</b></div><div><small>Potential Monthly<br />Gain up to</small><strong>{gains.toLocaleString("en-IN")} kWh</strong></div></div></div>
            <button className="button calculator-button" type="button" onClick={() => setCalculatedInputs({ capacity, dust, generation })}>Calculate Your Gains <Arrow /></button>
          </div>
        </section>

        <section className="faq-section reveal">
          <div className="faq card">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            {faqs.map((faq, index) => <button key={faq} onClick={() => setOpenFaq(openFaq === index ? null : index)}><b>{faq}</b><span>{openFaq === index ? "−" : "+"}</span>{openFaq === index && <small>Our team tailors the plan to your site, dust level and energy goals.</small>}</button>)}
          </div>
        </section>

        <section className="contact-booking">
          <form className="contact card reveal-scale" id="contact">
            <h2>GET IN TOUCH</h2>
            <input placeholder="Your Name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
            <input placeholder="Phone Number" inputMode="numeric" value={contactPhone} onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ""))} />
            <input className="contact-email" placeholder="Email Address" type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
            <textarea placeholder="Your Message" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
            {contactError && <p style={{ color: "#fecaca", margin: 0, fontWeight: 500 }}>{contactError}</p>}
            <button className="button" type="button" disabled={!contactReady || contactSending} onClick={handleContactSubmit}>
              {contactSending ? "Sending..." : "Send Message"} <Arrow />
            </button>
          </form>
          {contactSent && (
            <div className="contact-popup-overlay" onClick={() => setContactSent(false)}>
              <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
                <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                <h3>Thank you for your message.</h3>
                <p>Our team will review your message and get back to you shortly.</p>
                <button className="button contact-popup-close" onClick={() => setContactSent(false)}>Close</button>
              </div>
            </div>
          )}
          <div className="cta reveal-scale" style={{transitionDelay:"0.18s"}}>
            <h2>Ready to Boost<br />Your Solar<br />Performance?</h2>
            <p>Let&apos;s clean more. Generate more.</p>
            <a className="button" href="/book-cleaning">Book Cleaning <Arrow /></a>
          </div>
        </section>
      </section>

      <footer>
        <a className="footer-logo-link" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}><img className="footer-logo-img" src="/assets/Navbar/LOGO.png" alt="Integrids" /></a>
        <div><b>QUICK LINKS</b><p><a href="/">Home</a><br /><a href="/about-us">About Us</a><br /><a href="/services">Services</a><br /><a href="/store">Store</a></p></div>
        <div><b>SERVICES</b><p><a href="/services#cleaning-services">Robotic Cleaning</a><br /><a href="/services#cleaning-services">Manual Cleaning</a><br /><a href="/services#inspection-services">Inspection Services</a><br /><a href="/services#performance-support-services">Performance Optimization</a><br /><a href="/services#performance-support-services">AMC Contracts</a></p></div>
        <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.in">info@integrids.in</a><br /><a href="https://www.google.com/maps/place/SOLARINERTIA+POWER+PVT+LTD/@20.3227691,72.9687473,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
        <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
        <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
      </footer>
    </main>
  );
}
