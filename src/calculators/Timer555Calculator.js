import React, { useState } from "react";
function Timer555Calculator() {
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [c, setC] = useState("");
  const [freq, setFreq] = useState(null);
  const [duty, setDuty] = useState(null);

  const handleCalculate = () => {
    const R1 = parseFloat(r1);
    const R2 = parseFloat(r2);
    const C = parseFloat(c); // in Farads
    if (R1 > 0 && R2 > 0 && C > 0) {
      const f = 1.44 / ((R1 + 2 * R2) * C);
      const d = ((R1 + R2) / (R1 + 2 * R2)) * 100;
      setFreq(f.toFixed(2));
      setDuty(d.toFixed(2));
    } else {
      setFreq(null);
      setDuty(null);
    }
  };

  return (
    <div>
      <h2>555 Timer Astable Calculator</h2>
      <input type="number" placeholder="R1 (Ω)" value={r1} onChange={e => setR1(e.target.value)} />
      <input type="number" placeholder="R2 (Ω)" value={r2} onChange={e => setR2(e.target.value)} />
      <input type="number" placeholder="C (F)" value={c} onChange={e => setC(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {freq && (
        <div style={{ marginTop: 16 }}>
          <div>Frequency: <b>{freq} Hz</b></div>
          <div>Duty Cycle: <b>{duty}%</b></div>
        </div>
      )}
    </div>
  );
}
export default Timer555Calculator;
