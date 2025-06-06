import React, { useState } from "react";
function WeightConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("kg");
  const [results, setResults] = useState(null);

  const units = [
    { label: "kg", toKg: 1 },
    { label: "g", toKg: 0.001 },
    { label: "mg", toKg: 0.000001 },
    { label: "lb", toKg: 0.453592 },
    { label: "oz", toKg: 0.0283495 }
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const base = parseFloat(value) * units.find(u => u.label === unit).toKg;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toKg).toFixed(5));
    setResults(res);
  };

  return (
    <div>
      <h2>Weight Conversion</h2>
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
export default WeightConversion;
