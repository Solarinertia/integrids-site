"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./store.module.css";

const cleaningTools = [
  ["BEST SELLER", "Solar Panel Cleaning Brush", "₹2,499", "/assets/equipment/product-brush.png"],
  ["NEW", "Water-Fed Solar Cleaning Brush", "₹15,999", "/assets/services/Robotic cleaning.png"],
  ["", "Microfiber Cleaning Mop", "₹1,299", "/assets/equipment/product-kit.png"],
  ["", "Aluminum Telescopic Pole (3–12 m)", "₹6,499", "/assets/equipment/product-inspection.png"],
  ["", "Carbon Fiber Telescopic Pole (Lightweight)", "₹12,999", "/assets/services/service-robotic.png"],
  ["", "Solar Panel Squeegee", "₹899", "/assets/services/service-manual.png"],
  ["", "Solar Panel Cleaning Solution (5L)", "₹1,799", "/assets/hero/water-badge.png"],
  ["", "Portable RO/DI Water Filtration System", "₹49,999", "/assets/equipment/product-monitor.png"],
  ["", "Water Hose & Hose Reel Kit (30m)", "₹4,999", "/assets/equipment/product-kit.png"],
  ["", "Battery-Powered Rotating Brush", "₹18,999", "/assets/equipment/product-brush.png"],
  ["PREMIUM", "Motorized Solar Panel Cleaning Machine", "₹3,49,999", "/assets/equipment/product-robot.png"],
  ["", "Commercial Solar Cleaning Kit", "₹24,999", "/assets/equipment/product-kit.png"],
  ["", "Portable Water Tank & Pump System", "₹19,999", "/assets/equipment/product-monitor.png"],
  ["", "Solar Panel Inspection Kit", "₹9,999", "/assets/equipment/product-inspection.png"],
  ["PREMIUM", "Semi-Automatic Solar Cleaning Robot", "₹4,99,999", "/assets/equipment/product-robot.png"],
];

const electricalTools = cleaningTools;

const mechanicalTools = cleaningTools;

const services = [
  ["Manual Cleaning", "₹15 / Panel*", "/assets/services/Manual Cleaning 1.png"],
  ["Robotic Cleaning", "₹20 / Panel*", "/assets/services/Robotic cleaning 1.png"],
  ["Drone Inspection", "₹4,500 / MW", "/assets/services/Service ispection.png"],
  ["Thermal Inspection", "₹3,000 / MW", "/assets/services/service-thermal.png"],
  ["Electrical Inspection", "₹2,500 / MW", "/assets/equipment/product-inspection.png"],
  ["Preventive Maintenance", "₹8 / Panel", "/assets/services/service-maintenance.png"],
  ["Performance Monitoring", "₹750 / MW / Month", "/assets/equipment/product-monitor.png"],
  ["Performance Optimization", "₹2,000 / MW", "/assets/services/Performance Optimization.png"],
  ["Technical Consultation", "₹5,000 / Visit", "/assets/testimonials/testimonial-robot.png"],
];

const VISIBLE = 5;

const heroImages = [
  "/assets/Store Page/Hero section.png",
  "/assets/hero/hero-scene.png",
  "/assets/About us/who we are.png",
  "/assets/Service Page/Robotic Cleaning 3.png",
  "/assets/Service Page/Manual Cleaning 4.png",
];

function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/Integrids logo transparent.png" alt="Integrids" width={1024} height={827} priority />
    </Link>
  );
}

