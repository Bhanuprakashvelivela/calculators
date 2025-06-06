import React, { useState } from "react";
function ParallelSeriesResistorCalculator() {
  const [values, setValues] = useState("");
  const [series, setSeries] = useState(null);
  const [parallel, setParallel] = useState(null);

  const handleCalculate = () => {
    const nums = values.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x) && x > 0);
    if (nums.length < 2) { setSeries(null); setParallel(null); return; }
    setSeries(nums.reduce((a, b) => a + b, 0));
    setParallel(1 / nums.reduce((a, b) => a + (1 / b), 0));
  };

  return (
    <div>
      <h2>Parallel and Series Resistor Calculator</h2>
      <p>Enter resistor values separated by commas (e.g., 100,220,330)</p>
      <input type="text" value={values} onChange={e => setValues(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {series !== null && (
        <div>
          <div>Series Total: <b>{series.toFixed(2)} Ω</b></div>
          <div>Parallel Total: <b>{parallel.toFixed(2)} Ω</b></div>
        </div>
      )}
    </div>
  );
}
export default ParallelSeriesResistorCalculator;
