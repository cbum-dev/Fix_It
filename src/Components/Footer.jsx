import React from "react";
import { Instagram, Linkedin, Twitter, CcCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-4 border-2 border-slate-800 rounded-xl">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3 flex flex-col justify-evenly">
          <button className="flex items-center bg-inherit text-white px-2 py-2 rounded-md ">
            <Linkedin className="mx-2" />
            LinkedIn
          </button>
          <button className="flex items-center bg-inherit text-white px-2 py-2 rounded-md ">
            <Instagram className="mx-2" />
            Instagram
          </button>
          <button className="flex items-center bg-inherit text-white px-2 py-2 rounded-md ">
            <Twitter  className="mx-2" />
            Twitter
          </button>
        </div>
        <div className="w-1/3 px-2 flex items-center justify-center">
          {/* <h1 className=" text-center items-center text-5xl md:text-8xl object-cover w-full"> Fix It </h1> */}
          <div className="flex items-center justify-center  cursor:pointer">
        
        <h1 className="md:text-6xl text-3xl  font-extrabold  text-white">FIX IT</h1>
        {/* <h1>B</h1> */}
      </div>
        </div>
        <div className="w-1/3 flex flex-col  justify-evenly">
          <Link className="text-right px-4" to="/">Home</Link>
          <Link className="text-right px-4" to="/about">About</Link>
          <Link className="text-right px-4" to="/issues">Issues</Link>
          <Link className="text-right px-4" to="/programs">Programs</Link>
          <Link className="text-right px-4" to="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className=" border-t-2 border-slate-600"></h1>
        <h1>&copy; 2024 - Fix It </h1>
      </div>
    </footer>
  );
};

export default Footer;
