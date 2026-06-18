"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import styles from "./store.module.css";
import { submitEnquiry } from "@/lib/enquiryClient";

type CartItem = { id: string; name: string; price: string; image: string; quantity: number };

const cleaningTools = [
  ["BEST SELLER", "Solar Panel Cleaning Brush", "₹2,499", "/assets/Store Page/Cleaning/1. Solar Panel Cleaning Brush.png"],
  ["NEW", "Water-Fed Solar Cleaning Brush", "₹15,999", "/assets/Store Page/Cleaning/2. Water-Fed Solar Cleaning Brush.png"],
  ["", "Aluminum Telescopic Pole", "₹6,499", "/assets/Store Page/Cleaning/3. Aluminum Telescopic Pole.png"],
  ["", "Water Hose & Hose Reel Kit", "₹4,999", "/assets/Store Page/Cleaning/4. Water Hose & Hose Reel Kit.png"],
  ["", "Solar Panel Cleaning Solution", "₹1,799", "/assets/Store Page/Cleaning/5. Solar Panel Cleaning Solution.png"],
  ["", "Rotating Solar Cleaning Brush", "₹12,999", "/assets/Store Page/Cleaning/6. Rotating Solar Cleaning Brush.png"],
  ["", "Microfiber Cleaning Mop", "₹1,299", "/assets/Store Page/Cleaning/7. Microfiber Cleaning Mop.png"],
  ["", "Pole Extension Kit", "₹2,999", "/assets/Store Page/Cleaning/8. Pole Extension Kit.png"],
  ["", "RO/DI Water Filtration System", "₹49,999", "/assets/Store Page/Cleaning/9. RO DI Water Filtration System.png"],
  ["", "TDS Meter", "₹999", "/assets/Store Page/Cleaning/10. TDS Meter.png"],
  ["", "Battery-Powered Rotating Brush", "₹18,999", "/assets/Store Page/Cleaning/11. Battery-Powered Rotating Brush.png"],
  ["PREMIUM", "Semi-Automatic Solar Cleaning Robot", "₹4,99,999", "/assets/Store Page/Cleaning/12. Semi-Automatic Solar Cleaning Robot.png"],
];

const electricalTools = [
  ["", "Digital Multimeter", "₹4,999", "/assets/Store Page/Electrical/1. Digital Multimeter.png"],
  ["", "Clamp Meter", "₹7,999", "/assets/Store Page/Electrical/2. Clamp Meter.png"],
  ["", "MC4 Crimping Tool", "₹2,499", "/assets/Store Page/Electrical/3. MC4 Crimping Tool.png"],
  ["", "Infrared Thermometer", "₹2,999", "/assets/Store Page/Electrical/4. Infrared Thermometer.png"],
  ["", "Irradiance Meter", "₹14,999", "/assets/Store Page/Electrical/5. Irradiance Meter.png"],
  ["", "MC4 Connector Tool Kit", "₹4,999", "/assets/Store Page/Electrical/6. MC4 Connector Tool Kit.png"],
  ["", "Cable Cutter", "₹2,999", "/assets/Store Page/Electrical/7. Cable Cutter.png"],
  ["", "Insulation Resistance Tester (Megger)", "₹24,999", "/assets/Store Page/Electrical/8. Insulation Resistance Tester (Megger).png"],
  ["", "Earth Resistance Tester", "₹18,999", "/assets/Store Page/Electrical/9. Earth Resistance Tester.png"],
  ["PREMIUM", "IV Curve Tracer", "₹3,49,999", "/assets/Store Page/Electrical/10. IV Curve Tracer.png"],
  ["", "Thermal Imaging Camera", "₹79,999", "/assets/Store Page/Electrical/11. Thermal Imaging Camera.png"],
  ["", "Weather Monitoring Station", "₹1,24,999", "/assets/Store Page/Electrical/12. Weather Monitoring Station.png"],
];

const mechanicalTools = [
  ["", "Cordless Drill Machine", "₹8,999", "/assets/Store Page/Mechanical/1. Cordless Drill Machine.png"],
  ["", "Impact Wrench", "₹14,999", "/assets/Store Page/Mechanical/2. Impact Wrench.png"],
  ["", "Angle Grinder", "₹6,999", "/assets/Store Page/Mechanical/3. Angle Grinder.png"],
  ["", "Rivet Gun", "₹2,999", "/assets/Store Page/Mechanical/4. Rivet Gun.png"],
  ["", "Safety Harness & Fall Protection Kit", "₹8,999", "/assets/Store Page/Mechanical/5. Safety Harness & Fall Protection Kit.png"],
  ["", "Torque Wrench", "₹7,999", "/assets/Store Page/Mechanical/6. Torque Wrench.png"],
  ["", "Socket & Ratchet Set", "₹4,999", "/assets/Store Page/Mechanical/7. Socket & Ratchet Set.png"],
  ["", "Combination Spanner Set", "₹2,999", "/assets/Store Page/Mechanical/8. Combination Spanner Set.png"],
  ["", "Screwdriver Set", "₹1,999", "/assets/Store Page/Mechanical/9. Screwdriver Set.png"],
  ["", "Pliers Set", "₹2,499", "/assets/Store Page/Mechanical/10. Pliers Set.png"],
  ["", "Tool Box Set", "₹3,999", "/assets/Store Page/Mechanical/11. Tool Box Set.png"],
  ["", "Portable Work Light", "₹4,999", "/assets/Store Page/Mechanical/12. Portable Work Light.png"],
  ["PREMIUM", "Inspection Drone", "₹2,49,999", "/assets/Store Page/Mechanical/13. Inspection Drone.png"],
  ["", "Laser Distance Meter", "₹5,999", "/assets/Store Page/Mechanical/14. Laser Distance Meter.png"],
];

