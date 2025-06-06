import React from "react";
import CalculatorCard from "../components/CalculatorCard";

const calculators = [
  // --- Conversion
  {
    title: "Capacitance Conversion",
    description: "Convert capacitance values between pF, nF, μF, and F.",
    to: "/capacitance-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "dBm to Watts Conversion",
    description: "Convert decibel-milliwatts (dBm) to Watts.",
    to: "/dbm-to-watts-conversion",
    icon: "⚡",
    category: "conversion"
  },
  // Add the rest for conversion, calculation, and identification categories
  // Example:
  {
    title: "Ohm's Law Calculator",
    description: "Calculate voltage, current, resistance, or power.",
    to: "/ohms-law-calculator",
    icon: "🔌",
    category: "calculation"
  },
  {
    title: "Resistor Color Code Calculator",
    description: "Decode color bands on resistors.",
    to: "/resistor-color-code-calculator",
    icon: "🎨",
    category: "identification"
  },
  // Add all other calculators!
];

function Home({ tab, searchTerm }) {
  const filtered = calculators.filter(c =>
    (tab === "all" || c.category === tab) &&
    (c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     c.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div>
      <div className="most-popular">Most Popular</div>
      <div className="calculator-grid">
        {filtered.map(calc => (
          <CalculatorCard key={calc.to} {...calc} />
        ))}
      </div>
    </div>
  );
}
export default Home;
