import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Hero from "./Pages/HomePage/Hero.jsx";
// import Hero from "./HomePage/Hero.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx'
import Issues from "./Pages/Issues/Issues.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>

      <Route path="/hero" element={<App />} />
      <Route path="/" element={<Hero />} />
      <Route path="/issues" element={<Issues />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);
