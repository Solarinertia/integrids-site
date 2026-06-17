"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./pick-slot.module.css";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 25 }, (_, index) => 2026 + index);

type CalendarDay = {
  day: number;
  month: number;
  year: number;
  outside?: boolean;
  available?: boolean;
};

function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/IIII LOGO.jpg" alt="Integrids" width={1024} height={827} priority />
    </Link>
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
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

function clampInitialDate() {
  const today = new Date();
  const year = today.getFullYear();

  if (year < 2026) return { month: 5, year: 2026, selectedDay: null as number | null };
  if (year > 2050) return { month: 11, year: 2050, selectedDay: null as number | null };

  // No day pre-selected — today and the next 7 days are unavailable
  return { month: today.getMonth(), year, selectedDay: null as number | null };
}

function formatSelectedDate(day: number, month: number, year: number) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date(year, month, day));
}

/**
 * Builds the calendar grid for a given month/year.
 * minDate: any date <= minDate is marked unavailable (used for the 7-day lead-time block).
 */
function getCalendarDays(month: number, year: number, minDate: Date): CalendarDay[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();
  const items: CalendarDay[] = [];

  for (let index = firstWeekday - 1; index >= 0; index -= 1) {
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousYear = month === 0 ? year - 1 : year;
    items.push({ day: previousMonthDays - index, month: previousMonth, year: previousYear, outside: true });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    // available only if it's a weekday AND strictly after the 7-day block
    items.push({ day, month, year, available: weekday !== 0 && date > minDate });
  }

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  let nextDay = 1;
  while (items.length % 7 !== 0) {
    items.push({ day: nextDay, month: nextMonth, year: nextYear, outside: true });
    nextDay += 1;
  }

  return items;
}

export default function PickSlotPage() {
  const [calendarState, setCalendarState] = useState(clampInitialDate);

  // minDate = today + 7 days (today through today+7 are unavailable; first bookable day is today+8)
  const minDate = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 7);
    return d;
  }, []);

  const calendarDays = useMemo(
    () => getCalendarDays(calendarState.month, calendarState.year, minDate),
    [calendarState.month, calendarState.year, minDate],
  );
  const selectedDate = useMemo(() => {
    if (!calendarState.selectedDay) return "Not selected";
    return formatSelectedDate(calendarState.selectedDay, calendarState.month, calendarState.year);
  }, [calendarState.month, calendarState.selectedDay, calendarState.year]);

  function saveSelectedDate() {
    if (!calendarState.selectedDay) return;
    window.localStorage.setItem("bookingPreferredDate", selectedDate);
  }

  function updateMonth(value: string) {
    setCalendarState((current) => ({ ...current, month: Number(value), selectedDay: null }));
  }

  function updateYear(value: string) {
    setCalendarState((current) => ({ ...current, year: Number(value), selectedDay: null }));
  }

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <img src="/assets/Navbar/IIG.jpg" alt="" className="navbar-ig" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
          <Link className="active" href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className={styles.wrap}>
        <div className={styles.steps}>
          <span className={styles.completedStep}><b>✓</b>Details</span>
          <i />
          <span className={styles.activeStep}><b>2</b>Pick Slot</span>
          <i />
          <span><b>3</b>Get a Quote</span>
        </div>

        <section className={styles.calendarCard}>
          <h1>Select date</h1>

          <div className={styles.monthRow}>
            <label>
              <span>Month</span>
              <select value={calendarState.month} onChange={(event) => updateMonth(event.target.value)}>
                {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
              </select>
            </label>
            <label>
              <span>Year</span>
              <select value={calendarState.year} onChange={(event) => updateYear(event.target.value)}>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
          </div>

          <div className={styles.calendarGrid}>
            {days.map((day) => <strong key={day}>{day}</strong>)}
            {calendarDays.map((item, index) => {
              const selected = item.day === calendarState.selectedDay && item.month === calendarState.month && item.year === calendarState.year && item.available;
              return (
                <button
                  className={`${item.available ? styles.available : styles.unavailable} ${item.outside ? styles.outside : ""} ${selected ? styles.selected : ""}`}
                  disabled={!item.available || item.outside}
                  key={`${item.day}-${item.month}-${index}`}
                  onClick={() => item.available && !item.outside && setCalendarState((current) => ({ ...current, selectedDay: item.day }))}
                  type="button"
                >
                  {item.day}
                </button>
              );
            })}
          </div>

          <div className={styles.legend}>
            <span><i className={styles.availableDot} />Available</span>
            <span><i className={styles.selectedDot} />Selected</span>
            <span><i className={styles.unavailableDot} />Unavailable</span>
          </div>

          <div className={styles.summary}>
            <span>▣</span>
            <div>
              <b>Selected date:</b>
              <strong>{selectedDate}</strong>
            </div>
          </div>

          <div className={styles.actions}>
            <Link className={styles.backButton} href="/book-cleaning">Back</Link>
            {calendarState.selectedDay ? (
              <Link className="button" href="/get-quote" onClick={saveSelectedDate}>Get a Quote →</Link>
            ) : (
              <button className="button" disabled type="button">Get a Quote →</button>
            )}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
