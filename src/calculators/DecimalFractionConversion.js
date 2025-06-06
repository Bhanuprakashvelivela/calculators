import React, { useState } from "react";
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
function toFraction(decimal) {
  if (!isFinite(decimal)) return null;
  let tolerance = 1.0E-6;
  let h1=1, h2=0, k1=0, k2=1, b = decimal;
  do {
    let a = Math.floor(b);
    let aux = h1; h1 = a*h1 + h2; h2 = aux;
    aux = k1; k1 = a*k1 + k2; k2 = aux;
    b = 1/(b - a);
  } while (Math.abs(decimal - h1/k1) > decimal * tolerance);

  // Reduce
  const factor = gcd(h1, k1);
  return [h1/factor, k1/factor];
}

function DecimalFractionConversion() {
  const [decimal, setDecimal] = useState("");
  const [fraction, setFraction] = useState(null);

  const handleConvert = () => {
    const num = parseFloat(decimal);
    if (!isNaN(num)) {
      const [numer, denom] = toFraction(num);
      setFraction(`${numer}/${denom}`);
    } else {
      setFraction(null);
    }
  };

  return (
    <div>
      <h2>Decimal Fraction Conversion</h2>
      <input type="number" step="any" placeholder="Decimal Number" value={decimal} onChange={e => setDecimal(e.target.value)} />
      <button onClick={handleConvert}>Convert</button>
      {fraction && (
        <div style={{ marginTop: 16 }}>
          Fraction: <b>{fraction}</b>
        </div>
      )}
    </div>
  );
}
export default DecimalFractionConversion;
