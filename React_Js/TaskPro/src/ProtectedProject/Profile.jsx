import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated login function
  const loginHandler = () => {
    // Simulated login logic
    setIsLoggedIn(true);
  };

  // Simulated logout function
  const logoutHandler = () => {
    // Clear authentication state and navigate to login page
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="pt-3">
      <h1>Hello, {isLoggedIn ? "User" : "Guest"}</h1>
      {isLoggedIn ? (
        <Button color="danger" onClick={logoutHandler}>
          Logout
        </Button>
      ) : (
        <Button color="primary" onClick={loginHandler}>
          Login
        </Button>
      )}
    </div>
  );
}
