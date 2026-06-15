"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./about-us.module.css";

const heroStats = [
  {
    label: "Asset Integrity",
    icon: <path d="M12 3 5 6v5c0 4.6 3 7.2 7 9 4-1.8 7-4.4 7-9V6l-7-3Z" />,
  },
  {
    label: "Operational Excellence",
    icon: <><circle cx="12" cy="8" r="4" /><path d="m8.5 11.5-1.8 7 5.3-3 5.3 3-1.8-7" /></>,
  },
  {
    label: "Maximum Performance",
    icon: <><path d="M4 18h16" /><path d="m6 15 4-4 3 3 5-7" /><path d="M16 7h2v2" /></>,
  },
  {
    label: "Sustainable Future",
    icon: <><path d="M5 13c8 1 12-3 14-9-7 0-13 3-14 9Z" /><path d="M5 13c0 4 3 7 7 7 3 0 5-2 6-5" /><path d="M8 14c2-2 5-4 9-5" /></>,
  },
];

const whyChoose = [
  ["Water Optimized, Eco-Friendly Process", "Sustainable cleaning methods designed to maintain panel performance while minimizing water consumption."],
  ["Advanced Robotic & Manual Cleaning", "A combination of automated technology and skilled technicians ensures effective cleaning for every installation."],
  ["Drone-Based Inspection", "Fast and accurate inspections that help identify issues before they impact generation and performance."],
  ["Performance Analytics & Reporting", "Detailed performance insights and reporting that support better operational decisions."],
  ["AMC Plans for Hassle-Free Maintenance", "Structured maintenance programs designed to improve reliability and reduce operational risks."],
  ["Trained, Safety-Compliant Team", "Experienced professionals following industry-standard safety practices and quality procedures."],
];

const whyChooseImages = [
  "/assets/About us/Why choose integrids/Water Optimized.png",
  "/assets/About us/Why choose integrids/Advanced Robotic.png",
  "/assets/About us/Why choose integrids/Drone based Inspection 2.png",
  "/assets/About us/Why choose integrids/Performance Analytics 2.png",
  "/assets/About us/Why choose integrids/AMC Plans 2.png",
  "/assets/About us/Why choose integrids/Trained, Safety 2.png",
];

const whyChooseIcons = [
  <path key="water" d="M12 3C12 3 5.5 10.2 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.2 12 3 12 3Z" />,
  <><rect x="6" y="8" width="12" height="9" rx="2" /><path d="M9 8V5h6v3" /><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M8 20h8" /><path d="M12 17v3" /></>,
  <><path d="M12 11h.01" /><path d="M7 11H3l2-2" /><path d="M17 11h4l-2-2" /><path d="M12 6V3l2 2" /><path d="M12 16v5l-2-2" /><circle cx="12" cy="11" r="3" /></>,
  <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 3 5-7" /><path d="M16 7h3v3" /></>,
  <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4h6v3H9z" /><path d="M9 12h6" /><path d="M9 16h4" /></>,
  <><path d="M12 3 5 6v5c0 4.6 3 7.2 7 9 4-1.8 7-4.4 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
];

const whyExistsCards = [
  {
    title: "Sustained Performance",
    description: "Maintain peak performance with lasting reliability.",
    icon: "/assets/About us/why integrids exists/Sustained Performance.png",
  },
  {
    title: "Performance Assurance",
    description: "Reliable performance through proactive protection.",
    icon: "/assets/About us/why integrids exists/Performance assurance.png",
  },
  {
    title: "Better Performance",
    description: "Boosts energy output and system efficiency",
    icon: "/assets/About us/why integrids exists/better performance.png",
  },
  {
    title: "Environment Friendly",
    description: "Promotes clean energy and reduces footprint.",
    icon: "/assets/About us/why integrids exists/environment friendly.png",
  },
  {
    title: "Higher Returns",
    description: "Improves ROI and lowers operational costs",
    icon: "/assets/About us/why integrids exists/higher return potential.png",
  },
];

