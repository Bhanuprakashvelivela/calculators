import React, { useState } from "react";
function SMDCapacitorCodeCalculator() {
  const [code, setCode] = useState("");
  const [value, setValue] = useState(null);

  const handleCalculate = () => {
    // EIA-198: First two digits = value, third = multiplier (in pF)
    const c = code.trim();
    if (/^\d{3}$/.test(c)) {
      const v = parseInt(c.slice(0, 2)) * Math.pow(10, Number(c[2]));
      if (v < 1000) setValue(`${v} pF`);
      else if (v < 1000000) setValue(`${(v / 1000).toFixed(3)} nF`);
      else setValue(`${(v / 1e6).toFixed(6)} μF`);
    } else {
      setValue("Invalid code");
    }
  };

  return (
    <div>
      <h2>SMD Capacitor Code Calculator</h2>
      <input type="text" placeholder="Enter SMD code (e.g. 104)" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {value && <div style={{ marginTop: 16 }}>Capacitance: <b>{value}</b></div>}
    </div>
  );
}
export default SMDCapacitorCodeCalculator;
