// LoginForm.js
import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password); // Call login function from AuthContext
  };

  const panelStyle = {
    backgroundColor: theme,
    color: theme === "black" ? "#4b8bd4" : "#333",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "400px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const labelStyle = {
    marginBottom: "5px",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#6472d9",
    color: "#fff",
    width: "100%",
    padding: "10px 20px",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
    marginTop: "5px", // Adjusted margin top for the login button
    marginBottom: "5px",
  };

  const createAccountButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#328466", // Light green background color for create account button
    marginTop: "10px", // Margin top for the create account button
  };

  return (
    <section style={panelStyle}>
      <h1>Log In</h1>
      <form style={formStyle} onSubmit={handleLogin}>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle} type="submit">
          Log in
        </button>
      </form>
      <hr />
      <button style={createAccountButtonStyle}>Create Account</button>
    </section>
  );
}
