import React from "react";
import Card from "./Card";

export default function FunProps(user) {
  console.log("-----------  user----------->", user);
  
  return (
    <div>
      FunProps
      <Card name={"Sona"} age={35} />
      <Card name={"Jency"} age={9} />
      {/* <Card name={"Vipul"} /> */}
      {/* <Card name={user?.name} /> */}
    </div>
  );
}
