import React, { useState } from "react";
import Select from "react-select";
import { Input } from "reactstrap";

let arr = ["vapi", "Navsari", "Surat", "tapi"];

export default function SelectCom() {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCitySelect = (selectedOptions) => {
    const cities = selectedOptions.map(option => option.value);
    setSelectedCities(cities);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>select</h1>
      <Select
        isMulti
        className="w-25"
        options={arr.map(city => ({ value: city, label: city }))}
        value={selectedCities.map(city => ({ value: city, label: city }))}
        onChange={handleCitySelect}
      />
      <hr />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {selectedCities.map((city, i) => (
          <li key={i}>
            {i+1}. {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
