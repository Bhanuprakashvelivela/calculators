import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Home from "./pages/Home";

// Import all calculators
import CapacitanceConversion from "./calculators/CapacitanceConversion";
import DbmToWattsConversion from "./calculators/DbmToWattsConversion";
import DecimalFractionConversion from "./calculators/DecimalFractionConversion";
import EnergyConversion from "./calculators/EnergyConversion";
import ForceConversion from "./calculators/ForceConversion";
import FrequencyToWavelength from "./calculators/FrequencyToWavelength";
import InductanceConversion from "./calculators/InductanceConversion";
import LengthConversion from "./calculators/LengthConversion";
import NumberConversion from "./calculators/NumberConversion";
import PressureConversion from "./calculators/PressureConversion";
import TemperatureConversion from "./calculators/TemperatureConversion";
import VolumeConversion from "./calculators/VolumeConversion";
import WeightConversion from "./calculators/WeightConversion";
import WireSizeConversion from "./calculators/WireSizeConversion";
import Timer555Calculator from "./calculators/Timer555Calculator";
import AttenuatorCalculator from "./calculators/AttenuatorCalculator";
import BatteryLifeCalculator from "./calculators/BatteryLifeCalculator";
import CapacitorDischargeCalculator from "./calculators/CapacitorDischargeCalculator";
import CurrentDividerCalculator from "./calculators/CurrentDividerCalculator";
import LedSeriesResistorCalculator from "./calculators/LedSeriesResistorCalculator";
import LowHighPassFilterCalculator from "./calculators/LowHighPassFilterCalculator";
import OhmsLawCalculator from "./calculators/OhmsLawCalculator";
import ParallelSeriesResistorCalculator from "./calculators/ParallelSeriesResistorCalculator";
import PCBTraceWidthCalculator from "./calculators/PCBTraceWidthCalculator";
import ReactanceCalculator from "./calculators/ReactanceCalculator";
import SeriesParallelCapacitorCalculator from "./calculators/SeriesParallelCapacitorCalculator";
import ThreePhaseCalculator from "./calculators/ThreePhaseCalculator";
import TimeConstantCalculator from "./calculators/TimeConstantCalculator";
import TraceImpedanceCalculator from "./calculators/TraceImpedanceCalculator";
import VoltageDividerCalculator from "./calculators/VoltageDividerCalculator";
import ElectricalPlugReference from "./calculators/ElectricalPlugReference";
import ResistorColorCodeCalculator from "./calculators/ResistorColorCodeCalculator";
import SMDResistorCodeCalculator from "./calculators/SMDResistorCodeCalculator";
import SMDCapacitorCodeCalculator from "./calculators/SMDCapacitorCodeCalculator";

function App() {
  const [tab, setTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <DashboardHeader
        tab={tab}
        onTabChange={setTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={setSearchTerm}
      />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home tab={tab} searchTerm={searchTerm} />} />

          {/* Conversion */}
          <Route path="/capacitance-conversion" element={<CapacitanceConversion />} />
          <Route path="/dbm-to-watts-conversion" element={<DbmToWattsConversion />} />
          <Route path="/decimal-fraction-conversion" element={<DecimalFractionConversion />} />
          <Route path="/energy-conversion" element={<EnergyConversion />} />
          <Route path="/force-conversion" element={<ForceConversion />} />
          <Route path="/frequency-to-wavelength" element={<FrequencyToWavelength />} />
          <Route path="/inductance-conversion" element={<InductanceConversion />} />
          <Route path="/length-conversion" element={<LengthConversion />} />
          <Route path="/number-conversion" element={<NumberConversion />} />
          <Route path="/pressure-conversion" element={<PressureConversion />} />
          <Route path="/temperature-conversion" element={<TemperatureConversion />} />
          <Route path="/volume-conversion" element={<VolumeConversion />} />
          <Route path="/weight-conversion" element={<WeightConversion />} />
          <Route path="/wire-size-conversion" element={<WireSizeConversion />} />

          {/* Calculation */}
          <Route path="/timer-555-calculator" element={<Timer555Calculator />} />
          <Route path="/attenuator-calculator" element={<AttenuatorCalculator />} />
          <Route path="/battery-life-calculator" element={<BatteryLifeCalculator />} />
          <Route path="/capacitor-discharge-calculator" element={<CapacitorDischargeCalculator />} />
          <Route path="/current-divider-calculator" element={<CurrentDividerCalculator />} />
          <Route path="/led-series-resistor-calculator" element={<LedSeriesResistorCalculator />} />
          <Route path="/low-high-pass-filter-calculator" element={<LowHighPassFilterCalculator />} />
          <Route path="/ohms-law-calculator" element={<OhmsLawCalculator />} />
          <Route path="/parallel-series-resistor-calculator" element={<ParallelSeriesResistorCalculator />} />
          <Route path="/pcb-trace-width-calculator" element={<PCBTraceWidthCalculator />} />
          <Route path="/reactance-calculator" element={<ReactanceCalculator />} />
          <Route path="/series-parallel-capacitor-calculator" element={<SeriesParallelCapacitorCalculator />} />
          <Route path="/three-phase-calculator" element={<ThreePhaseCalculator />} />
          <Route path="/time-constant-calculator" element={<TimeConstantCalculator />} />
          <Route path="/trace-impedance-calculator" element={<TraceImpedanceCalculator />} />
          <Route path="/voltage-divider-calculator" element={<VoltageDividerCalculator />} />

          {/* Identification */}
          <Route path="/electrical-plug-reference" element={<ElectricalPlugReference />} />
          <Route path="/resistor-color-code-calculator" element={<ResistorColorCodeCalculator />} />
          <Route path="/smd-resistor-code-calculator" element={<SMDResistorCodeCalculator />} />
          <Route path="/smd-capacitor-code-calculator" element={<SMDCapacitorCodeCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
