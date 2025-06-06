import React, { useState } from "react";
function LowHighPassFilterCalculator() {
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [freq, setFreq] = useState(null);

  const handleCalculate = () => {
    const r = parseFloat(resistance);
    const c = parseFloat(capacitance);
    if (r > 0 && c > 0) setFreq((1 / (2 * Math.PI * r * c)).toFixed(3));
    else setFreq(null);
  };

  return (
    <div>
      <h2>Low/High Pass RC Filter Calculator</h2>
      <input type="number" placeholder="Resistance (Ω)" value={resistance} onChange={e => setResistance(e.target.value)} />
      <input type="number" placeholder="Capacitance (F)" value={capacitance} onChange={e => setCapacitance(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {freq && <div style={{ marginTop: 16 }}>Cutoff Frequency: <b>{freq} Hz</b></div>}
    </div>
  );
}
export default LowHighPassFilterCalculator;
