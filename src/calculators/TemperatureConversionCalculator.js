import React, { useState } from "react";
function TemperatureConversionCalculator() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState({});

  const handleConvert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return setResult({});
    if (unit === "C")
      setResult({ F: (val * 9 / 5 + 32).toFixed(2), K: (val + 273.15).toFixed(2) });
    else if (unit === "F")
      setResult({ C: ((val - 32) * 5 / 9).toFixed(2), K: ((val - 32) * 5 / 9 + 273.15).toFixed(2) });
    else if (unit === "K")
      setResult({ C: (val - 273.15).toFixed(2), F: ((val - 273.15) * 9 / 5 + 32).toFixed(2) });
  };

  return (
    <div>
      <h2>Temperature Conversion</h2>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Value" />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        <option value="C">°C</option>
        <option value="F">°F</option>
        <option value="K">K</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <div style={{ marginTop: 16 }}>
        {unit === "C" && result.F && <>
          <div>{value} °C = {result.F} °F</div>
          <div>{value} °C = {result.K} K</div>
        </>}
        {unit === "F" && result.C && <>
          <div>{value} °F = {result.C} °C</div>
          <div>{value} °F = {result.K} K</div>
        </>}
        {unit === "K" && result.C && <>
          <div>{value} K = {result.C} °C</div>
          <div>{value} K = {result.F} °F</div>
        </>}
      </div>
    </div>
  );
}
export default TemperatureConversionCalculator;
