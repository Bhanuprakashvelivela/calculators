import React, { useState } from "react";
function VolumeConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("L");
  const [results, setResults] = useState(null);

  const units = [
    { label: "L", toL: 1 },
    { label: "mL", toL: 0.001 },
    { label: "m³", toL: 1000 },
    { label: "gal", toL: 3.78541 },
    { label: "qt", toL: 0.946353 },
    { label: "pt", toL: 0.473176 },
    { label: "cup", toL: 0.236588 }
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const base = parseFloat(value) * units.find(u => u.label === unit).toL;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toL).toFixed(5));
    setResults(res);
  };

  return (
    <div>
      <h2>Volume Conversion</h2>
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
export default VolumeConversion;
