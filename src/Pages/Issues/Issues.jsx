import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://api.github.com/search/issues?q=is:open is:issue org:appwrite label:"good first issue" ${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setIssues(data.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <div className="flex flex-col justify-center items-center mx-2 my-4">
      <h1 className="text-4xl md:text-7xl text-white mt-6 mb-4">Good First Issues For You</h1>
      <div className="bg-inherit text-white ">
        <div className="flex justify-center mt-4 m-6">
          <input
            type="text"
            placeholder="Search issues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 w-3/4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-gray-900 rounded-xl h-48 p-4">
              <h3 className="text-xl font-sans h-1/2">
                [{issue.title.split(" ").slice(1,7).join(" ")} ...]
              </h3>
              <div className="flex justify-between">
                              <p className=" bg-slate-300 rounded-xl mb-2 w-28 px-2">Organisation</p>
                                <p className=" bg-slate-300 rounded-xl mb-2 w-28 px-2">{issue.created_at}</p>

              </div>
              <div className="flex justify-evenly">
                <button className="px-2 py-2 bg-white text-black rounded-lg" >
                <Link to={issue.html_url}>View Issue</Link>
              </button>
                <button className="px-2 py-2 bg-white text-black rounded-lg" >
                <Link to={issue.html_url}>Lnk</Link>
              </button>

              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Issues;
