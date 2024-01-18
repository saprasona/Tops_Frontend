import React, { useState } from "react";

const LoginRegistrationPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [loggedInData, setLoggedInData] = useState(null);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    setLoggedInData({ username: loginUsername, password: loginPassword });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    console.log("Register Submit:", registerUsername, registerPassword);
  };

  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("login");
            setLoggedInData(null); // Clear previous login data when switching tabs
          }}
        >
          Login
        </div>
        <div
          className={`tab ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label htmlFor="login-username">Username</label>
              <input
                type="text"
                id="login-username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <button type="submit">Login</button>
            </div>
          </form>
        )}
        {activeTab === "register" && (
          <form onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                id="register-username"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <button type="submit">Register</button>
            </div>
          </form>
        )}
      </div>
      {loggedInData && (
        <div className="login-data">
          <h2>Login Data</h2>
          <p>Username: {loggedInData.username}</p>
          <p>Password: {loggedInData.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginRegistrationPage;
