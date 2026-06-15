import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "Clenvo | Solar Cleaning Solutions",
  description: "Commercial and industrial solar cleaning solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MobileNav />
        {children}
        <div className="social-float">
          <a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" className="sf-linkedin" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
            </svg>
          </a>
          <a href="https://wa.me/918424097067" target="_blank" rel="noopener noreferrer" className="sf-whatsapp" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.1-.44-.14-.63.14-.19.28-.73.92-.89 1.1-.16.19-.33.21-.61.07-1.67-.84-2.77-1.49-3.87-3.38-.29-.5.29-.47.84-1.55.09-.19.05-.35-.03-.49-.07-.14-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.74.35-.26.28-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2.01 3.06 4.87 4.3 2.86 1.24 2.86.83 3.38.78.52-.05 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM12.05 21.8A9.74 9.74 0 0 1 2.3 12.05 9.74 9.74 0 0 1 12.05 2.3a9.74 9.74 0 0 1 9.75 9.75 9.74 9.74 0 0 1-9.75 9.75zm0-21.8C5.39 0 0 5.39 0 12.05c0 2.13.56 4.13 1.55 5.86L0 24l6.27-1.63A12 12 0 0 0 12.05 24C18.71 24 24 18.71 24 12.05 24 5.39 18.71 0 12.05 0z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
