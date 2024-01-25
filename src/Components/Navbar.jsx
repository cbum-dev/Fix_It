import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "react-feather";
import { useAuth } from "../utils/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 p-2.5 border-b-2 border-b-slate-400 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-white font-mono text-4xl font-bold">
          Fix It
        </Link>

        <div className="flex md:hidden relative">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {menuOpen && (
            <div className="relative top-full left-0 mt-2 p-2 bg-gray-800 rounded-lg md:hidden z-10">
              <Link
                to="/"
                className="text-white block p-2 hover:underline"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white block p-2 hover:underline"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/issues"
                className="text-white block p-2 hover:underline"
                onClick={closeMenu}
              >
                Issues
              </Link>
              <Link
                to="/programs"
                className="text-white block p-2 hover:underline"
                onClick={closeMenu}
              >
                Programs
              </Link>
              <Link
                to="/contact"
                className="text-white block p-2 hover:underline"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </div>

        <div className={`hidden md:flex md:flex-row items-center`}>
          <Link
            to="/"
            className="text-white mx-4 hover:underline focus:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white mx-4 hover:underline focus:underline"
          >
            About
          </Link>
          <Link
            to="/issues"
            className="text-white mx-4 hover:underline focus:underline"
          >
            Issues
          </Link>
          <Link
            to="/programs"
            className="text-white mx-4 hover:underline focus:underline"
          >
            Programs
          </Link>
          <Link
            to="/contact"
            className="text-white mx-4 hover:underline focus:underline"
          >
            Contact
          </Link>
          {user ? (
            <button
              className="text-white mx-4 hover:underline focus:underline"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white mx-4 hover:underline focus:underline"
            >
              Login
            </Link>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