function SectionTitle({ children, subtitle }: { children: string; subtitle?: string }) {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      <i />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function SubsectionHeading({ children }: { children: string }) {
  return (
    <div className={styles.subsectionRow}>
      <i />
      <h3>{children}</h3>
      <i />
    </div>
  );
}

function ViewMoreBtn({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <div className={styles.viewMoreWrap}>
      <button className={styles.viewMoreBtn} onClick={onClick}>
        {expanded ? "View Less" : "View More Tools →"}
      </button>
    </div>
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
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/channel/UC93y6ggaGpfJMM4ANi4KKsw/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

export default function StorePage() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(0);
  const [showCleaning, setShowCleaning] = useState(false);
  const [showElectrical, setShowElectrical] = useState(false);
  const [showMechanical, setShowMechanical] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 3000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  function goTo(i: number) {
    setCurrent(i);
    setAutoPlay((n) => n + 1);
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

  useEffect(() => {
    const els = document.querySelectorAll(".reveal-scale:not(.visible)");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [showCleaning, showElectrical, showMechanical, showServices]);

  const visibleCleaning = showCleaning ? cleaningTools : cleaningTools.slice(0, VISIBLE);
  const visibleElectrical = showElectrical ? electricalTools : electricalTools.slice(0, VISIBLE);
  const visibleMechanical = showMechanical ? mechanicalTools : mechanicalTools.slice(0, VISIBLE);
  const visibleServices = showServices ? services : services.slice(0, VISIBLE);

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <img src="/assets/Navbar/IG.png" alt="" className="navbar-ig" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link className="active" href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
      </header>

      <section className={styles.hero}>
        {/* Carousel slides */}
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`${styles.heroSlide}${i === 0 ? " " + styles.heroSlide0 : ""}${i === current ? " " + styles.heroSlideActive : ""}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}

        {/* Text — visible on slide 0 only */}
        <div className={`${styles.heroCopy} ${current === 0 ? styles.heroContentVisible : styles.heroContentHidden}`}>
          <h1>Everything You Need<br />for <em>Clean, Efficient Solar</em></h1>
          <p>Explore our professional-grade tools and expert services designed to maximize performance and extend the life of your solar assets.</p>
        </div>

        {/* Feature strip — visible on slide 0 only */}
        <div className={`${styles.heroStrip} ${current === 0 ? styles.heroContentVisible : styles.heroContentHidden}`}>
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6"/><path d="M8.56 14.88L7 22l5-3 5 3-1.56-7.12"/>
            </svg>
            <span className={styles.heroFeatureName}>Premium<br />Quality</span>
          </div>
          <div className={styles.heroStripDivider} />
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 3z"/>
            </svg>
            <span className={styles.heroFeatureName}>Reliable<br />Performance</span>
          </div>
          <div className={styles.heroStripDivider} />
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span className={styles.heroFeatureName}>Fast & Safe<br />Delivery</span>
          </div>
        </div>

        {/* Indicators */}
        <div className={styles.heroIndicators}>
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`${styles.heroDot}${i === current ? " " + styles.heroDotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Professional Tools */}
      <section className={`${styles.wrap} reveal`} id="tools">
        <SectionTitle>Professional Tools for Every Solar Need</SectionTitle>

        {/* Cleaning Equipment */}
        <div className={styles.toolsSubsection}>
          <SubsectionHeading>Cleaning Equipment</SubsectionHeading>
          <div className={styles.productGrid}>
            {visibleCleaning.map((product, index) => (
              <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                {product[0] && <span className={styles.badge}>{product[0]}</span>}
                <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                <h3>{index + 1}. {product[1]}</h3>
                <b>{product[2]}</b>
              </article>
            ))}
          </div>
          {cleaningTools.length > VISIBLE && (
            <ViewMoreBtn expanded={showCleaning} onClick={() => setShowCleaning((v) => !v)} />
          )}
        </div>

        {/* Electrical Tools */}
        <div className={styles.toolsSubsection}>
          <SubsectionHeading>Electrical Tools & Testing Equipment</SubsectionHeading>
          {visibleElectrical.length > 0 ? (
            <div className={styles.productGrid}>
              {visibleElectrical.map((product, index) => (
                <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                  {product[0] && <span className={styles.badge}>{product[0]}</span>}
                  <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                  <h3>{index + 1}. {product[1]}</h3>
                  <b>{product[2]}</b>
                </article>
              ))}
            </div>
          ) : (
            <p className={styles.comingSoon}>Products coming soon. Contact us for availability.</p>
          )}
          {electricalTools.length > VISIBLE && (
            <ViewMoreBtn expanded={showElectrical} onClick={() => setShowElectrical((v) => !v)} />
          )}
        </div>

        {/* Mechanical Tools */}
        <div className={styles.toolsSubsection}>
          <SubsectionHeading>Mechanical Tools & Maintenance Equipment</SubsectionHeading>
          {visibleMechanical.length > 0 ? (
            <div className={styles.productGrid}>
              {visibleMechanical.map((product, index) => (
                <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                  {product[0] && <span className={styles.badge}>{product[0]}</span>}
                  <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                  <h3>{index + 1}. {product[1]}</h3>
                  <b>{product[2]}</b>
                </article>
              ))}
            </div>
          ) : (
            <p className={styles.comingSoon}>Products coming soon. Contact us for availability.</p>
          )}
          {mechanicalTools.length > VISIBLE && (
            <ViewMoreBtn expanded={showMechanical} onClick={() => setShowMechanical((v) => !v)} />
          )}
        </div>
      </section>

      {/* Expert Services */}
      <section className={`${styles.wrap} ${styles.servicesSection} reveal`}>
        <SectionTitle subtitle="From cleaning to monitoring and optimization — our expert services keep your solar systems running at their best.">Expert Services for Peak Solar Performance</SectionTitle>
        <div className={styles.serviceGrid}>
          {visibleServices.map((service) => {
            const isBookable = service[0] === "Robotic Cleaning" || service[0] === "Manual Cleaning";
            return isBookable ? (
              <Link href="/book-cleaning" className={`${styles.serviceCard} reveal-scale`} key={service[0]}>
                <Image className="reveal-scale" src={service[2]} alt={service[0]} width={220} height={130} />
                <h3>{service[0]}</h3>
                <b>{service[1]}</b>
              </Link>
            ) : (
              <article className={`${styles.serviceCard} reveal-scale`} key={service[0]}>
                <Image className="reveal-scale" src={service[2]} alt={service[0]} width={220} height={130} />
                <h3>{service[0]}</h3>
                <b>{service[1]}</b>
              </article>
            );
          })}
        </div>
        {services.length > VISIBLE && (
          <ViewMoreBtn expanded={showServices} onClick={() => setShowServices((v) => !v)} />
        )}
      </section>

      <Footer />
    </main>
  );
}
