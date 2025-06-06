import React, { useState } from "react";
// Simple IPC-2221 formula for external layers, 1oz/ft^2 copper, temp rise 10°C
function PCBTraceWidthCalculator() {
  const [current, setCurrent] = useState("");
  const [thickness, setThickness] = useState("1.4"); // mils (1 oz = ~1.4 mils)
  const [tempRise, setTempRise] = useState("10");
  const [width, setWidth] = useState(null);

  const handleCalculate = () => {
    // I = k * dT^0.44 * A^0.725
    // A = (I/(k*dT^0.44))^(1/0.725)
    // Width = A/thickness
    const I = parseFloat(current);
    const dT = parseFloat(tempRise);
    const T = parseFloat(thickness); // mils
    const k = 0.048; // for external layers, per IPC-2221

    if (I > 0 && dT > 0 && T > 0) {
      const area = Math.pow(I / (k * Math.pow(dT, 0.44)), 1 / 0.725);
      const w = area / T;
      setWidth(w.toFixed(3));
    } else setWidth(null);
  };

  return (
    <div>
      <h2>PCB Trace Width Calculator</h2>
      <input type="number" placeholder="Current (A)" value={current} onChange={e => setCurrent(e.target.value)} />
      <input type="number" placeholder="Copper Thickness (mils)" value={thickness} onChange={e => setThickness(e.target.value)} />
      <input type="number" placeholder="Temp Rise (°C)" value={tempRise} onChange={e => setTempRise(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {width && <div style={{ marginTop: 16 }}>Required Width: <b>{width} mils</b></div>}
    </div>
  );
}
export default PCBTraceWidthCalculator;
