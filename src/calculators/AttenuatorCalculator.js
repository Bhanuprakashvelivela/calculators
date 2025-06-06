import React, { useState } from "react";
function AttenuatorCalculator() {
  const [db, setDb] = useState("");
  const [ratio, setRatio] = useState("");
  const [calc, setCalc] = useState({});

  const calcRatio = () => {
    if (db === "" || isNaN(Number(db))) return setCalc({});
    setCalc({ ratio: Math.pow(10, parseFloat(db) / 20).toFixed(5), db: null });
  };
  const calcDb = () => {
    if (ratio === "" || isNaN(Number(ratio)) || Number(ratio) <= 0) return setCalc({});
    setCalc({ db: (20 * Math.log10(parseFloat(ratio))).toFixed(4), ratio: null });
  };

  return (
    <div>
      <h2>Attenuator Calculator</h2>
      <div>
        <input type="number" placeholder="Attenuation (dB)" value={db} onChange={e => setDb(e.target.value)} />
        <button onClick={calcRatio}>to Ratio</button>
      </div>
      {calc.ratio && <div>Ratio: {calc.ratio} : 1</div>}
      <div style={{ marginTop: 12 }}>
        <input type="number" placeholder="Ratio" value={ratio} onChange={e => setRatio(e.target.value)} />
        <button onClick={calcDb}>to dB</button>
      </div>
      {calc.db && <div>dB: {calc.db} dB</div>}
    </div>
  );
}
export default AttenuatorCalculator;
