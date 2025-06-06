import React, { useState } from "react";
const colorMap = [
  { color: "black", value: 0, multiplier: 1, hex: "#000" },
  { color: "brown", value: 1, multiplier: 10, hex: "#964B00" },
  { color: "red", value: 2, multiplier: 100, hex: "#FF0000" },
  { color: "orange", value: 3, multiplier: 1000, hex: "#FFA500" },
  { color: "yellow", value: 4, multiplier: 10000, hex: "#FFFF00" },
  { color: "green", value: 5, multiplier: 100000, hex: "#00FF00" },
  { color: "blue", value: 6, multiplier: 1000000, hex: "#0000FF" },
  { color: "violet", value: 7, multiplier: 10000000, hex: "#8F00FF" },
  { color: "grey", value: 8, multiplier: 100000000, hex: "#808080" },
  { color: "white", value: 9, multiplier: 1000000000, hex: "#FFFFFF" }
];
const toleranceMap = [
  { color: "gold", tolerance: 5, hex: "#FFD700" },
  { color: "silver", tolerance: 10, hex: "#C0C0C0" },
  { color: "brown", tolerance: 1, hex: "#964B00" },
  { color: "red", tolerance: 2, hex: "#FF0000" },
  { color: "green", tolerance: 0.5, hex: "#00FF00" },
  { color: "blue", tolerance: 0.25, hex: "#0000FF" },
  { color: "violet", tolerance: 0.1, hex: "#8F00FF" },
  { color: "grey", tolerance: 0.05, hex: "#808080" }
];
function ResistorColorCodeCalculator() {
  const [band1, setBand1] = useState(1);
  const [band2, setBand2] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [tolerance, setTolerance] = useState("gold");
  const getResistance = () => {
    const val1 = colorMap[band1].value;
    const val2 = colorMap[band2].value;
    const mult = colorMap[multiplier].multiplier;
    const tol = toleranceMap.find(t => t.color === tolerance).tolerance;
    return {
      resistance: ((val1 * 10 + val2) * mult).toLocaleString(),
      tolerance: tol
    };
  };
  const { resistance, tolerance: tolVal } = getResistance();
  return (
    <div>
      <h2>4-Band Resistor Color Code Calculator</h2>
      <label>
        Band 1:
        <select value={band1} onChange={e => setBand1(Number(e.target.value))}>
          {colorMap.slice(1).map((c, i) =>
            <option key={c.color} value={i + 1}>{c.color}</option>
          )}
        </select>
      </label>
      <label>
        Band 2:
        <select value={band2} onChange={e => setBand2(Number(e.target.value))}>
          {colorMap.map((c, i) =>
            <option key={c.color} value={i}>{c.color}</option>
          )}
        </select>
      </label>
      <label>
        Multiplier:
        <select value={multiplier} onChange={e => setMultiplier(Number(e.target.value))}>
          {colorMap.map((c, i) =>
            <option key={c.color} value={i}>{c.color}</option>
          )}
        </select>
      </label>
      <label>
        Tolerance:
        <select value={tolerance} onChange={e => setTolerance(e.target.value)}>
          {toleranceMap.map(t =>
            <option key={t.color} value={t.color}>{t.color}</option>
          )}
        </select>
      </label>
      <div style={{ marginTop: 16 }}>
        <b>Resistance: {resistance} Ω ± {tolVal}%</b>
      </div>
    </div>
  );
}
export default ResistorColorCodeCalculator;
