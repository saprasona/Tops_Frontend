import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import Header from "./Header";
import About from "./About";
import Contact from "./contact";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}