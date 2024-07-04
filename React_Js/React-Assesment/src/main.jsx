import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import App from "./App";
// import App1 from "./App1"
import MyApp from "./components/MyApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);