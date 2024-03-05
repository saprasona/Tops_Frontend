import React, { useState } from "react";
import { Input } from "reactstrap";

export default function RangeColor() {
  const [rangeValue, setRangeValue] = useState(50);
  const [colorValue, setColorValue] = useState("");

  const colorOptions = [
    { name: "Violet", value: "#8A2BE2" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Red", value: "#FF0000" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Orange", value: "#FFA500" },
    { name: "Blue", value: "#0000FF" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Gray", value: "#808080" },
  ];

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorValue(e.target.value);
  };

  const getColorName = (colorValue) => {
    const colorOption = colorOptions.find((option) => option.value === colorValue);
    if (colorOption) {
      return colorOption.name;
    } else {
      return "";
    }
  };
  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
      <div  className="w-25 ">
        <label htmlFor="colorInput">Color :- </label>
        <select
          id="colorInput"
          name="colorInput"
          value={colorValue}
          onChange={handleColorChange}
        >
          <option value="">Select a color</option>
          {colorOptions.map((colorOption) => (
            <option key={colorOption.value} value={colorOption.value}>
              {colorOption.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {colorValue && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: colorValue,
            marginLeft: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ color: "white" }}>{getColorName(colorValue)}</span>
        </div>
      )}
    </div>
  );
}
