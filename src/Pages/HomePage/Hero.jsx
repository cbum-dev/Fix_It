import { StopCircle, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-black flex flex-col justify-center h-screen items-center text-white py-10">
      <h1 className="text-5xl text-slate-200 text-center md:text-7xl font-sans font-extrabold mb-4">The Github Issue Controller</h1>
      <h1 className="text-lg text-center md:text-xl font-sans text-gray-400 mb-4">Struggling to pinpoint the ideal repository or address an issue effectively?<br /> Look no further, we've got you covered!</h1>
      <button className="mt-6 mb-6  flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-300 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          ></path>
        </svg>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://github.com/cbum-dev/"
        >
          Follow Along On Github
        </Link>
      </button>
      <p className="md:text-xl text-center text-slate-300 mt-4">
        Find and resolve GitHub issues with ease.
        <br />A simple and easy to use tool to help you find and resolve issues
        on GitHub.
      </p>

      <div className="md:w-3/6 flex flex-col md:flex-row  md:justify-evenly mt-8">
        <button className="flex duration-300 hover:scale-105 hover:border-slate-800 bg-slate-200 text-black px-4 py-2 rounded-full mt-6 mb-6 border-2 border-slate-900  hover:bg-black hover:text-white">
          <StopCircle className="mr-2 h-5 w-5 " />
          <Link to="/issues">Issues</Link>
        </button>

        <button className="flex hover:scale-105 hover:border-slate-800  duration-300 bg-slate-200 text-black px-4 py-2 rounded-full mt-6 mb-6 border-2 border-slate-900 hover:bg-black hover:text-white">
          <StarFill className="mr-2 h-5 w-5 " />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/cbum-dev/Fix_it"
          >
            Stars Our Repository
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
