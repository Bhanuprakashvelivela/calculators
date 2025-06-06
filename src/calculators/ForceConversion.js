import React, { useState } from "react";
function ForceConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("N");
  const [results, setResults] = useState(null);

  const units = [
    { label: "N", toN: 1 },
    { label: "kgf", toN: 9.80665 },
    { label: "lbf", toN: 4.44822 },
    { label: "dyn", toN: 0.00001 }
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const base = parseFloat(value) * units.find(u => u.label === unit).toN;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toN).toFixed(5));
    setResults(res);
  };

  return (
    <div>
      <h2>Force Conversion</h2>
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
export default ForceConversion;
