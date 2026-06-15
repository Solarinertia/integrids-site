"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Package", href: "/package" },
  { label: "Store", href: "/store" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="mob-nav-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`mob-ham${open ? " mob-ham-open" : ""}`} />
      </button>

      {open && (
        <div className="mob-nav-overlay" onClick={close}>
          <nav className="mob-nav-menu" onClick={e => e.stopPropagation()}>
            {navLinks.map(link => {
              const isActive = link.href === "/" ? path === "/" : path.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "mob-nav-active" : ""}
                  onClick={close}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/book-cleaning" className="button header-button mob-booking-btn" onClick={close}>
              Booking
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
