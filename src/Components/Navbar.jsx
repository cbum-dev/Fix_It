import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 p-2.5 border-b-2 border-b-slate-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-mono text-4xl font-bold">
          Fix It
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`flex flex-col md:flex md:flex-row  items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white mx-4 hover:underline focus:underline">
            Home
          </Link>
          <Link to="/about" className="text-white mx-4 hover:underline focus:underline">
            About
          </Link>
          <Link to="/issues" className="text-white mx-4 hover:underline focus:underline">
            Issues
          </Link>
          <Link to="/programs" className="text-white mx-4 hover:underline focus:underline">
            Programs
          </Link>
          <Link to="/contact" className="text-white mx-4 hover:underline focus:underline">
            Contact
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
