import React, { useState } from "react";
function FrequencyToWavelength() {
  const [frequency, setFrequency] = useState("");
  const [unit, setUnit] = useState("MHz");
  const [wavelength, setWavelength] = useState(null);

  const handleCalculate = () => {
    let f = parseFloat(frequency);
    if (isNaN(f) || f <= 0) return setWavelength(null);
    // Convert input to Hz
    if (unit === "kHz") f *= 1e3;
    else if (unit === "MHz") f *= 1e6;
    else if (unit === "GHz") f *= 1e9;
    // else unit === "Hz", do nothing
    const wl = 299792458 / f;
    setWavelength(wl);
  };

  return (
    <div>
      <h2>Frequency to Wavelength Calculator</h2>
      <input type="number" placeholder="Frequency" value={frequency} onChange={e => setFrequency(e.target.value)} />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        <option value="Hz">Hz</option>
        <option value="kHz">kHz</option>
        <option value="MHz">MHz</option>
        <option value="GHz">GHz</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      {wavelength && (
        <div style={{ marginTop: 16 }}>
          Wavelength: <b>{wavelength < 1 ? `${(wavelength * 100).toFixed(3)} cm` : `${wavelength.toFixed(3)} m`}</b>
        </div>
      )}
    </div>
  );
}
export default FrequencyToWavelength;
