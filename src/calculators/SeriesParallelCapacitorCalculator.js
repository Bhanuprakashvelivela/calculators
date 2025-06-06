import React, { useState } from "react";
function SeriesParallelCapacitorCalculator() {
  const [values, setValues] = useState("");
  const [series, setSeries] = useState(null);
  const [parallel, setParallel] = useState(null);

  const handleCalculate = () => {
    const nums = values.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x) && x > 0);
    if (nums.length < 2) { setSeries(null); setParallel(null); return; }
    setParallel(nums.reduce((a, b) => a + b, 0));
    setSeries(1 / nums.reduce((a, b) => a + (1 / b), 0));
  };

  return (
    <div>
      <h2>Series/Parallel Capacitor Calculator</h2>
      <p>Enter capacitor values separated by commas (e.g., 1e-6,2e-6,3e-6)</p>
      <input type="text" value={values} onChange={e => setValues(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {parallel !== null && (
        <div>
          <div>Parallel Total: <b>{parallel.toExponential(4)} F</b></div>
          <div>Series Total: <b>{series.toExponential(4)} F</b></div>
        </div>
      )}
    </div>
  );
}
export default SeriesParallelCapacitorCalculator;
