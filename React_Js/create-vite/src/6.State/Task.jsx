import React, { useState } from "react";
import { Button } from "reactstrap";

export default function GenderComponent() {
  const [gender, setGender] = useState("boy");

  return (
    <div className="main_div" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",margin:"30px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: gender === "boy" ? "blue" : "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {gender === "boy" ? "Boy" : "Girl"}
      </div>
      <Button
        color={gender === "boy" ? "info" : "danger"}
        onClick={() => setGender(gender === "boy" ? "girl" : "boy")}
        className="mt-5"
      >
        {gender === "boy" ? "Girl" : "Boy"}
      </Button>
    </div>
  );
}
