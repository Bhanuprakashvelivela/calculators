import React, { useState } from "react";

function LCResonantFrequencyCalculator() {
  const [inductance, setInductance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [frequency, setFrequency] = useState(null);

  const calculate = () => {
    const L = parseFloat(inductance);
    const C = parseFloat(capacitance);
    if (L > 0 && C > 0) {
      const f = 1 / (2 * Math.PI * Math.sqrt(L * 1e-6 * C * 1e-12));
      setFrequency(f.toFixed(4));
    } else {
      setFrequency(null);
    }
  };

  return (
    <div>
      <h2>LC Resonant Frequency Calculator</h2>
      <input
        type="number"
        placeholder="Inductance (µH)"
        value={inductance}
        onChange={e => setInductance(e.target.value)}
      />
      <input
        type="number"
        placeholder="Capacitance (pF)"
        value={capacitance}
        onChange={e => setCapacitance(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      {frequency !== null && (
        <div style={{ marginTop: 16 }}>
          Resonant Frequency: <b>{frequency} MHz</b>
        </div>
      )}
    </div>
  );
}

export default LCResonantFrequencyCalculator;
