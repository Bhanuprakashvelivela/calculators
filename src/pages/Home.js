import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for routing
import './Home.css';

const calculators = [
  // Your provided calculators array
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
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Decimal Fraction Conversion",
    description: "Convert decimal numbers to the closest fractional value.",
    to: "/decimal-fraction-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Energy Conversion",
    description: "Convert between Joules, calories, Wh, BTU, and more.",
    to: "/energy-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Force Conversion",
    description: "Convert force values (N, kgf, lbf, dynes).",
    to: "/force-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Frequency to Wavelength",
    description: "Convert frequency to wavelength.",
    to: "/frequency-to-wavelength",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Inductance Conversion",
    description: "Convert inductance values between μH, mH, H.",
    to: "/inductance-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Length Conversion",
    description: "Convert between meters, feet, inches, and more.",
    to: "/length-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Number Conversion",
    description: "Convert decimal, hex, binary, octal numbers.",
    to: "/number-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Pressure Conversion",
    description: "Convert between Pa, psi, bar, atm, mmHg, etc.",
    to: "/pressure-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Temperature Conversion",
    description: "Convert between Celsius, Fahrenheit, Kelvin.",
    to: "/temperature-conversion-calculator",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Volume Conversion",
    description: "Convert liters, gallons, cups, etc.",
    to: "/volume-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Weight Conversion",
    description: "Convert kilograms, pounds, ounces, grams, etc.",
    to: "/weight-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Wire Size Conversion",
    description: "Convert AWG to mm² and more.",
    to: "/wire-size-conversion",
    icon: "🧮",
    category: "conversion"
  },
  {
    title: "Ohm's Law Calculator",
    description: "Calculate voltage, current, resistance, or power.",
    to: "/ohms-law-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Voltage Divider Calculator",
    description: "Calculate output of a resistive voltage divider.",
    to: "/voltage-divider-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Resistor Color Code Calculator",
    description: "Decode color bands on resistors.",
    to: "/resistor-color-code-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Parallel and Series Resistor Calculator",
    description: "Calculate total resistance for parallel/series.",
    to: "/parallel-series-resistor-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "LED Series Resistor Calculator",
    description: "Find the correct resistor for LEDs.",
    to: "/led-series-resistor-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Capacitor Discharge Calculator",
    description: "Calculate voltage during capacitor discharge.",
    to: "/capacitor-discharge-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Battery Life Calculator",
    description: "Estimate battery life based on load and capacity.",
    to: "/battery-life-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Low/High Pass RC Filter Calculator",
    description: "Calculate -3dB frequency for RC filters.",
    to: "/low-high-pass-filter-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "PCB Trace Width Calculator",
    description: "Calculate PCB trace width for given current.",
    to: "/pcb-trace-width-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Three Phase Power Calculator",
    description: "Calculate power for three-phase circuits.",
    to: "/three-phase-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Attenuator Calculator",
    description: "Convert between dB and voltage ratio.",
    to: "/attenuator-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Reactance Calculator",
    description: "Calculate capacitive/inductive reactance.",
    to: "/reactance-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "RC Time Constant Calculator",
    description: "Calculate RC time constant τ.",
    to: "/time-constant-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Trace Impedance Calculator",
    description: "Calculate PCB microstrip impedance.",
    to: "/trace-impedance-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "LC Resonant Frequency Calculator",
    description: "Find the resonant frequency for an LC circuit.",
    to: "/lc-resonant-frequency-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "555 Timer Calculator",
    description: "Calculate frequency/duty cycle for 555 circuits.",
    to: "/timer-555-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Current Divider Calculator",
    description: "Calculate current in each branch of parallel resistors.",
    to: "/current-divider-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Series/Parallel Capacitor Calculator",
    description: "Calculate total for capacitors in series or parallel.",
    to: "/series-parallel-capacitor-calculator",
    icon: "🧮",
    category: "calculation"
  },
  {
    title: "Electrical Plug Reference",
    description: "Reference for plug types used worldwide.",
    to: "/electrical-plug-reference",
    icon: "🧮",
    category: "identification"
  },
  {
    title: "SMD Resistor Code Calculator",
    description: "Decode 3- and 4-digit SMD resistor codes.",
    to: "/smd-resistor-code-calculator",
    icon: "🧮",
    category: "identification"
  },
  {
    title: "SMD Capacitor Code Calculator",
    description: "Decode SMD capacitor codes (EIA-198).",
    to: "/smd-capacitor-code-calculator",
    icon: "🧮",
    category: "identification"
  }
];

const Home = () => {
  // Group calculators by category
  const groupedCalculators = calculators.reduce((acc, calc) => {
    acc[calc.category] = acc[calc.category] || [];
    acc[calc.category].push(calc);
    return acc;
  }, {});

  return (
    <div className="home">
      <h1>Calculators</h1>
      {Object.keys(groupedCalculators).map((category) => (
        <div key={category} className="category-section">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="calculator-list">
            {groupedCalculators[category].map((calc) => (
              <Link
                key={calc.title}
                to={calc.to}
                className="calculator-card"
              >
                <span className="calculator-icon">{calc.icon}</span>
                <h3>{calc.title}</h3>
                <p>{calc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Export as default
export default Home;