const sectionData = [cleaningTools, electricalTools, mechanicalTools];

// ── Product detail data (source: Details Document) ──────────────────────────

type Detail = {
  overview?: string;
  features?: string[];
  featuresLabel?: string;
  specs?: [string, string][];
  specsLabel?: string;
  applications?: string[];
  included?: string[];
  includedLabel?: string;
  warranty?: string;
};

const cleaningDetails: Detail[] = [
  // 0 — Solar Panel Cleaning Brush
  {
    overview: "The Solar Inertia Solar Panel Cleaning Brush is specifically engineered for safe and effective photovoltaic module cleaning. Featuring premium soft nylon bristles, it removes dust, dirt, pollen, and bird droppings without damaging anti-reflective coatings or tempered glass surfaces. Lightweight yet durable, it is ideal for residential, commercial, and utility-scale solar installations.",
    features: ["Soft nylon scratch-free bristles", "UV-resistant construction", "Lightweight and easy to handle", "Compatible with telescopic poles", "Suitable for wet and dry cleaning"],
    specs: [["Brush Width", "450 mm"], ["Brush Material", "Soft Nylon"], ["Frame Material", "Reinforced ABS"], ["Weight", "0.8 kg"], ["Pole Compatibility", "25–35 mm"], ["Operating Method", "Manual"]],
    applications: ["Residential Rooftop Solar", "Commercial Rooftop Solar", "Ground-Mounted Solar Farms"],
    included: ["Cleaning Brush Head", "Universal Pole Adapter"],
    warranty: "1 Year Manufacturing Warranty",
  },
  // 1 — Water-Fed Solar Cleaning Brush
  {
    overview: "The Water-Fed Solar Cleaning Brush combines cleaning and water delivery into a single solution. Integrated spray nozzles continuously deliver water directly to the cleaning surface, minimizing water consumption while maximizing cleaning performance.",
    features: ["Integrated water delivery system", "Uniform spray coverage", "Commercial-grade design", "Fast cleaning performance", "Compatible with filtration systems"],
    specs: [["Brush Width", "600 mm"], ["Water Nozzles", "4"], ["Water Flow Rate", "3–5 L/min"], ["Weight", "1.5 kg"], ["Hose Connection", "Quick Connect"], ["Operating Method", "Water-Fed Manual"]],
    applications: ["Commercial Solar Plants", "Industrial Rooftops", "Utility-Scale Solar Farms"],
    included: ["Brush Assembly", "Spray Nozzle Kit", "Hose Connector"],
    warranty: "1 Year Warranty",
  },
  // 2 — Aluminum Telescopic Pole
  {
    overview: "Industrial-grade extendable aluminum pole designed for safe cleaning of elevated solar installations.",
    features: ["Lightweight", "Corrosion Resistant", "Quick Lock System"],
    specs: [["Length Range", "3–12 m"], ["Material", "Aircraft-Grade Aluminum"], ["Sections", "4–6"], ["Weight", "3.5 kg"]],
  },
  // 3 — Water Hose & Hose Reel Kit
  {
    overview: "Heavy-duty hose management system designed for efficient water delivery and storage.",
    specs: [["Hose Length", "30 m"], ["Material", "Reinforced PVC"], ["Reel Material", "Powder-Coated Steel"]],
  },
  // 4 — Solar Panel Cleaning Solution
  {
    overview: "Eco-friendly cleaning solution specially formulated for photovoltaic modules.",
    specs: [["Volume", "5 Liters"], ["pH", "Neutral"], ["Biodegradable", "Yes"]],
  },
  // 5 — Rotating Solar Cleaning Brush
  {
    overview: "Designed for heavy-duty cleaning applications, the Rotating Solar Cleaning Brush provides enhanced dirt removal and reduces cleaning effort on heavily soiled solar panels.",
    features: ["Rotating cleaning action", "Superior dirt removal", "Durable brush assembly", "Reduced operator fatigue"],
    specs: [["Cleaning Width", "500 mm"], ["Rotation Type", "Manual"], ["Brush Material", "Nylon"], ["Weight", "2.5 kg"], ["Pole Compatible", "Yes"]],
    applications: ["Industrial Solar Plants", "Dust-Prone Regions", "Utility Solar Farms"],
    included: ["Rotating Brush Assembly", "Handle Mount"],
    warranty: "1 Year Warranty",
  },
  // 6 — Microfiber Cleaning Mop
  {
    overview: "A professional-grade microfiber cleaning mop designed for streak-free solar panel maintenance. High-density fibers effectively trap dust and absorb water, ensuring spotless results.",
    features: ["High water absorption", "Reusable and washable", "Scratch-free cleaning", "Lightweight design"],
    specs: [["Cleaning Width", "450 mm"], ["Material", "Premium Microfiber"], ["Weight", "0.5 kg"], ["Washable", "Yes"]],
    applications: ["Final Cleaning Stage", "Residential Solar Systems", "Commercial Solar Systems"],
    included: ["Microfiber Mop Head"],
    warranty: "6 Months",
  },
  // 7 — Pole Extension Kit
  {
    overview: "Extension sections that increase the reach of telescopic cleaning systems.",
    specs: [["Extension Length", "2 m"], ["Material", "Aluminum"], ["Weight", "1 kg"]],
  },
  // 8 — RO/DI Water Filtration System
  {
    overview: "Produces purified water to eliminate mineral deposits and maintain optimal cleaning performance.",
    specs: [["Capacity", "250 LPH"], ["Filtration Stages", "4"], ["Output TDS", "<10 ppm"], ["Frame", "Stainless Steel"]],
  },
  // 9 — TDS Meter
  {
    overview: "Portable water quality measurement device used to verify water purity before cleaning.",
    specs: [["Range", "0–9990 ppm"], ["Accuracy", "±2%"], ["Display", "LCD"]],
  },
  // 10 — Battery-Powered Rotating Brush
  {
    overview: "Motorized brush system designed to improve cleaning productivity and reduce manual effort.",
    specs: [["Battery", "24V Lithium-Ion"], ["Runtime", "4–6 Hours"], ["Brush Width", "600 mm"], ["Weight", "6 kg"]],
  },
  // 11 — Semi-Automatic Solar Cleaning Robot
  {
    overview: "Advanced robotic cleaning solution for utility-scale solar farms and large rooftop solar systems.",
    features: ["Autonomous Navigation Assistance", "Low Water Consumption", "High Cleaning Efficiency", "Suitable for Utility-Scale Projects"],
    specs: [["Cleaning Width", "1.5 m"], ["Runtime", "6 Hours"], ["Control", "Remote Operated"], ["Weight", "30 kg"]],
  },
];

