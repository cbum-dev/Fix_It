import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "react-feather";
import { useAuth } from "../utils/AuthContext"; // Corrected import
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalCount = useSelector(state => state.count.value);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogout } = useAuth(); // Corrected usage
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? " scale-110 font-bold" : "";
  };

  return (
    <nav className="bg-gray-950 p-2.5 border-b-2 border-b-slate-400 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className=" text-4xl font-extrabold ">
          <div className="flex items-center justify-center   ">
            <h1 className="text-white">FIX IT</h1>
          </div>
        </Link>
        <span>Total Issues: {totalCount}</span>
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
                    className={`text-white block px-4 py-2 text-sm ${isActive(
                      "/"
                    )}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`text-white block px-4 py-2 text-sm ${isActive(
                      "/about"
                    )}`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    to="/issues"
                    className={`text-white block px-4 py-2 text-sm ${isActive(
                      "/issues"
                    )}`}
                    onClick={closeMenu}
                  >
                    Issues
                  </Link>
                  {user ? (
                    <Link
                      to="/issues/saved"
                      className={`text-white block px-4 py-2 text-sm ${isActive(
                        "/issues/saved"
                      )}`}
                      onClick={closeMenu}
                    >
                      Saved Issues
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link
                    to="/programs"
                    className={`text-white block px-4 py-2 text-sm ${isActive(
                      "/programs"
                    )}`}
                    onClick={closeMenu}
                  >
                    Programs
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-white block px-4 py-2 text-sm ${isActive(
                      "/contact"
                    )}`}
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
                      className={`text-white block px-4 py-2 text-sm ${isActive(
                        "/login"
                      )}`}
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
            className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            to="/issues"
            className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
              "/issues"
            )}`}
          >
            Issues
          </Link>
          {user ? (
            <Link
              to="/issues/saved"
              className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
                "/issues/saved"
              )}`}
            >
              Saved Issues
            </Link>
          ) : (
            <></>
          )}
          <Link
            to="/programs"
            className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
              "/programs"
            )}`}
          >
            Programs
          </Link>
          <Link
            to="/contact"
            className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
          {user ? (
            <button
              className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
                "/login"
              )}`}
              onClick={handleLogout}
            >
              <Link to="/">Logout</Link>
            </button>
          ) : (
            <Link
              to="/login"
              className={`text-white mx-4 hover:text-blue-300 duration-300 ${isActive(
                "/login"
              )}`}
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
