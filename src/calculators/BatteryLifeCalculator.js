import React, { useState } from "react";
function BatteryLifeCalculator() {
  const [capacity, setCapacity] = useState("");
  const [load, setLoad] = useState("");
  const [life, setLife] = useState(null);

  const handleCalculate = () => {
    const cap = parseFloat(capacity);
    const l = parseFloat(load);
    if (cap > 0 && l > 0) setLife((cap / l).toFixed(2));
    else setLife(null);
  };

  return (
    <div>
      <h2>Battery Life Calculator</h2>
      <input type="number" placeholder="Battery Capacity (mAh)" value={capacity} onChange={e => setCapacity(e.target.value)} />
      <input type="number" placeholder="Device Load (mA)" value={load} onChange={e => setLoad(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {life && <div style={{ marginTop: 16 }}>Estimated Battery Life: <b>{life} hours</b></div>}
    </div>
  );
}
export default BatteryLifeCalculator;