const electricalDetails: Detail[] = [
  // 0 — Digital Multimeter
  {
    overview: "The Digital Multimeter is an essential diagnostic tool used for measuring voltage, current, resistance, continuity, and frequency in solar PV systems. Designed for installers and maintenance engineers, it enables quick troubleshooting and system verification.",
    features: ["True RMS Measurement", "Auto-Ranging Function", "Backlit LCD Display", "Continuity & Diode Testing", "Overload Protection"],
    specs: [["DC Voltage", "0–1000V"], ["AC Voltage", "0–750V"], ["Current Range", "Up to 10A"], ["Resistance Range", "0–40MΩ"], ["Display Count", "6000 Counts"], ["Safety Rating", "CAT III 1000V"]],
    applications: ["Solar PV Maintenance", "Electrical Troubleshooting", "AMC Services", "System Commissioning"],
    included: ["Digital Multimeter", "Test Leads", "Battery", "Carrying Case"],
    warranty: "1 Year",
  },
  // 1 — Clamp Meter
  {
    overview: "The Clamp Meter allows safe current measurements without disconnecting cables, making it ideal for solar plant inspections and maintenance.",
    features: ["Non-Intrusive Current Measurement", "AC/DC Current Testing", "Data Hold Function", "Backlit Display"],
    specs: [["AC Current", "0–1000A"], ["DC Current", "0–1000A"], ["Voltage", "Up to 1000V"], ["Jaw Opening", "42 mm"], ["Accuracy", "±2%"]],
    applications: ["String Current Measurement", "Preventive Maintenance", "Load Monitoring"],
  },
  // 2 — MC4 Crimping Tool
  {
    overview: "Professional crimping tool designed for secure installation of MC4 solar connectors.",
    features: ["Precision Crimping", "Ratchet Mechanism", "Ergonomic Grip"],
    specs: [["Cable Size", "2.5–6 mm²"], ["Material", "Hardened Steel"], ["Weight", "0.6 kg"]],
  },
  // 3 — Infrared Thermometer
  {
    overview: "Portable temperature measurement tool for quick hotspot identification.",
    specs: [["Range", "-50°C to 550°C"], ["Accuracy", "±1.5°C"], ["Laser Pointer", "Yes"]],
  },
  // 4 — Irradiance Meter
  {
    overview: "Measures solar radiation levels to assess plant performance and energy yield.",
    specs: [["Measurement Range", "0–2000 W/m²"], ["Accuracy", "±5%"], ["Display", "Digital LCD"]],
  },
  // 5 — MC4 Connector Tool Kit
  {
    overview: "Complete installation and maintenance kit for MC4 connector assembly and disassembly.",
    included: ["MC4 Spanner Set", "Crimping Tool", "Connector Release Tool", "Carry Case"],
    includedLabel: "Included Tools",
    applications: ["Solar Installation", "O&M Services"],
  },
  // 6 — Cable Cutter
  {
    overview: "Industrial cable cutting tool designed for clean and precise cuts on solar and electrical cables.",
    specs: [["Cable Capacity", "Up to 240 mm²"], ["Material", "Hardened Steel"], ["Weight", "1.2 kg"]],
  },
  // 7 — Insulation Resistance Tester (Megger)
  {
    overview: "Used to evaluate insulation integrity in solar cables, inverters, transformers, and switchgear.",
    features: ["High Accuracy", "Multiple Test Voltages", "Digital Display"],
    specs: [["Test Voltage", "250V–5000V"], ["Resistance Range", "Up to 10 TΩ"], ["Display", "LCD"]],
    applications: ["Commissioning", "Preventive Maintenance", "Fault Diagnosis"],
  },
  // 8 — Earth Resistance Tester
  {
    overview: "Measures grounding system performance to ensure safety and compliance.",
    specs: [["Range", "0.01Ω–2000Ω"], ["Accuracy", "±2%"], ["Test Method", "2/3 Pole"]],
  },
  // 9 — IV Curve Tracer
  {
    overview: "Advanced instrument for evaluating the current-voltage characteristics of photovoltaic modules and strings.",
    features: ["Instant Performance Analysis", "Defect Detection", "Graphical Display"],
    specs: [["Voltage Range", "Up to 1500V"], ["Current Range", "Up to 40A"], ["Display", "Colour Touchscreen"]],
  },
  // 10 — Thermal Imaging Camera
  {
    overview: "Detects hotspots, loose connections, defective modules, and abnormal temperature variations in solar systems.",
    features: ["High-Resolution Thermal Imaging", "Image Storage", "Wireless Connectivity"],
    specs: [["Resolution", "256 × 192"], ["Temperature Range", "-20°C to 550°C"], ["Accuracy", "±2°C"]],
    applications: ["Solar Inspection", "Preventive Maintenance", "Fault Detection"],
  },
  // 11 — Weather Monitoring Station
  {
    overview: "Provides real-time environmental data essential for solar plant performance analysis and predictive maintenance.",
    features: ["Solar Irradiance", "Ambient Temperature", "Module Temperature", "Wind Speed", "Wind Direction", "Humidity"],
    featuresLabel: "Key Parameters Measured",
    specs: [["Communication", "Modbus TCP/RS485"], ["Power Supply", "24V DC"], ["Mounting", "Pole Mounted"]],
    applications: ["Utility Solar Farms", "Performance Optimization", "SCADA Integration"],
  },
];

