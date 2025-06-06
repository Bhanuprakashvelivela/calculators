import React from "react";
function ElectricalPlugReference() {
  return (
    <div>
      <h2>Electrical Plug Reference</h2>
      <ul>
        <li><b>Type A:</b> North America, Japan (2 flat pins)</li>
        <li><b>Type B:</b> North America, Japan (2 flat pins + ground)</li>
        <li><b>Type C:</b> Europe, Asia, S. America (2 round pins)</li>
        <li><b>Type G:</b> UK, Ireland, etc. (3 rectangular pins)</li>
        <li><b>Type I:</b> Australia, New Zealand, China (3 flat pins)</li>
      </ul>
      <p>
        See <a href="https://www.digikey.com/en/resources/conversion-calculators/electrical-plug-types" target="_blank" rel="noopener noreferrer">Digi-Key Plug Types</a> for more.
      </p>
    </div>
  );
}
export default ElectricalPlugReference;
