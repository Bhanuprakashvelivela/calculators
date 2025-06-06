import React, { useState } from "react";
function ThreePhaseCalculator() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [powerFactor, setPowerFactor] = useState("1");
  const [power, setPower] = useState(null);

  const handleCalculate = () => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const pf = parseFloat(powerFactor);
    if (v > 0 && i > 0 && pf > 0) {
      setPower((Math.sqrt(3) * v * i * pf).toFixed(2));
    } else setPower(null);
  };

  return (
    <div>
      <h2>Three Phase Power Calculator</h2>
      <input type="number" placeholder="Line-to-Line Voltage (V)" value={voltage} onChange={e => setVoltage(e.target.value)} />
      <input type="number" placeholder="Line Current (A)" value={current} onChange={e => setCurrent(e.target.value)} />
      <input type="number" placeholder="Power Factor" value={powerFactor} onChange={e => setPowerFactor(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {power && <div style={{ marginTop: 16 }}>Total Power: <b>{power} W</b></div>}
    </div>
  );
}
export default ThreePhaseCalculator;
