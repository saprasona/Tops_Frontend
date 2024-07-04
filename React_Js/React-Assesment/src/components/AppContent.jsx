// AppContent.js
import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import WelcomePanel from "./WelcomePanel";
import LoginForm from "./LoginForm";

export default function AppContent() {
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
