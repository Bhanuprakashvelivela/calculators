import React, { useState } from "react";
function TraceImpedanceCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [er, setEr] = useState("4.5");
  const [impedance, setImpedance] = useState(null);

  // Microstrip Z0 (W/h < 1): Z0 = 60/√er * ln(8h/w + 0.25w/h)
  const handleCalculate = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    const erNum = parseFloat(er);
    if (w > 0 && h > 0 && erNum > 0) {
      let z0 = 60 / Math.sqrt(erNum) * Math.log(8 * h / w + 0.25 * w / h);
      setImpedance(z0.toFixed(2));
    } else setImpedance(null);
  };

  return (
    <div>
      <h2>Microstrip Trace Impedance Calculator</h2>
      <input type="number" placeholder="Trace Width (mm)" value={width} onChange={e => setWidth(e.target.value)} />
      <input type="number" placeholder="Height above plane (mm)" value={height} onChange={e => setHeight(e.target.value)} />
      <input type="number" placeholder="Dielectric Constant (Er)" value={er} onChange={e => setEr(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {impedance && <div style={{ marginTop: 16 }}>Impedance: <b>{impedance} Ω</b></div>}
    </div>
  );
}
export default TraceImpedanceCalculator;
