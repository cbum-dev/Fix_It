import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginUser } from "../store/Slicer/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)); // Dispatch the action for user login
  };

  return (
    <div className="bg-inherit">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center text-white my-4">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="my-6 bg-slate-900 px-4 py-6 rounded-3xl w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
        >
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={credentials.email}
              onChange={handleInputChange}
              className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              value={credentials.password}
              onChange={handleInputChange}
              className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <p className="text-sm md:text-xl text-white">
            Don't have an account? Register{" "}
            <Link className="text-blue-300" to="/register">
              here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