const impactStats = [
  { value: 500, suffix: "+ MW", label: "Assets Supported" },
  { value: 18, prefix: "Up to ", suffix: "%", label: "Performance Improvement" },
  { value: 1000, suffix: "+", label: "Annual Inspections" },
  { value: 200, suffix: "+", label: "Projects Maintained" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const industries = [
  "Commercial Buildings",
  "Educational Institutions",
  "Energy Developers & EPC Companies",
  "Food Processing",
  "Healthcare Facilities",
  "Industrial Infrastructure",
  "Manufacturing Facilities",
  "Steel Industry",
  "Textile Industry",
  "Utility-Scale Solar Plants",
  "Warehouses & Logistics Parks",
  "Pharmaceuticals",
];

const approach = [
  ["Protect", "Assess risks and evaluate asset condition to protect long-term value."],
  ["Maintain", "Implement preventive and corrective maintenance to ensure asset reliability."],
  ["Monitor", "Track performance in real-time, identify anomalies and maintain operational visibility."],
  ["Perform", "Optimize efficiency, recover generation losses and maximize system output."],
  ["Grow", "Drive long-term reliability, extend asset life and deliver stronger business returns."],
];

const safety = [
  "Safety-First Operations",
  "Quality Assurance Standards",
  "Trained Technical Professionals",
  "Detailed Reporting & Documentation",
  "Consistent Service Excellence",
  "Continuous Improvement Approach",
];

const testimonials = [
  ["Operations Head", "Manufacturing Facility", "Integrids helped us improve plant performance and establish a structured maintenance approach that significantly reduced downtime."],
  ["Facility Manager", "Commercial Rooftop Project", "Their inspection and monitoring services provide complete visibility into our solar asset performance."],
  ["Plant Manager", "Industrial Solar Facility", "Professional execution, transparent reporting and measurable performance improvements."],
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
      <div><b>FOLLOW US</b><p className="social">in  ◉  ◌</p></div>
    </footer>
  );
}

function EyebrowTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className={styles.titleBlock}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <i />
    </div>
  );
}

