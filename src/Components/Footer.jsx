import React from "react";
import { Instagram, Linkedin, Twitter, CcCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 border-2 border-slate-800 rounded-xl">
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
            <Twitter className="mx-2" />
            Twitter
          </button>
        </div>
        <div className="w-1/3 flex items-center justify-between">
          <h1 className="text-white font-bold text-4xl">Fix It</h1>
        </div>
        <div className="w-1/3 flex flex-col justify-evenly">
          <Link to="/home">Home</Link>
          <Link to="/home">About</Link>
          <Link to="/home">Donate</Link>
          <Link to="/home">Contact</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className=" border-t-2 border-slate-600"></h1>
        <h1>&copy; Copyright(2024)   _|_ Fix It </h1>
      </div>
    </footer>
  );
};

export default Footer;