const mechanicalDetails: Detail[] = [
  // 0 — Cordless Drill Machine
  {
    overview: "The Cordless Drill Machine is a versatile power tool used for drilling holes and fastening screws during solar panel installation, mounting structure assembly, and maintenance activities. Its cordless design provides mobility and ease of operation across large solar sites.",
    features: ["Rechargeable Lithium-Ion Battery", "Variable Speed Control", "Forward & Reverse Operation", "Ergonomic Grip", "LED Work Light"],
    specs: [["Voltage", "20V"], ["Battery Capacity", "4.0 Ah"], ["No Load Speed", "0–1800 RPM"], ["Chuck Size", "13 mm"], ["Torque", "60 Nm"], ["Weight", "1.8 kg"]],
    applications: ["Solar Structure Installation", "AMC Activities", "Electrical Panel Mounting", "General Site Maintenance"],
    included: ["Drill Machine", "Battery Pack", "Charger", "Carry Case"],
    warranty: "1 Year",
  },
  // 1 — Impact Wrench
  {
    overview: "Designed for high-torque fastening applications, the Impact Wrench is ideal for tightening and loosening bolts on solar module mounting structures.",
    features: ["High Torque Output", "Brushless Motor", "Variable Speed Trigger", "Compact Design"],
    specs: [["Voltage", "20V"], ["Max Torque", "650 Nm"], ["Speed", "0–2800 RPM"], ["Drive Size", "½ Inch"], ["Weight", "2.2 kg"]],
  },
  // 2 — Angle Grinder
  {
    overview: "A powerful cutting and grinding tool used for fabrication, repair work, and structural modifications in solar installations.",
    features: ["High-Speed Motor", "Safety Guard", "Ergonomic Handle", "Heavy-Duty Performance"],
    specs: [["Power", "1200W"], ["Disc Diameter", "125 mm"], ["Speed", "11,000 RPM"], ["Weight", "2.5 kg"]],
  },
  // 3 — Rivet Gun
  {
    overview: "Designed for fastening sheet metal components and cable management accessories during solar installation projects.",
    features: ["Heavy-Duty Construction", "Comfortable Grip", "Quick Rivet Loading"],
    specs: [["Rivet Sizes", "2.4–4.8 mm"], ["Material", "Hardened Steel"], ["Weight", "0.7 kg"]],
  },
  // 4 — Safety Harness & Fall Protection Kit
  {
    overview: "Comprehensive safety solution designed for technicians working on rooftops, elevated solar structures, and utility-scale installations.",
    features: ["Full Body Harness", "Shock Absorbing Lanyard", "Fall Arrest System", "Safety Certified"],
    specs: [["Harness Material", "Polyester Webbing"], ["Load Capacity", "140 kg"], ["Lanyard Length", "1.8 m"], ["Standards", "IS/EN Certified"]],
    applications: ["Rooftop Solar Maintenance", "Inspection Activities", "Installation Work", "AMC Operations"],
    included: ["Full Body Harness", "Double Lanyard", "Anchorage Connector", "Carry Bag"],
  },
  // 5 — Torque Wrench
  {
    overview: "Ensures precise bolt tightening according to manufacturer specifications, critical for solar module mounting and structural safety.",
    features: ["Adjustable Torque Settings", "High Accuracy", "Durable Construction"],
    specs: [["Torque Range", "20–200 Nm"], ["Accuracy", "±4%"], ["Drive Size", "½ Inch"], ["Material", "Chrome Vanadium Steel"]],
  },
  // 6 — Socket & Ratchet Set
  {
    overview: "A complete fastening solution for installation and maintenance work on solar mounting structures and electrical enclosures.",
    specs: [["Socket Sizes", "8–32 mm"], ["Material", "Chrome Vanadium Steel"], ["Pieces", "46"], ["Ratchet Drive", "½ Inch"]],
  },
  // 7 — Combination Spanner Set
  {
    overview: "Professional-grade spanner set for tightening and loosening nuts and bolts during solar installation and maintenance.",
    specs: [["Size Range", "6–32 mm"], ["Material", "Chrome Vanadium Steel"], ["Pieces", "12"]],
  },
  // 8 — Screwdriver Set
  {
    overview: "Multi-purpose screwdriver set suitable for inverter maintenance, electrical panel servicing, and general site work.",
    specs: [["Types", "Flat, Phillips, Torx"], ["Material", "Hardened Steel"], ["Handle Type", "Insulated Grip"], ["Pieces", "12"]],
  },
  // 9 — Pliers Set
  {
    overview: "Essential hand tools for gripping, cutting, bending, and electrical work during installation and maintenance activities.",
    included: ["Combination Plier", "Long Nose Plier", "Side Cutter", "Wire Stripper"],
    includedLabel: "Included Tools",
  },
  // 10 — Tool Box Set
  {
    overview: "Comprehensive storage and transportation solution for hand tools and maintenance equipment.",
    specs: [["Material", "Impact-Resistant Plastic"], ["Compartments", "Multiple"], ["Carry Handle", "Yes"]],
  },
  // 11 — Portable Work Light
  {
    overview: "Provides reliable illumination during nighttime maintenance, inspections, and emergency repair activities.",
    features: ["Rechargeable Battery", "Adjustable Brightness", "Weather Resistant"],
    specs: [["Brightness", "3000 Lumens"], ["Runtime", "Up to 8 Hours"], ["Battery", "Lithium-Ion"]],
  },
  // 12 — Inspection Drone
  {
    overview: "Advanced aerial inspection platform for solar plant monitoring, thermal inspections, and fault identification.",
    features: ["High-Resolution Camera", "Thermal Imaging Option", "GPS Navigation", "Automated Flight Modes"],
    specs: [["Flight Time", "35 Minutes"], ["Camera Resolution", "48 MP"], ["Transmission Range", "10 km"], ["Positioning", "GPS/GLONASS"]],
    applications: ["Thermal Inspection", "Site Surveys", "Asset Monitoring", "Performance Assessment"],
  },
  // 13 — Laser Distance Meter
  {
    overview: "Precision measurement tool for site surveys, installation planning, and structural verification.",
    specs: [["Measuring Range", "0.05–100 m"], ["Accuracy", "±1.5 mm"], ["Display", "Backlit LCD"]],
  },
];

