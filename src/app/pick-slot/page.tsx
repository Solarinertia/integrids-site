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
      <div><b>FOLLOW US</b><p className="social">in  ◉  ○</p></div>
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
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link href="/store">Store</Link>
        </nav>
        <Link className="button header-button" href="/book-cleaning">Booking</Link>
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
