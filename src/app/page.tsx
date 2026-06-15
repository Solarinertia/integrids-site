"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useMemo, useState } from "react";

const services: [string, string, string, React.ReactNode][] = [
  ["Solar Cleaning", "Professional cleaning for peak output.", "/assets/services/solar Cleaning.png", "▥"],
  ["Maintenance Services", "Preventive care for long-term performance.", "/assets/Service Page/Maintenance Service.png", "⚙"],
  ["Inspection Services", "Identify issues early and prevent energy losses.", "/assets/services/Service ispection.png", "⌕"],
  ["Performance Insights", "Data-driven insights to improve output and efficiency.", "/assets/services/Performance Optimization.png",
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
      <Image className="brand-logo" src="/assets/Navbar/Integrids logo transparent.png" alt="Integrids" width={1024} height={827} priority />
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
    <main>
      <header>
        <Logo />
        <nav>
          {["Home", "About Us", "Services", "Package", "Store"].map((item) => (
            <a className={item === "Home" ? "active" : ""} href={item === "Home" ? "#home" : item === "About Us" ? "/about-us" : item === "Services" ? "/services" : item === "Package" ? "/package" : item === "Store" ? "/store" : `#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>{item}</a>
          ))}
        </nav>
        <a className="button header-button" href="/book-cleaning">Booking</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">WE KEEP YOUR SOLAR PLANT</p>
          <h1>Maximum Performance.<br /><em>Every Single Day.</em></h1>
          <p className="hero-text">Commercial & Industrial Solar Cleaning Solutions<br />for Higher Energy Yield and Longer Asset Life.</p>
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
            <img className="benefits-image" src="/assets/why-choose/why-choose-clenvo.png" alt="" />
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
            <input placeholder="Your Name" /><input placeholder="Phone Number" /><input className="contact-email" placeholder="Email Address" />
            <textarea placeholder="Your Message" />
            <button className="button" type="button">Send Message <Arrow /></button>
          </form>
          <div className="cta reveal-scale" style={{transitionDelay:"0.18s"}}>
            <h2>Ready to Boost<br />Your Solar<br />Performance?</h2>
            <p>Let&apos;s clean more. Generate more.</p>
            <a className="button" href="/book-cleaning">Book Cleaning <Arrow /></a>
          </div>
        </section>
      </section>

      <footer>
        <Logo />
        <div><b>QUICK LINKS</b><p>Home<br />About Us<br />Services<br />Store</p></div>
        <div><b>SERVICES</b><p>Robotic Cleaning<br />Manual Cleaning<br />Inspection Services<br />Performance Optimization<br />AMC Contracts</p></div>
        <div><b>CONTACT US</b><p>8424097069<br />info@integrids.com<br />Silvassa, Gujarat<br />Mumbai, Maharashtra</p></div>
        <div><b>FOLLOW US</b><p className="social">in  ◉  ◌</p></div>
      </footer>
    </main>
  );
}
