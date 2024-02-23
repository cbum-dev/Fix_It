import  { useState } from "react";
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
    <nav className="bg-gray-950 p-2.5 border-b-2 border-b-slate-400 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className=" text-4xl font-extrabold ">
        <div className="flex items-center justify-center   ">
        <h1 className=" italic  text-blue-500 ">
          F
        </h1>
        <h1 className="italic  text-blue-800 ">
          I
        </h1>
        <h1 className="italic  text-red-800  ">
          XI
        </h1>
        <h1 className=" italic  text-white">T</h1>
        {/* <h1>B</h1> */}
      </div>        </Link>

        <div className="flex md:hidden relative">
          <div className="relative inline-block text-left">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            {menuOpen && (
              <div className="origin-top-right absolute right-0 mt-6  w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Link
                    to="/"
                    className="text-white block px-4 py-2 text-sm"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-white block px-4 py-2 text-sm"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    to="/issues"
                    className="text-white block px-4 py-2 text-sm"
                    onClick={closeMenu}
                  >
                    Issues
                  </Link>
                  {user ? (
                    <Link
                      to="/issues/saved"
                      className="text-white block px-4 py-2 text-sm"
                      onClick={closeMenu}
                    >
                      Saved Issues
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link
                    to="/programs"
                    className="text-white block px-4 py-2 text-sm"
                    onClick={closeMenu}
                  >
                    Programs
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white block px-4 py-2 text-sm"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                  {user ? (
                    <button
                      className="text-white block px-4 py-2 text-sm"
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="text-white block px-4 py-2 text-sm"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`hidden md:flex md:flex-row items-center`}>
          <Link
            to="/"
            className="text-white mx-4 hover:underline  hover:text-blue-300 duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white mx-4 hover:underline hover:text-blue-300 duration-300"
          >
            About
          </Link>
          <Link
            to="/issues"
            className="text-white mx-4 hover:underline hover:text-blue-300 duration-300"
          >
            Issues
          </Link>
          {user ? (
            <Link
              to="/issues/saved"
              className="text-white mx-4 hover:underline hover:text-blue-300 duration-300 "
            >
              Saved Issues
            </Link>
          ) : (
            <></>
          )}
          <Link
            to="/programs"
            className="text-white mx-4 hover:underline hover:text-blue-300 duration-300"
          >
            Programs
          </Link>
          <Link
            to="/contact"
            className="text-white mx-4 hover:underline hover:text-blue-300 duration-300 "
          >
            Contact
          </Link>
          {user ? (
            <button
              className="text-white mx-4 hover:underline  hover:text-blue-300 duration-300"
              onClick={handleLogout}
            >
              <Link to="/">Logout</Link>
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white mx-4 hover:underline hover:text-blue-300 duration-300"
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
