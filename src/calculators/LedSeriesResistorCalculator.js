import React, { useState } from "react";
function LedSeriesResistorCalculator() {
  const [supply, setSupply] = useState("");
  const [vf, setVf] = useState("");
  const [ifwd, setIfwd] = useState("");
  const [res, setRes] = useState(null);

  const handleCalculate = () => {
    const Vs = parseFloat(supply);
    const Vf = parseFloat(vf);
    const Ifwd = parseFloat(ifwd); // In mA
    if (Vs > Vf && Ifwd > 0) {
      // R = (Vs - Vf) / Ifwd (Ifwd in Amps)
      const r = (Vs - Vf) / (Ifwd / 1000);
      setRes(r.toFixed(2));
    } else {
      setRes(null);
    }
  };

  return (
    <div>
      <h2>LED Series Resistor Calculator</h2>
      <input type="number" placeholder="Supply Voltage (V)" value={supply} onChange={e => setSupply(e.target.value)} />
      <input type="number" placeholder="LED Forward Voltage (V)" value={vf} onChange={e => setVf(e.target.value)} />
      <input type="number" placeholder="LED Forward Current (mA)" value={ifwd} onChange={e => setIfwd(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {res && (
        <div style={{ marginTop: 16 }}>
          Required Resistor: <b>{res} Ω</b>
        </div>
      )}
    </div>
  );
}
export default LedSeriesResistorCalculator;