const allDetails: Detail[][] = [cleaningDetails, electricalDetails, mechanicalDetails];

// ── Product Details renderer ─────────────────────────────────────────────────

function ProductDetails({ detail }: { detail: Detail }) {
  const hasContent = detail.overview || (detail.features && detail.features.length) || (detail.specs && detail.specs.length) || (detail.applications && detail.applications.length) || (detail.included && detail.included.length) || detail.warranty;
  if (!hasContent) return null;
  return (
    <div className={styles.detailContent}>
      {detail.overview && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>Product Overview</h4>
          <p className={styles.detailText}>{detail.overview}</p>
        </div>
      )}
      {detail.features && detail.features.length > 0 && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>{detail.featuresLabel ?? "Key Features"}</h4>
          <ul className={styles.detailList}>
            {detail.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      )}
      {detail.specs && detail.specs.length > 0 && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>Technical Specifications</h4>
          <table className={styles.detailTable}>
            <tbody>
              {detail.specs.map(([param, value]) => (
                <tr key={param}>
                  <td className={styles.detailParam}>{param}</td>
                  <td className={styles.detailValue}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {detail.applications && detail.applications.length > 0 && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>Applications</h4>
          <ul className={styles.detailList}>
            {detail.applications.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      )}
      {detail.included && detail.included.length > 0 && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>{detail.includedLabel ?? "What's Included"}</h4>
          <ul className={styles.detailList}>
            {detail.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
      {detail.warranty && (
        <div className={styles.detailSection}>
          <h4 className={styles.detailHeading}>Warranty</h4>
          <p className={styles.detailText}>{detail.warranty}</p>
        </div>
      )}
    </div>
  );
}

// ── Static components ────────────────────────────────────────────────────────

const services = [
  ["Manual Cleaning", "₹15 / Panel*", "/assets/services/Manual Cleaning 1.png"],
  ["Robotic Cleaning", "₹20 / Panel*", "/assets/services/Robotic cleaning 1.png"],
  ["Drone Inspection", "₹4,500 / MW", "/assets/services/Service ispection.png"],
  ["Thermal Inspection", "₹3,000 / MW", "/assets/Store Page/Services/Thermal Inspection.png"],
  ["Electrical Inspection", "₹2,500 / MW", "/assets/Store Page/Services/Electrical Inspection.png"],
  ["Preventive Maintenance", "₹8 / Panel", "/assets/Store Page/Services/Preventive Maintenance.png"],
  ["Performance Monitoring", "₹750 / MW / Month", "/assets/Store Page/Services/Performance Monitoring.png"],
  ["Performance Optimization", "₹2,000 / MW", "/assets/services/Performance Optimization.png"],
  ["Technical Consultation", "₹5,000 / Visit", "/assets/Store Page/Services/Technical consultation.png"],
];

const BOOKABLE_SERVICES = new Set(["Robotic Cleaning", "Manual Cleaning"]);

const VISIBLE = 5;

const heroImages = [
  "/assets/Store Page/Hero section.png",
  "/assets/Store Page/2.png",
  "/assets/Store Page/3.png",
  "/assets/Store Page/4.png",
  "/assets/Store Page/5.png",
];

const heroScrollTargets = [
  null,
  "section-cleaning",
  "section-electrical",
  "section-mechanical",
  "section-services",
];

// ── Request Quote Modal ─────────────────────────────────────────────────────

const initialQuoteForm = {
  fullName: "", company: "", email: "", phone: "",
  quantity: "", product: "", location: "", address: "", additional: "",
};

function RequestQuoteModal({ initialProduct, onClose }: { initialProduct: string; onClose: () => void }) {
  const [form, setForm] = useState({ ...initialQuoteForm, product: initialProduct });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [closing, setClosing] = useState(false);

  const canSubmit = Boolean(
    form.fullName.trim() && form.company.trim() && form.email.trim() &&
    form.phone.trim() && form.quantity.trim() && form.product &&
    form.location.trim() && form.address.trim()
  );

  function handleClose() {
    setClosing(true);
    setTimeout(onClose, 200);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") handleClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      await submitEnquiry("Store Quote", form);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not send your quote request right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const overlayClass = `${styles.quoteOverlay}${closing ? " " + styles.quoteOverlayClosing : ""}`;
  const boxClass = `${styles.quoteBox}${closing ? " " + styles.quoteBoxClosing : ""}`;
  const closeIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/>
    </svg>
  );

  if (submitted) {
    return (
      <div className={overlayClass} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
        <div className={boxClass}>
          <button className={styles.quoteClose} onClick={handleClose} aria-label="Close">{closeIcon}</button>
          <div className={styles.quoteSuccess}>
            <div className={styles.quoteSuccessIcon}>✓</div>
            <h2>Request Submitted!</h2>
            <p>Thank you. Our team will contact you shortly with a customised quote.</p>
            <button className={styles.quoteSubmitBtn} type="button" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={overlayClass} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className={boxClass}>
        <button className={styles.quoteClose} onClick={handleClose} aria-label="Close">{closeIcon}</button>
        <div className={styles.quoteHeader}>
          <h2>Request Quote</h2>
          <p>Fill in the details below and we'll get back to you promptly.</p>
        </div>
        <form className={styles.quoteForm} onSubmit={handleSubmit}>
          <div className={styles.quoteGrid}>
            <label className={styles.quoteField}>
              <span>Full Name <em>*</em></span>
              <input type="text" placeholder="Enter your full name" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} required />
            </label>
            <label className={styles.quoteField}>
              <span>Company Name <em>*</em></span>
              <input type="text" placeholder="Enter company name" value={form.company} onChange={(e) => update("company", e.target.value)} required />
            </label>
            <label className={styles.quoteField}>
              <span>Email Address <em>*</em></span>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </label>
            <label className={styles.quoteField}>
              <span>Phone Number <em>*</em></span>
              <input type="tel" inputMode="numeric" placeholder="Enter phone number" value={form.phone} onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))} required />
            </label>
            <label className={styles.quoteField}>
              <span>Quantity Required <em>*</em></span>
              <input type="text" inputMode="numeric" placeholder="e.g. 5" value={form.quantity} onChange={(e) => update("quantity", e.target.value.replace(/\D/g, ""))} required />
            </label>
            <label className={styles.quoteField}>
              <span>Delivery Location <em>*</em></span>
              <input type="text" placeholder="City, State" value={form.location} onChange={(e) => update("location", e.target.value)} required />
            </label>
          </div>
          <label className={styles.quoteField}>
            <span>Product <em>*</em></span>
            <select value={form.product} onChange={(e) => update("product", e.target.value)} required>
              <option value="" disabled>Select a product or service</option>
              <optgroup label="Cleaning Equipment">
                {cleaningTools.map((p) => <option key={p[1]} value={p[1]}>{p[1]}</option>)}
              </optgroup>
              <optgroup label="Electrical Tools & Testing Equipment">
                {electricalTools.map((p) => <option key={p[1]} value={p[1]}>{p[1]}</option>)}
              </optgroup>
              <optgroup label="Mechanical Tools & Maintenance Equipment">
                {mechanicalTools.map((p) => <option key={p[1]} value={p[1]}>{p[1]}</option>)}
              </optgroup>
              <optgroup label="Expert Services">
                {services.filter((s) => !BOOKABLE_SERVICES.has(s[0])).map((s) => <option key={s[0]} value={s[0]}>{s[0]}</option>)}
              </optgroup>
            </select>
          </label>
          <label className={styles.quoteField}>
            <span>Address <em>*</em></span>
            <textarea placeholder="Enter full delivery address" value={form.address} onChange={(e) => update("address", e.target.value)} rows={2} required />
          </label>
          <label className={styles.quoteField}>
            <span>Additional Requirements</span>
            <textarea placeholder="Any special requirements, custom specifications, or notes..." value={form.additional} onChange={(e) => update("additional", e.target.value)} rows={3} />
          </label>
          {submitError && <p style={{ color: "#b91c1c", margin: 0, fontWeight: 500 }}>{submitError}</p>}
          <div className={styles.quoteActions}>
            <button type="submit" className={styles.quoteSubmitBtn} disabled={!canSubmit || submitting}>
              {submitting ? "Sending..." : "Request Quote"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Static components ────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link className="logo" href="/">
      <Image className="brand-logo" src="/assets/Navbar/LOGO.png" alt="Integrids" width={1024} height={827} priority />
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
      <Link className="footer-logo-link" href="/"><img className="footer-logo-img" src="/assets/Navbar/LOGO.png" alt="Integrids" /></Link>
      <div><b>QUICK LINKS</b><p><br /><Link href="/about-us">About Us</Link><br /><Link href="/services">Services</Link><br /><Link href="/store">Store</Link></p></div>
      <div><b>SERVICES</b><p><Link href="/services#cleaning-services">Robotic Cleaning</Link><br /><Link href="/services#cleaning-services">Manual Cleaning</Link><br /><Link href="/services#inspection-services">Inspection Services</Link><br /><Link href="/services#performance-support-services">Performance Optimization</Link><br /><Link href="/services#performance-support-services">AMC Contracts</Link></p></div>
      <div><b>CONTACT US</b><p><a href="tel:+918424097069">8424097069</a><br /><a href="mailto:info@integrids.in">info@integrids.in</a><br /><a href="https://www.google.com/maps/place/SOLARINERTIA+POWER+PVT+LTD/@20.3227691,72.9687473,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0cd8eca385029:0x85d13c646149b569!8m2!3d20.3227641!4d72.9713222!16s%2Fg%2F11q48036y2?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Silvassa, Gujarat</a><br /><a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjY6JiFh4mVAxUAAAAAHQAAAAAQLw..i&pvq=CgwvZy8xaGh4OHE3dnciEwoNc29sYXIgaW5lcnRpYRACGAM&lqi=ChZzb2xhciBpbmVydGlhIHNpbHZhc3NhSNu-rMS_j4CACFocEAAQASIWc29sYXIgaW5lcnRpYSBzaWx2YXNzYZIBFHNvbGFyX2VuZXJneV9jb21wYW55&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7c86c6e5d6429:0x4d43856bf5803219" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra</a></p></div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 11 8 5 13 11"/></svg></button>
      <div><b>FOLLOW US</b><p className="footer-social"><a href="https://www.linkedin.com/company/solarinertiapower/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.youtube.com/@solarinertia" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://www.instagram.com/solarinertia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a></p></div>
    </footer>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function StorePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(0);
  const [showCleaning, setShowCleaning] = useState(false);
  const [showElectrical, setShowElectrical] = useState(false);
  const [showMechanical, setShowMechanical] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [popup, setPopup] = useState<{ section: number; index: number } | null>(null);
  const [popupClosing, setPopupClosing] = useState(false);
  const [quoteModal, setQuoteModal] = useState<string | null>(null);

  function openPopup(section: number, index: number) {
    setPopupClosing(false);
    setPopup({ section, index });
  }

  function closePopup() {
    setPopupClosing(true);
    setTimeout(() => { setPopup(null); setPopupClosing(false); }, 200);
  }

  function openQuote(productName: string) {
    setQuoteModal(productName);
  }

  function addToCart(name: string, price: string, image: string) {
    const existing: CartItem[] = JSON.parse(localStorage.getItem("solarCart") || "[]");
    const idx = existing.findIndex((item) => item.name === name);
    if (idx >= 0) {
      existing[idx].quantity = Math.min(50, existing[idx].quantity + 1);
    } else {
      existing.push({ id: `${name}-${Date.now()}`, name, price, image, quantity: 1 });
    }
    localStorage.setItem("solarCart", JSON.stringify(existing));
    router.push("/cart");
  }

  function popupNav(delta: number) {
    if (!popup) return;
    const next = popup.index + delta;
    const max = sectionData[popup.section].length - 1;
    if (next < 0 || next > max) return;
    setPopup({ section: popup.section, index: next });
  }

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

  // Ref that holds the card ID we need to scroll to after View More expands
  const pendingScrollId = useRef<string | null>(null);

  // Fires on every navigation (including repeated same-card clicks, because ?t= changes each time)
  useEffect(() => {
    const card = searchParams.get("card");
    if (!card) return;
    const hiddenIds = services
      .slice(VISIBLE)
      .map((s) => `svc-${s[0].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`);
    if (hiddenIds.includes(card)) {
      // Card is in the hidden area — expand View More if needed, then scroll
      pendingScrollId.current = card;
      setShowServices((prev) => {
        if (prev) {
          // Already expanded: trigger scroll directly via a microtask
          // (the showServices effect won't re-fire because state didn't change)
          setTimeout(() => {
            const el = document.getElementById(card);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 120);
        }
        return true;
      });
    } else {
      // Card is in the first VISIBLE items — scroll directly
      setTimeout(() => {
        const el = document.getElementById(card);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
  }, [searchParams]);

  // After showServices flips from false → true, scroll to the pending card
  useEffect(() => {
    if (!showServices || !pendingScrollId.current) return;
    const targetId = pendingScrollId.current;
    pendingScrollId.current = null;
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  }, [showServices]);

  useEffect(() => {
    if (!popup) return;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePopup();
      if (e.key === "ArrowLeft") popupNav(-1);
      if (e.key === "ArrowRight") popupNav(1);
    }
    document.addEventListener("keydown", handleKey);
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [popup]);

  const visibleCleaning = showCleaning ? cleaningTools : cleaningTools.slice(0, VISIBLE);
  const visibleElectrical = showElectrical ? electricalTools : electricalTools.slice(0, VISIBLE);
  const visibleMechanical = showMechanical ? mechanicalTools : mechanicalTools.slice(0, VISIBLE);
  const visibleServices = showServices ? services : services.slice(0, VISIBLE);

  return (
    <main className={styles.page}>
      <header>
        <Logo />
        <Link href="/" aria-label="Home"><img src="/assets/Navbar/GS.png" alt="" className="navbar-ig" /></Link>
        <nav>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/package">Package</Link>
          <Link className="active" href="/store">Store</Link>
          <Link href="/book-cleaning">Booking</Link>
          <Link className="cart-btn" href="/cart" aria-label="Cart"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link>
        </nav>
      </header>

      <section className={styles.hero}>
        {heroImages.map((src, i) => {
          const target = heroScrollTargets[i];
          const cls = `${styles.heroSlide}${i === 0 ? " " + styles.heroSlide0 : ""}${i === current ? " " + styles.heroSlideActive : ""}`;
          if (target) {
            const isActive = i === current;
            return (
              <a
                key={i}
                className={cls}
                style={{ backgroundImage: `url("${src}")`, cursor: isActive ? "pointer" : "default", textDecoration: "none", pointerEvents: isActive ? "auto" : "none" }}
                href={`#${target}`}
                onClick={(e) => { e.preventDefault(); document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }); }}
                aria-label={`Scroll to section`}
              />
            );
          }
          return (
            <div
              key={i}
              className={cls}
              style={{ backgroundImage: `url("${src}")` }}
            />
          );
        })}
        <div className={`${styles.heroCopy} ${current === 0 ? styles.heroContentVisible : styles.heroContentHidden}`}>
          <h1>Everything You Need<br />for <em>Clean, Efficient Solar</em></h1>
          <p>Explore our professional-grade tools and expert services designed to maximize performance and extend the life of your solar assets.</p>
        </div>
        <div className={`${styles.heroStrip} ${current === 0 ? styles.heroContentVisible : styles.heroContentHidden}`}>
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.56 14.88L7 22l5-3 5 3-1.56-7.12"/></svg>
            <span className={styles.heroFeatureName}>Premium<br />Quality</span>
          </div>
          <div className={styles.heroStripDivider} />
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 3z"/></svg>
            <span className={styles.heroFeatureName}>Reliable<br />Performance</span>
          </div>
          <div className={styles.heroStripDivider} />
          <div className={styles.heroFeature}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <span className={styles.heroFeatureName}>Fast & Safe<br />Delivery</span>
          </div>
        </div>
        <div className={styles.heroIndicators}>
          {heroImages.map((_, i) => (
            <button key={i} className={`${styles.heroDot}${i === current ? " " + styles.heroDotActive : ""}`} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Professional Tools */}
      <section className={`${styles.wrap} reveal`} id="tools">
        <SectionTitle>Professional Tools for Every Solar Need</SectionTitle>

        {/* Cleaning Equipment */}
        <div className={styles.toolsSubsection} id="section-cleaning">
          <SubsectionHeading>Cleaning Equipment</SubsectionHeading>
          <div className={styles.productGrid}>
            {visibleCleaning.map((product, index) => (
              <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                {product[0] && <span className={styles.badge}>{product[0]}</span>}
                <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                <h3>{index + 1}. {product[1]}</h3>
                <b>{product[2]}</b>
                <button className={styles.viewDetailsBtn} onClick={() => openPopup(0, index)}>View Details →</button>
              </article>
            ))}
          </div>
          {cleaningTools.length > VISIBLE && (
            <ViewMoreBtn expanded={showCleaning} onClick={() => setShowCleaning((v) => !v)} />
          )}
        </div>

        {/* Electrical Tools */}
        <div className={styles.toolsSubsection} id="section-electrical">
          <SubsectionHeading>Electrical Tools & Testing Equipment</SubsectionHeading>
          {visibleElectrical.length > 0 ? (
            <div className={styles.productGrid}>
              {visibleElectrical.map((product, index) => (
                <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                  {product[0] && <span className={styles.badge}>{product[0]}</span>}
                  <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                  <h3>{index + 1}. {product[1]}</h3>
                  <b>{product[2]}</b>
                  <button className={styles.viewDetailsBtn} onClick={() => openPopup(1, index)}>View Details →</button>
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
        <div className={styles.toolsSubsection} id="section-mechanical">
          <SubsectionHeading>Mechanical Tools & Maintenance Equipment</SubsectionHeading>
          {visibleMechanical.length > 0 ? (
            <div className={styles.productGrid}>
              {visibleMechanical.map((product, index) => (
                <article className={`${styles.productCard} reveal-scale`} key={product[1]}>
                  {product[0] && <span className={styles.badge}>{product[0]}</span>}
                  <Image className="reveal-scale" src={product[3]} alt={product[1]} width={220} height={160} />
                  <h3>{index + 1}. {product[1]}</h3>
                  <b>{product[2]}</b>
                  <button className={styles.viewDetailsBtn} onClick={() => openPopup(2, index)}>View Details →</button>
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
      <section className={`${styles.wrap} ${styles.servicesSection} reveal`} id="section-services">
        <SectionTitle subtitle="From cleaning to monitoring and optimization — our expert services keep your solar systems running at their best.">Expert Services for Peak Solar Performance</SectionTitle>
        <div className={styles.serviceGrid}>
          {visibleServices.map((service) => (
            <article className={`${styles.serviceCard} reveal-scale`} key={service[0]} id={`svc-${service[0].toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}`}>
              <Image className="reveal-scale" src={service[2]} alt={service[0]} width={220} height={130} />
              <h3>{service[0]}</h3>
              <b>{service[1]}</b>
              {BOOKABLE_SERVICES.has(service[0]) ? (
                <Link href="/book-cleaning" className={styles.serviceQuoteBtn}>Book Now →</Link>
              ) : (
                <button type="button" className={styles.serviceQuoteBtn} onClick={() => addToCart(service[0], service[1], service[2])}>Add to Cart →</button>
              )}
            </article>
          ))}
        </div>
        {services.length > VISIBLE && (
          <ViewMoreBtn expanded={showServices} onClick={() => setShowServices((v) => !v)} />
        )}
      </section>

      <Footer />

      {/* Request Quote Modal */}
      {quoteModal !== null && (
        <RequestQuoteModal
          initialProduct={quoteModal}
          onClose={() => setQuoteModal(null)}
        />
      )}

      {/* Product Details Popup */}
      {popup !== null && (
        <div
          className={`${styles.popupOverlay}${popupClosing ? " " + styles.popupOverlayClosing : ""}`}
          onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
        >
          <button
            className={`${styles.navArrow}${popup.index === 0 ? " " + styles.navArrowDisabled : ""}`}
            onClick={() => popupNav(-1)}
            disabled={popup.index === 0}
            aria-label="Previous product"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 4 6 9 11 14"/></svg>
          </button>

          <div className={`${styles.popupBox}${popupClosing ? " " + styles.popupBoxClosing : ""}`}>
            <button className={styles.popupClose} onClick={closePopup} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/></svg>
            </button>

            <div className={styles.popupBody}>
              <div className={styles.popupScroll}>
                <div className={styles.popupImgWrap}>
                  <img
                    className={styles.popupImg}
                    src={sectionData[popup.section][popup.index][3]}
                    alt={sectionData[popup.section][popup.index][1]}
                  />
                </div>
                <div className={styles.popupScrollBody}>
                  <h3 className={styles.popupTitle}>{sectionData[popup.section][popup.index][1]}</h3>
                  <p className={styles.popupPrice}>{sectionData[popup.section][popup.index][2]}</p>
                  <hr className={styles.popupDivider} />
                </div>
                <div className={styles.popupDetails}>
                  <ProductDetails detail={allDetails[popup.section][popup.index]} />
                </div>
              </div>

              <div className={styles.popupActions}>
                <button type="button" className={styles.popupQuoteBtn} onClick={() => { const p = sectionData[popup.section][popup.index]; addToCart(p[1], p[2], p[3]); }}>Add to Cart →</button>
              </div>
            </div>
          </div>

          <button
            className={`${styles.navArrow}${popup.index === sectionData[popup.section].length - 1 ? " " + styles.navArrowDisabled : ""}`}
            onClick={() => popupNav(1)}
            disabled={popup.index === sectionData[popup.section].length - 1}
            aria-label="Next product"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 4 12 9 7 14"/></svg>
          </button>
        </div>
      )}
    </main>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={null}>
      <StorePageContent />
    </Suspense>
  );
}
