import React, { useState } from "react";
function PressureConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("Pa");
  const [results, setResults] = useState(null);

  const units = [
    { label: "Pa", toPa: 1 },
    { label: "kPa", toPa: 1000 },
    { label: "bar", toPa: 1e5 },
    { label: "atm", toPa: 101325 },
    { label: "psi", toPa: 6894.76 },
    { label: "mmHg", toPa: 133.322 }
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const base = parseFloat(value) * units.find(u => u.label === unit).toPa;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toPa).toFixed(5));
    setResults(res);
  };

  return (
    <div>
      <h2>Pressure Conversion</h2>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Value" />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
      </select>
      <button onClick={handleConvert}>Convert</button>
      {results && (
        <div style={{ marginTop: 16 }}>
          {Object.entries(results).map(([k, v]) => (
            <div key={k}>{v} {k}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PressureConversion;
