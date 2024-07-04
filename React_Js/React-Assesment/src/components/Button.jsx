// Button.js
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Button({ children, onClick, color }) {
  const theme = useContext(ThemeContext);
  let buttonStyle = {
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  };

  if (color === "dark-danger") {
    buttonStyle.backgroundColor = "#c31919";
  } else {
    buttonStyle.backgroundColor = theme === "black" ? "#6472d9" : "#328466";
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
