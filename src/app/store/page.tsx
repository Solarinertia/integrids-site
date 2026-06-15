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
      <div><b>QUICK LINKS</b><p>Home<br />About Us<br />Services<br />Store</p></div>
      <div><b>SERVICES</b><p>Robotic Cleaning<br />Manual Cleaning<br />Inspection Services<br />Performance Optimization<br />AMC Contracts</p></div>
      <div><b>CONTACT US</b><p>8424097069<br />info@integrids.com<br />Silvassa, Gujarat<br />Mumbai, Maharashtra</p></div>
      <div><b>FOLLOW US</b><p className="social">in  ◉  ◌</p></div>
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
