import React, { useState } from "react";
function LengthConversionCalculator() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("m");
  const [result, setResult] = useState({});

  const units = [
    { label: "km", toM: 1000 },
    { label: "m", toM: 1 },
    { label: "cm", toM: 0.01 },
    { label: "mm", toM: 0.001 },
    { label: "mi", toM: 1609.34 },
    { label: "yd", toM: 0.9144 },
    { label: "ft", toM: 0.3048 },
    { label: "in", toM: 0.0254 }
  ];

  const handleConvert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return setResult({});
    const base = val * units.find(u => u.label === unit).toM;
    const res = {};
    units.forEach(u => res[u.label] = (base / u.toM).toFixed(5));
    setResult(res);
  };

  return (
    <div>
      <h2>Length Conversion</h2>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Value" />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
      </select>
      <button onClick={handleConvert}>Convert</button>
      {result.m && (
        <div style={{ marginTop: 16 }}>
          {Object.entries(result).map(([k, v]) => (
            <div key={k}>{v} {k}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default LengthConversionCalculator;
