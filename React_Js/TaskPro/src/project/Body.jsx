import React, { useState } from "react";
import Cards from "./Cards";
import { populationData } from "./data";

export default function Body() {
  let [data, setData] = useState(populationData);

  return (
    <div className="d-flex justify-content-start align-content-center row body_div">
      {data?.map((e,i) => {
        return (
          <div key={i} className="col-3">
            <Cards details={e} />
          </div>
        );
      })}
    </div>
  );
}