import React, { useState } from "react";
import Select from "react-select";
import { Input } from "reactstrap";


const cities = ["Surat", "Navsari", "Vapi", "Tapi", "Anand"];
const options = cities.map(city => ({ value: city.toUpperCase(), label: city }));

export default function SelectCom1() {
  let [city, setCity] = useState("surat");
  let [cityMulti, setCityMulti] = useState([]);

  const multiHandler = (cityArr) => {
    let arr = cityArr.map((e) => e.value);
    setCityMulti(arr);
  };

  return (
    <div>
      <h1>select</h1>
      <h1>My city name is {city}</h1>
      <Select
        className="w-25"
        options={options}
        value={{ value: city.toLowerCase(), label: city }} 
        onChange={(e) => setCity(e.value)}
      />
      <hr />
      {cityMulti.map((e, i) => {
        return (
          <li key={i}>
            {i + 1}. {e}
          </li>
        );
      })}
      <Select
        isMulti
        className="w-25"
        options={options}
        value={options.filter(option => cityMulti.includes(option.value))}
        onChange={(e) => multiHandler(e)}
      />
      <Input type="color" />
    </div>
  );
}
