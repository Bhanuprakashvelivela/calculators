import React, { useState } from "react";
const awgTable = [
  { awg: 10, mm2: 5.26 },
  { awg: 12, mm2: 3.31 },
  { awg: 14, mm2: 2.08 },
  { awg: 16, mm2: 1.31 },
  { awg: 18, mm2: 0.823 },
  { awg: 20, mm2: 0.518 },
  { awg: 22, mm2: 0.326 },
  { awg: 24, mm2: 0.205 }
];
function WireSizeConversion() {
  const [awg, setAwg] = useState("");
  const [mm2, setMm2] = useState(null);

  const handleConvert = () => {
    const val = parseInt(awg, 10);
    const found = awgTable.find(a => a.awg === val);
    setMm2(found ? found.mm2 : null);
  };

  return (
    <div>
      <h2>Wire Size Conversion</h2>
      <input type="number" placeholder="AWG Size (10-24)" value={awg} onChange={e => setAwg(e.target.value)} />
      <button onClick={handleConvert}>Convert</button>
      {mm2 !== null && <div style={{ marginTop: 16 }}>Equivalent: <b>{mm2} mm²</b></div>}
      {mm2 === null && awg && <div style={{ color: "red" }}>Not in table</div>}
    </div>
  );
}
export default WireSizeConversion;
