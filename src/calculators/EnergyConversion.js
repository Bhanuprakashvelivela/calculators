import React, { useState } from "react";
function EnergyConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("J");
  const [results, setResults] = useState(null);

  const units = [
    { label: "J", toJ: 1 },
    { label: "kJ", toJ: 1000 },
    { label: "Wh", toJ: 3600 },
    { label: "kWh", toJ: 3.6e6 },
    { label: "cal", toJ: 4.184 },
    { label: "kcal", toJ: 4184 },
    { label: "BTU", toJ: 1055.06 }
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const base = parseFloat(value) * units.find(u => u.label === unit).toJ;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toJ).toFixed(5));
    setResults(res);
  };

  return (
    <div>
      <h2>Energy Conversion</h2>
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
export default EnergyConversion;
