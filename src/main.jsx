import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./Pages/Contact/Contact.jsx";
import Hero from "./Pages/HomePage/Hero.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Issues from "./Pages/Issues/Issues.jsx";
import Programs from "./Pages/Programs/Programs.jsx";
import About from "./Pages/About/About.jsx";
import Login from "./Auth/Login.jsx";
import Registration from "./Auth/Register.jsx";
import SavedIssue from "./Pages/Issues/SavedIssue.jsx";
import { AuthProvider } from "./utils/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/issues/saved" element={<SavedIssue />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </React.StrictMode>
    </AuthProvider>
  </Router>
);
