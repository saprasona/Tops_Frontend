import React, { createContext, useContext, useState, useEffect } from "react";

// Context for theme
const ThemeContext = createContext("light");

// Context for authentication
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

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

function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        width: "100%",
        padding: "20px",
      }}
    >
      {user ? <WelcomePanel email={user.email} /> : <LoginForm />}
    </div>
  );
}

function WelcomePanel({ email }) {
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

function LoginForm() {
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

function Button({ children, onClick, color }) {
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
