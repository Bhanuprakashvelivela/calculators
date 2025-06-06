import React, { useState } from "react";
function CurrentDividerCalculator() {
  const [totalCurrent, setTotalCurrent] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [i1, setI1] = useState(null);
  const [i2, setI2] = useState(null);

  const handleCalculate = () => {
    const I = parseFloat(totalCurrent);
    const R1 = parseFloat(r1);
    const R2 = parseFloat(r2);
    if (I > 0 && R1 > 0 && R2 > 0) {
      const I1 = I * (R2 / (R1 + R2));
      const I2 = I * (R1 / (R1 + R2));
      setI1(I1.toFixed(3));
      setI2(I2.toFixed(3));
    } else {
      setI1(null);
      setI2(null);
    }
  };

  return (
    <div>
      <h2>Current Divider Calculator</h2>
      <input type="number" placeholder="Total Current (A)" value={totalCurrent} onChange={e => setTotalCurrent(e.target.value)} />
      <input type="number" placeholder="Resistor R1 (Ω)" value={r1} onChange={e => setR1(e.target.value)} />
      <input type="number" placeholder="Resistor R2 (Ω)" value={r2} onChange={e => setR2(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {i1 && <div style={{ marginTop: 16 }}>Current through R1: <b>{i1} A</b></div>}
      {i2 && <div>Current through R2: <b>{i2} A</b></div>}
    </div>
  );
}
export default CurrentDividerCalculator;
