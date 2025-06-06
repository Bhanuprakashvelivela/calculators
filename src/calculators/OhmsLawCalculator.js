import React, { useState } from "react";
function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult({});

    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);

    const filled = [voltage, current, resistance].filter(v => v !== "").length;

    if (filled !== 2) {
      setError("Enter exactly two values.");
      return;
    }
    if (!isNaN(v) && !isNaN(i)) setResult({ resistance: (v / i).toFixed(4) });
    else if (!isNaN(v) && !isNaN(r)) setResult({ current: (v / r).toFixed(4) });
    else if (!isNaN(i) && !isNaN(r)) setResult({ voltage: (i * r).toFixed(4) });
  };

  const handleClear = () => {
    setVoltage("");
    setCurrent("");
    setResistance("");
    setResult({});
    setError("");
  };

  return (
    <div>
      <h2>Ohm's Law Calculator</h2>
      <input type="number" placeholder="Voltage (V)" value={voltage} onChange={e => setVoltage(e.target.value)} />
      <input type="number" placeholder="Current (A)" value={current} onChange={e => setCurrent(e.target.value)} />
      <input type="number" placeholder="Resistance (Ω)" value={resistance} onChange={e => setResistance(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleClear} style={{ marginLeft: 8 }}>Clear</button>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
      {result.voltage && <div>Voltage (V): <b>{result.voltage}</b></div>}
      {result.current && <div>Current (A): <b>{result.current}</b></div>}
      {result.resistance && <div>Resistance (Ω): <b>{result.resistance}</b></div>}
    </div>
  );
}
export default OhmsLawCalculator;
