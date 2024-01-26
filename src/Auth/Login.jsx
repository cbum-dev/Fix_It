import React, { useEffect, useState } from "react";
// import { useAuth } from '../utils/AuthContext'
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const { user, handleUserLogin } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
    // console.log('CREDS:', credentials)
  };

  return (
    <div className=" bg-inherit">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center text-white my-4">
          Login
        </h1>

        <form
          onSubmit={(e) => handleUserLogin(e, credentials)}
          className=" my-6 bg-slate-900 px-4 py-6 rounded-3xl w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
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
              onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => handleInputChange(e)}
              className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="submit"
              value="Login"
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
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
