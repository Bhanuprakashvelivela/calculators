import React, { useState } from "react";
function SMDResistorCodeCalculator() {
  const [code, setCode] = useState("");
  const [value, setValue] = useState(null);

  const handleCalculate = () => {
    const c = code.trim();
    if (/^\d{3}$/.test(c)) {
      // Standard 3-digit: first two = value, third = multiplier (10^digit)
      const v = parseInt(c.slice(0, 2)) * Math.pow(10, Number(c[2]));
      setValue(v + " Ω");
    } else if (/^\d{4}$/.test(c)) {
      // 4-digit: first three = value, fourth = multiplier
      const v = parseInt(c.slice(0, 3)) * Math.pow(10, Number(c[3]));
      setValue(v + " Ω");
    } else if (/^[0-9]+[Rr][0-9]+$/.test(c)) {
      setValue(c.replace(/[Rr]/, ".") + " Ω");
    } else {
      setValue("Invalid code");
    }
  };

  return (
    <div>
      <h2>SMD Resistor Code Calculator</h2>
      <input type="text" placeholder="Enter SMD code (e.g. 103, 4702, 2R2)" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {value && <div style={{ marginTop: 16 }}>Resistance: <b>{value}</b></div>}
    </div>
  );
}
export default SMDResistorCodeCalculator;
