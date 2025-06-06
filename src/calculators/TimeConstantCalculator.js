import React, { useState } from "react";
function TimeConstantCalculator() {
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [tau, setTau] = useState(null);

  const handleCalculate = () => {
    const r = parseFloat(resistance);
    const c = parseFloat(capacitance);
    if (r > 0 && c > 0) setTau((r * c).toExponential(4));
    else setTau(null);
  };

  return (
    <div>
      <h2>RC Time Constant Calculator</h2>
      <input type="number" placeholder="Resistance (Ω)" value={resistance} onChange={e => setResistance(e.target.value)} />
      <input type="number" placeholder="Capacitance (F)" value={capacitance} onChange={e => setCapacitance(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {tau && <div style={{ marginTop: 16 }}>Time Constant τ: <b>{tau} s</b></div>}
    </div>
  );
}
export default TimeConstantCalculator;
