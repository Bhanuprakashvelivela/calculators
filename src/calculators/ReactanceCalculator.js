import React, { useState } from "react";
function ReactanceCalculator() {
  const [type, setType] = useState("capacitive");
  const [value, setValue] = useState("");
  const [freq, setFreq] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const f = parseFloat(freq);
    const v = parseFloat(value);
    if (f > 0 && v > 0) {
      if (type === "capacitive") setResult((1 / (2 * Math.PI * f * v)).toFixed(3));
      else setResult((2 * Math.PI * f * v).toFixed(3));
    } else setResult(null);
  };

  return (
    <div>
      <h2>Reactance Calculator</h2>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="capacitive">Capacitive (Xc)</option>
        <option value="inductive">Inductive (Xl)</option>
      </select>
      <input type="number" placeholder={type === "capacitive" ? "Capacitance (F)" : "Inductance (H)"} value={value} onChange={e => setValue(e.target.value)} />
      <input type="number" placeholder="Frequency (Hz)" value={freq} onChange={e => setFreq(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {result && (
        <div style={{ marginTop: 16 }}>
          {type === "capacitive" ? "Xc" : "Xl"}: <b>{result} Ω</b>
        </div>
      )}
    </div>
  );
}
export default ReactanceCalculator;
