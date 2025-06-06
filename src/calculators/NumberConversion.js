import React, { useState } from "react";
function NumberConversion() {
  const [value, setValue] = useState("");
  const [base, setBase] = useState("10");
  const [result, setResult] = useState({});

  const handleConvert = () => {
    let num = parseInt(value, Number(base));
    if (isNaN(num)) return setResult({});
    setResult({
      decimal: num.toString(10),
      binary: num.toString(2),
      octal: num.toString(8),
      hex: num.toString(16).toUpperCase()
    });
  };

  return (
    <div>
      <h2>Number Conversion</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Value" />
      <select value={base} onChange={e => setBase(e.target.value)}>
        <option value="2">Binary</option>
        <option value="8">Octal</option>
        <option value="10">Decimal</option>
        <option value="16">Hex</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <div style={{ marginTop: 16 }}>
        {result.decimal && <div>Decimal: {result.decimal}</div>}
        {result.binary && <div>Binary: {result.binary}</div>}
        {result.octal && <div>Octal: {result.octal}</div>}
        {result.hex && <div>Hex: {result.hex}</div>}
      </div>
    </div>
  );
}
export default NumberConversion;
