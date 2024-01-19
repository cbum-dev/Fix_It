import React from "react";

const Hero = () => {
  return (
    <div className="bg-dark-500 flex flex-col justify-center items-center text-white py-10">
      <h1 className="text-3xl md:text-7xl font-bold hover:text-black">
        Welcome to Fix it
      </h1>
      <p className="md:text-xl text-slate-400 mt-4">
        Find and resolve GitHub issues with ease
      </p>
      <button className="bg-slate-200 text-blue-500 px-4 py-2 mt-6 rounded-md shadow-md hover:bg-blue-500 hover:text-white">
        Get Started
      </button>
      <div>
        <button className="bg-white text-violet-500 px-5 py-3 mt-6 rounded-lg shadow-md hover:bg-black hover:text-white mx-3">See All Issues</button>
        <button className="bg-blue-300 text-violet-500 px-5 py-3 mt-6 rounded-lg shadow-md hover:bg-black hover:text-white mx-3">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
