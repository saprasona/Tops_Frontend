import React from "react";
import "./index.css";
import { Input } from "reactstrap";
import { Search } from "lucide-react";
export default function Header() {
  return (
    <div className="header_div">
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}
