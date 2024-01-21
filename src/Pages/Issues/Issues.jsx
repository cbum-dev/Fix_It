import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StopCircle } from "react-bootstrap-icons";

const calculateTimeDifference = (createdDate) => {
  const currentDate = new Date();
  const issueDate = new Date(createdDate);
  const timeDifference = currentDate - issueDate;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 30)
  );
  const yearsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 365)
  );

  if (yearsDifference > 0) {
    return yearsDifference === 1
      ? "1 year ago"
      : `${yearsDifference} years ago`;
  } else if (monthsDifference > 0) {
    return monthsDifference === 1
      ? "1 month ago"
      : `${monthsDifference} months ago`;
  } else if (daysDifference > 0) {
    return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return hoursDifference === 1
      ? "1 hour ago"
      : `${hoursDifference} hours ago`;
  } else {
    return minutesDifference === 1
      ? "1 minute ago"
      : `${minutesDifference} minutes ago`;
  }
};


const fetchOrg = (org,setBio,setName) => {
      fetch(`https://api.github.com/users/${org}`)
          .then(response => response.json())
          .then((data) => {
            setBio(data.bio);
            setName(data.login);
          })
          .catch(error => console.log(error));
  };
const extractRepoName = (url) => {
  const parts = url.split("/");
  return parts[4];
};

const LoadingSkeleton = () => {
  return <div className=" bg-gray-900 rounded-xl w-96 h-56 animate-ping"></div>;
};

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("appwrite");
  const [selectedLabel, setSelectedLabel] = useState("good first issue");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bio, setBio] = useState('');
  const [name,setName] = useState('') // Define bio state here
  const handleSearch = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      fetchData(searchTerm.trim());
    }
  };

  const handleLabelChange = (label) => {
    setSelectedLabel(label);
    fetchData(searchTerm, label);    

  };

  const fetchData = (org, label = selectedLabel) => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      fetch(
        `https://api.github.com/search/issues?q=is:open is:issue org:${org} label:"${label}"`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setIssues(data.items);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  };

  useEffect(() => {
    fetchData("appwrite");
  }, []);
fetchOrg(searchTerm,setBio,setName);
  return (
    <div className="flex flex-col justify-center items-center mx-2 my-4">
      <h1 className="text-3xl md:text-6xl lg:text-7xl text-white mt-6 mb-4">
        {selectedLabel === "good first issue"
          ? "Good First Issues For You"
          : `Issues Labeled "${selectedLabel}"`}
      </h1>
      <h1 className="text-xl text-white capitalize">{name} : {bio}</h1>
      <div className="bg-inherit text-white">
        <div className="flex justify-center mt-4 m-6 text-black">
          <input
            type="text"
            placeholder="Search Organizations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
            className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
          />
          {/* <button className="px-2.5 border-2 mx-2 bg-slate-300 rounded-lg ">Save Organzation</button> */}
        </div>

        <div className="flex justify-center m-6 text-black">
    
          <select
            value={selectedLabel}
            onChange={(e) => handleLabelChange(e.target.value)}
            className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
          >
            <option value="good first issue">Good First Issue</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="documentation">Documentation</option>
            <option value="enhancement">Enhancement</option>
            <option value="help wanted">Help Wanted</option>
            <option value="cloud">Cloud</option>
            <option value="console">Console</option>
            <option value="docs">Docs</option>
            <option value="functions">Functions</option>
          </select>
          {/* <button className="px-6 border-2 mx-2 bg-slate-300 rounded-lg ">Save</button> */}

        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loading ? (
            // Display loading skeletons while data is being fetched
            Array.from({ length: 4 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : error ? (
            // Display an error message if there is an error
            <div className="text-white text-center">
              <p>Error: {error}</p>
              <button onClick={() => fetchData(searchTerm)}>Retry</button>
            </div>
          ) : issues.length === 0 ? (
            // Display a message and back button when no data is found
            <div className="text-white text-center">
              <p className="text-3xl text-center">Data Not Found</p>
              <button onClick={() => fetchData(searchTerm)}>Retry</button>
            </div>
          ) : (
            issues.map((issue) => (
              <div key={issue.id} className="bg-gray-900 rounded-xl h-56 p-4">
                <div className="h-3/5">
                  <div className="flex justify-between">
                    <h3 className="text-lg md:text-2xl font-sans mb-2">
                      # {issue.number}
                    </h3>
                    <h3 className="flex">
                      <StopCircle className="mr-2 h-6 w-5" />
                      Open
                    </h3>
                  </div>

                  <p className="text-slate-200">
                    [{issue.title.split(" ").slice(0, 20).join(" ")} ...]
                  </p>
                </div>
                <div className="flex justify-between ">
                  <div className="w-1/2">
                    <p className="bg-slate-700 text-green-300 rounded-xl mb-2 w-3/4 px-3 text-center">
                      {issue.url.split("/")[4]}
                    </p>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                    <p className="bg-slate-700 text-green-300 rounded-xl mb-2 w-full px-3 text-center">
                      {extractRepoName(issue.html_url)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-evenly mt-3 items-center">
                  <p className="rounded-xl mt-2 mb-2 w-1/2">
                    {calculateTimeDifference(issue.created_at)}
                  </p>

                  <button className="px-4  py-1.5 bg-slate-300 hover:text-slate-100 hover:bg-slate-700 text-black rounded-xl border-0.5">
                    <Link
                      to={issue.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Issue
                    </Link>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Issues;
