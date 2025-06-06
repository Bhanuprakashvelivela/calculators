import React, { useState } from "react";
function DbmToWattsConversion() {
  const [dbm, setDbm] = useState("");
  const [watts, setWatts] = useState(null);

  const handleCalculate = () => {
    const dBmValue = parseFloat(dbm);
    if (!isNaN(dBmValue)) {
      // Watts = 10^((dBm - 30)/10)
      const w = Math.pow(10, (dBmValue - 30) / 10);
      setWatts(w.toExponential(6));
    } else {
      setWatts(null);
    }
  };

  return (
    <div>
      <h2>dBm to Watts Conversion</h2>
      <input type="number" placeholder="dBm" value={dbm} onChange={e => setDbm(e.target.value)} />
      <button onClick={handleCalculate}>Convert</button>
      {watts !== null && (
        <div style={{ marginTop: 16 }}>
          Power: <b>{watts} W</b>
        </div>
      )}
    </div>
  );
}
export default DbmToWattsConversion;
