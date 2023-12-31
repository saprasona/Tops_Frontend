import React, { Component } from "react";
import ClassCard from "./ClassCard";

export default class ClassProps extends Component {



  render() {
    return (
      <div>
        ClassProps
        <ClassCard name={"Sona"} age={35} />
        <hr />
        <ClassCard name={"Veer"} age={8} />
        <hr />
      </div>
    );
  }
}
