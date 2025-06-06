import React, { useState } from "react";
function InductanceConversion() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("μH");
  const [results, setResults] = useState(null);

  const units = [
    { label: "μH", factor: 1 },
    { label: "mH", factor: 1e3 },
    { label: "H", factor: 1e6 },
  ];

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) return setResults(null);
    const uh = parseFloat(value) * units.find(u => u.label === unit).factor;
    setResults({
      "μH": uh,
      "mH": uh / 1e3,
      "H": uh / 1e6,
    });
  };

  return (
    <div>
      <h2>Inductance Conversion</h2>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Value" />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        {units.map(u => (
          <option key={u.label} value={u.label}>{u.label}</option>
        ))}
      </select>
      <button onClick={handleConvert}>Convert</button>
      {results && (
        <div style={{ marginTop: 16 }}>
          <div>{results["μH"]} μH</div>
          <div>{results["mH"]} mH</div>
          <div>{results["H"]} H</div>
        </div>
      )}
    </div>
  );
}
export default InductanceConversion;