function CountUpMetric({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1300;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <b ref={ref}>{prefix}{displayValue.toLocaleString("en-IN")}{suffix}</b>;
}

function DecimalCountUp({ value, suffix = "", decimals = 1 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1800;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(value * eased);
        if (progress < 1) frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <strong ref={ref}>{displayValue.toFixed(decimals)}{suffix}</strong>;
}

export default function AboutUsPage() {
  const [activeChooseIndex, setActiveChooseIndex] = useState(0);
  const [hoveredApproachIndex, setHoveredApproachIndex] = useState<number | null>(null);
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
          <Link className="active" href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Powering<br />Performance<br />Every Day.</h1>
          <h3>Delivering peak performance, maximum reliability, and optimized energy generation for every solar asset.</h3>
          <div className={styles.heroStats}>
            {heroStats.map((item) => <span key={item.label}><svg aria-hidden="true" viewBox="0 0 24 24">{item.icon}</svg>{item.label}</span>)}
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.who} reveal`}>
        <div className={styles.copy}>
          <div className={styles.whoTitle}><EyebrowTitle eyebrow="WHO WE ARE" title="Asset Performance Specialists" /></div>
          <p>Integrids is a solar asset performance and lifecycle management company dedicated to helping businesses maximize the value of their solar investments.</p>
          <p>We provide comprehensive solutions across cleaning, inspections, maintenance, monitoring and performance optimization to ensure solar assets operate efficiently, reliably and consistently throughout their lifecycle.</p>
          <p>By combining technical expertise, proactive maintenance and performance-driven strategies, we help asset owners reduce losses, improve reliability and maximize energy generation.</p>
        </div>
        <div className={`${styles.performanceImage} reveal-scale`}>
          <Image src="/assets/About us/who we are 1.png" alt="Solar asset performance specialist" fill sizes="(max-width: 900px) 100vw, 56vw" />
          <div className={styles.dashboard}>
            <b>PERFORMANCE OVERVIEW</b>
            <span>Today&apos;s Energy <DecimalCountUp value={1.62} suffix=" MWh" decimals={2} /></span>
            <span>Performance Ratio <DecimalCountUp value={88.7} suffix="%" /></span>
            <span>System Uptime <DecimalCountUp value={99.6} suffix="%" /></span>
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.beforeAfter} reveal`}>
        <div className={styles.existsVisual}>
          <div className={`${styles.compareBox} reveal-scale`}>
            <Image src="/assets/About us/why integrids exists.png" alt="Solar asset maintenance and performance" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className={styles.existsIconRow}>
            {whyExistsCards.map((card) => (
              <article
                className="reveal-scale"
                key={card.title}
                tabIndex={0}
              >
                <span><Image src={card.icon} alt="" width={31} height={31} /></span>
                <b>{card.title}</b>
                <small>{card.description}</small>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.copy}>
          <EyebrowTitle eyebrow="WHY INTEGRIDS EXISTS" title="Because Performance Never Stops" />
          <p>Installing a solar plant is only the beginning of the journey. Over time, dust accumulation, environmental conditions, equipment wear and unnoticed faults can gradually reduce system performance and impact energy generation.</p>
          <p>Integrids was founded to solve this challenge by providing ongoing asset care that protects performance, improves reliability and extends system life.</p>
          <p>Through maintenance, inspection and optimization, we keep solar assets performing at their best.</p>
          <p><b>We do not simply maintain equipment. We help businesses safeguard the long-term value of their solar assets.</b></p>
          <p className={styles.existsFinalText}>Every service is focused on delivering maximum value from your solar investment.</p>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.choosePanel} reveal`}>
        <EyebrowTitle eyebrow="WHY CHOOSE INTEGRIDS" title="Asset Integrity. Maximized." />
        <div className={styles.chooseInteractive}>
          <div className={styles.chooseList}>
          {whyChoose.map((item, index) => (
            <article
              className="reveal-scale"
              key={item[0]}
              onFocus={() => setActiveChooseIndex(index)}
              onMouseEnter={() => setActiveChooseIndex(index)}
              tabIndex={0}
            >
              <span><svg viewBox="0 0 24 24" aria-hidden="true">{whyChooseIcons[index]}</svg></span>
              <div>
                <b>{item[0]}</b>
                <p>{item[1]}</p>
              </div>
            </article>
          ))}
          </div>
          <div className={`${styles.chooseImagePanel} reveal-scale`}>
            {whyChooseImages.map((image, index) => (
              <Image
                alt={whyChoose[index][0]}
                className={index === activeChooseIndex ? styles.chooseImageActive : ""}
                fill
                key={image}
                sizes="(max-width: 1000px) 100vw, 50vw"
                src={image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.impact} reveal`}>
        <div>
          <span>OUR IMPACT</span>
          <h2>Maximizing Asset Performance</h2>
          <i />
          <div className={styles.impactGrid}>
            {impactStats.map((item) => <div key={item.label}><CountUpMetric value={item.value} prefix={item.prefix} suffix={item.suffix} /><small>{item.label}</small></div>)}
          </div>
          <h3>Less Downtime. <em>Higher Yield.</em></h3>
        </div>
      </section>

      {/* ── OUR APPROACH — full-width, background image, two-column layout ── */}
      <section className={`${styles.ourApproach} reveal`}>
        <div className={styles.approachContent}>

          {/* LEFT: heading + 5 step rows (no box — white comes from CSS gradient) */}
          <div className={styles.approachLeft}>
            <p className={styles.approachEyebrow}>OUR APPROACH</p>
            <h2 className={styles.approachHeading}>
              Protect<em>.</em> Maintain<em>.</em> <span>Perform.</span>
            </h2>
            <p className={styles.approachSubtitle}>A proven approach to safeguard your assets, ensure reliability and maximize the performance of your solar investment.</p>

            <div className={styles.approachSteps}>
              {approach.map((item, index) => (
                <div
                  className={`${styles.approachStep} reveal-scale`}
                  key={item[0]}
                  onBlur={() => setHoveredApproachIndex(null)}
                  onFocus={() => setHoveredApproachIndex(index)}
                  onMouseEnter={() => setHoveredApproachIndex(index)}
                  onMouseLeave={() => setHoveredApproachIndex(null)}
                  tabIndex={0}
                >
                  {/* green circle icon */}
                  <span className={styles.stepIconCircle}>
                    {[
                      <svg key="p"  viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 3 7.2 7 9 4-1.8 7-4.4 7-9V6l-7-3Z"/><polyline points="9 12 11 14 15 10"/></svg>,
                      <svg key="m"  viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
                      <svg key="mo" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/><polyline points="6 10 9 7 12 10 16 6"/></svg>,
                      <svg key="pe" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
                      <svg key="g"  viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
                    ][index]}
                  </span>
                  {/* vertical green separator */}
                  <span className={styles.stepSep} aria-hidden="true" />
                  {/* title + description */}
                  <div className={styles.stepBody}>
                    <b>{item[0]}</b>
                    <p>{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: orbital icon diagram */}
          <div className={`${styles.approachRight} reveal-scale`}>
            <div className={styles.orbitDiagram}>
              {/* ── Ripple rings — glowing bloom + light spots (cx=17, cy=211) ── */}
              <svg className={styles.rippleRings} viewBox="0 0 340 340" aria-hidden="true">
                <defs>
                  {/* Ring bloom: dual-layer gaussian for premium glow */}
                  <filter id="ringBloom" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5"  result="b1"/>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b2"/>
                    <feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  {/* Dot glow: tight intense bloom for light spots */}
                  <filter id="dotBloom" x="-600%" y="-600%" width="1300%" height="1300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2"  result="d1"/>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5"  result="d2"/>
                    <feMerge><feMergeNode in="d2"/><feMergeNode in="d1"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* ── Rings: soft bloom layer (wide) + crisp line on top ── */}
                {/* Ring 1 r=74 */}
                <circle cx="17" cy="211" r="74"  fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="9"   filter="url(#ringBloom)"/>
                <circle cx="17" cy="211" r="74"  fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2"/>
                {/* Ring 2 r=120 */}
                <circle cx="17" cy="211" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8"   filter="url(#ringBloom)"/>
                <circle cx="17" cy="211" r="120" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
                {/* Ring 3 r=172 */}
                <circle cx="17" cy="211" r="172" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7"   filter="url(#ringBloom)"/>
                <circle cx="17" cy="211" r="172" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
                {/* Ring 4 r=230 */}
                <circle cx="17" cy="211" r="230" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6"   filter="url(#ringBloom)"/>
                <circle cx="17" cy="211" r="230" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1"/>
                {/* Ring 5 r=295 */}
                <circle cx="17" cy="211" r="295" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="5"   filter="url(#ringBloom)"/>
                <circle cx="17" cy="211" r="295" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

                {/* ── Glowing light spots on rings ── */}
                {/* Ring 1 spots */}
                <circle cx="89"  cy="192" r="2.5" fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'0s'}}/>
                <circle cx="74"  cy="259" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'1.4s'}}/>
                {/* Ring 2 spots */}
                <circle cx="77"  cy="107" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'0.7s'}}/>
                <circle cx="137" cy="211" r="3"   fill="white" filter="url(#dotBloom)" className={styles.rippleDotBright} style={{animationDelay:'2.1s'}}/>
                <circle cx="86"  cy="309" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'1.0s'}}/>
                {/* Ring 3 spots */}
                <circle cx="166" cy="125" r="2.5" fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'1.8s'}}/>
                <circle cx="90"  cy="367" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'0.3s'}}/>
                {/* Ring 4 spots */}
                <circle cx="233" cy="132" r="2.5" fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'2.5s'}}/>
                <circle cx="239" cy="271" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'1.2s'}}/>
                {/* Ring 5 spots */}
                <circle cx="306" cy="150" r="2.5" fill="white" filter="url(#dotBloom)" className={styles.rippleDotBright} style={{animationDelay:'0.5s'}}/>
                <circle cx="284" cy="336" r="2"   fill="white" filter="url(#dotBloom)" className={styles.rippleDot} style={{animationDelay:'1.9s'}}/>
              </svg>
              {/* semi-circle orbit arc aligned through the current orbit icon centers */}
              <svg className={styles.orbitRing} viewBox="0 0 340 340" aria-hidden="true">
                <path d="M 40 49 Q 126 49 162 103 Q 214 155 214 216 Q 214 277 162 329 Q 126 383 40 383" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              </svg>
              {/* center circle – solar/sun icon */}
              <div className={styles.orbitCenter}>
                <svg viewBox="0 0 56 56" width="54" height="54" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="8" y="22" width="40" height="24" rx="2"/>
                  <line x1="8"  y1="30" x2="48" y2="30"/>
                  <line x1="8"  y1="38" x2="48" y2="38"/>
                  <line x1="22" y1="22" x2="22" y2="46"/>
                  <line x1="34" y1="22" x2="34" y2="46"/>
                  <circle cx="28" cy="11" r="5"/>
                  <line x1="28" y1="2"  x2="28" y2="5"/>
                  <line x1="18" y1="11" x2="15" y2="11"/>
                  <line x1="38" y1="11" x2="41" y2="11"/>
                  <line x1="21" y1="4"  x2="23" y2="6"/>
                  <line x1="35" y1="4"  x2="33" y2="6"/>
                </svg>
              </div>
              {/* 5 orbit items — center=(40,211), expanded radius, angles: -90°,-45°,0°,+45°,+90° */}
              {[
                { top: 20,  left: 11,  icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 3 7.2 7 9 4-1.8 7-4.4 7-9V6l-7-3Z"/><polyline points="9 12 11 14 15 10"/></svg> },
                { top: 74,  left: 133, icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
                { top: 187, left: 185, icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/><polyline points="6 10 9 7 12 10 16 6"/></svg> },
                { top: 300, left: 133, icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
                { top: 354, left: 11,  icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
              ].map((item, i) => (
                <span
                  key={i}
                  className={`${styles.orbitItem}${hoveredApproachIndex === i ? ` ${styles.orbitItemActive}` : ""}`}
                  style={{ top: item.top, left: item.left }}
                >{item.icon}</span>
              ))}
              {/* green connector dots — mathematically at t=0.5 of each bezier segment */}
              {[
                { top: 58,  left: 109 },
                { top: 153, left: 197 },
                { top: 270, left: 197 },
                { top: 365, left: 109 },
              ].map((pos, i) => (
                <span key={i} className={styles.orbitDot} style={{ top: pos.top, left: pos.left }} aria-hidden="true" />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SAFETY & QUALITY ── */}
      <section className={`${styles.wrap} ${styles.lowerGrid} reveal`}>
        <div className={`${styles.safetyCard} reveal-scale`}>
          <EyebrowTitle eyebrow="SAFETY & QUALITY" title="Built on Reliability" />
          <p>Safety and quality are fundamental to every service we deliver. Our teams follow standardized procedures, rigorous checks and industry best practices.</p>
          <ul>{safety.map((item) => <li key={item}>✓ {item}</li>)}</ul>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.industriesSection} reveal`}>
          <div className={styles.industriesTitle}>
            <span>INDUSTRIES WE SERVE</span>
            <h2>Supporting Diverse Solar Assets</h2>
            <i />
          </div>
          <div className={styles.industries}>
            <div className={styles.industryTrack}>
              {[...industries, ...industries].map((industry, index) => (
                <article key={`${industry}-${index}`}>
                  <div className={styles.industryItem}>
                    <span><Image src={`/assets/About us/Industries we serve/${industry}.png`} alt="" width={104} height={104} /></span>
                    <b>{industry}</b>
                  </div>
                </article>
              ))}
            </div>
          </div>
      </section>

      <section className={`${styles.wrap} ${styles.lowerGrid} reveal`}>
        <div className={styles.testimonialCard}>
          <EyebrowTitle eyebrow="TRUSTED BY ASSET OWNERS" title="" />
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => <article className="reveal-scale" key={item[0]}><p>&quot;{item[2]}&quot;</p><b>{item[0]}</b><small>{item[1]}</small></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.bottomCta} reveal`}>
        <h2>Performance <em>Never Stops.</em></h2>
        <p>Clenvo is committed to helping businesses protect, maintain and optimize solar assets for long-term reliability, efficiency and growth.</p>
        <b>Maximizing Asset Performance Through <span>Intelligent Asset Care.</span></b>
      </section>

      <Footer />
    </main>
  );
}
