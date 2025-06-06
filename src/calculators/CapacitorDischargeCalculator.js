import React, { useState } from "react";
function CapacitorDischargeCalculator() {
  const [v0, setV0] = useState("");     // Initial voltage
  const [r, setR] = useState("");       // Resistance (Ohms)
  const [c, setC] = useState("");       // Capacitance (Farads)
  const [t, setT] = useState("");       // Time (seconds)
  const [vt, setVt] = useState(null);   // Final voltage

  const handleCalculate = () => {
    const V0 = parseFloat(v0);
    const R = parseFloat(r);
    const C = parseFloat(c);
    const T = parseFloat(t);

    if (V0 > 0 && R > 0 && C > 0 && T >= 0) {
      // Vt = V0 * exp(-t/(R*C))
      const res = V0 * Math.exp(-T / (R * C));
      setVt(res.toFixed(4));
    } else {
      setVt(null);
    }
  };

  return (
    <div>
      <h2>Capacitor Discharge Calculator</h2>
      <input type="number" placeholder="Initial Voltage (V0)" value={v0} onChange={e => setV0(e.target.value)} />
      <input type="number" placeholder="Resistance (Ω)" value={r} onChange={e => setR(e.target.value)} />
      <input type="number" placeholder="Capacitance (F)" value={c} onChange={e => setC(e.target.value)} />
      <input type="number" placeholder="Time (s)" value={t} onChange={e => setT(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {vt !== null && (
        <div style={{ marginTop: 16 }}>
          Voltage after {t} seconds: <b>{vt} V</b>
        </div>
      )}
    </div>
  );
}
export default CapacitorDischargeCalculator;
