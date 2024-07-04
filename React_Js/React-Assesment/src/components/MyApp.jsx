// MyApp.js
import React, { useState, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";
import AppContent from "./AppContent";
import Button from "./Button";

export default function MyApp() {
  const [theme, setTheme] = useState("white"); // Default theme is white (logged out)
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color = theme === "black" ? "#fff" : "#333";
  }, [theme]);

  const login = (email, password) => {
    // Simulated login logic, replace with actual API call
    // Example: axios.post('http://localhost:9999/user/signin', { email, password })
    // .then(response => setUser(response.data.user))
    setUser({ email }); // Simulated login: set user state
    setTheme("black"); // Set theme to black when logged in
  };

  const logout = () => {
    // Simulated logout logic
    setUser(null); // Clear user state
    setTheme("white"); // Set theme to white when logged out
  };

  const toggleTheme = () => {
    setTheme(theme === "black" ? "white" : "black");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={{ user, login, logout }}>
        <div
          style={{
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppContent />
          <Button onClick={toggleTheme} color="dark-danger">
            Toggle theme
          </Button>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
