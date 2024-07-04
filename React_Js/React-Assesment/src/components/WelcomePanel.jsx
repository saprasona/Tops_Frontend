// WelcomePanel.js
import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";

export default function WelcomePanel({ email }) {
  const { logout } = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const panelStyle = {
    backgroundColor: theme,
    color: theme === "black" ? "#fff" : "#333",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "400px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#6472d9", // Primary color
    color: "#fff",
    width: "100%",
    padding: "10px 20px",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
    marginTop: "5px", // Adjusted margin top for the logout button
    marginBottom: "5px",
  };

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
  };

  return (
    <section style={panelStyle}>
      <h1>Welcome, {email}!</h1>
      <button style={buttonStyle} onClick={handleLogout}>
        Log out
      </button>
    </section>
  );
}
