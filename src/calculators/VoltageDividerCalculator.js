import React, { useState } from "react";
function VoltageDividerCalculator() {
  const [vin, setVin] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [vout, setVout] = useState(null);

  const calculateVout = () => {
    const vinNum = parseFloat(vin);
    const r1Num = parseFloat(r1);
    const r2Num = parseFloat(r2);
    if (vinNum > 0 && r1Num > 0 && r2Num > 0) {
      setVout(((vinNum * r2Num) / (r1Num + r2Num)).toFixed(4));
    } else {
      setVout(null);
    }
  };

  return (
    <div>
      <h2>Voltage Divider Calculator</h2>
      <input type="number" placeholder="Input Voltage (V)" value={vin} onChange={e => setVin(e.target.value)} />
      <input type="number" placeholder="Resistor R1 (Ω)" value={r1} onChange={e => setR1(e.target.value)} />
      <input type="number" placeholder="Resistor R2 (Ω)" value={r2} onChange={e => setR2(e.target.value)} />
      <button onClick={calculateVout}>Calculate</button>
      {vout !== null && <div style={{ marginTop: 16 }}>Output Voltage (Vout): <b>{vout} V</b></div>}
    </div>
  );
}
export default VoltageDividerCalculator;
