import React, { useState } from "react";
import { Input } from "reactstrap";

export default function RangeColor() {
  const [rangeValue, setRangeValue] = useState(50);
  const [colorValue, setColorValue] = useState("");

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorValue(e.target.value);
  };

  const getColorName = (colorValue) => {
    // Implement logic to get color name based on colorValue
    // For simplicity, returning colorValue itself
    return colorValue;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Inputs</h1>
      <div>
        <label htmlFor="rangeInput">Range:</label>
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="0"
          max="100"
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <p>Value: {rangeValue}</p>
      </div>
      <hr />
      <div className="w-25">
        <label htmlFor="colorInput"> Color :- </label>
        <input className="m-2"
          type="color"
          id="colorInput"
          name="colorInput"
          value={colorValue}
          onChange={handleColorChange}
        />
      </div>
      <hr />
      {colorValue && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: colorValue,
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color : "white" }} > {getColorName(colorValue)} </p>
          </div>
        </div>
      )}
    </div>
  );
}
