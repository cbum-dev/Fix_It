import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { SaveFill } from "react-bootstrap-icons";
import { databases, DATABASE_ID, COLLECTION_ID_SAVEDISSUE } from "../../config";
import { ID, Permission, Role } from "appwrite";
import { useAuth } from "../../utils/AuthContext";
import usecalculateTimeDifference from "../../CustomHooks/useTimeDifference";
import LoadingSkeleton from "../../Components/IssueSkeleton";
import { extractRepoName } from "../../utils/BasicUtils";
import IssueApis from "../../api/IssueApis";
import fetchLabels from "../../api/IssueApis";
import IssueComponent from "../../Components/IssuePage/IssueCard";
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const fetchOrg = (org, setBio, setName) => {
  fetch(`https://api.github.com/users/${org}`)
    .then((response) => response.json())
    .then((data) => {
      setBio(data.bio);
      setName(data.login);
    })
    .catch((error) => console.log(error));
};

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("appwrite");
  const [selectedLabel, setSelectedLabel] = useState("good first issue");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [label, setLabel] = useState([]);
  // const { label, issues, orgDetails, fetchIssues, fetchLabels, fetchOrgDetails } = IssueApis();

  const debouncedFetchOrg = debounce(fetchOrg, 500);
  const { user } = useAuth();

  const getLabels = () => {
    fetch(`https://api.github.com/repos/appwrite/appwrite/labels`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLabel(data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (event) => {
    if (
      event.key === "Enter" ||
      (event.keyCode === 13 && searchTerm.trim() !== "")
    ) {
      fetchData(searchTerm.trim());
    }
  };
  const handleSearchDebounced = useCallback(
    (event) => {
      if (
        event.key === "Enter" ||
        (event.keyCode === 13 && searchTerm.trim() !== "")
      ) {
        debouncedFetchOrg(searchTerm.trim(), setBio, setName);
      }
    },
    [debouncedFetchOrg, searchTerm, setBio, setName]
  );
  const handleLabelChange = (label) => {
    setSelectedLabel(label);
    fetchData(searchTerm, label);
  };

  const fetchData = (org, label = selectedLabel) => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if(label === ""){
        fetch(
          `https://api.github.com/search/issues?q=is:open is:issue org:${org}`
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

      }
      else{
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
      }
    }, 500);
  }


  useEffect(() => {
    fetchData("appwrite");
    getLabels();
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", handleSearchDebounced);

    return () => {
      document.removeEventListener("keydown", handleSearchDebounced);
    };
  }, [handleSearchDebounced]);
  return (
    <div className="flex  flex-col justify-center items-center mx-2 my-4">
      <h1 className="text-3xl md:text-6xl lg:text-7xl text-white ">
        {selectedLabel === "good first issue"
          ? "Good First Issues For You"
          :selectedLabel === ""
          ? "All Issues"
          : selectedLabel.toLowerCase() === "hacktoberfest"
          ? "Hacktoberfest Issues For You"
          : `Issues Labeled "${selectedLabel}"`}
      </h1>
      <h1 className="text-xl my-2 text-white capitalize">
        {bio === ""
          ? "appwrite : End to end backend server for frontend and mobile developers. 👩‍💻👨‍💻"
          : `${name} : ${bio}`}
      </h1>
      <div className="bg-inherit text-white w-full">
        <div className="flex justify-center mt-4 m-6 text-black">
          <input
            type="text"
            placeholder="Search Organizations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
            className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
          />
        </div>

        <div className="flex justify-center m-6 text-black">
          <select
            value={selectedLabel}
            onChange={(e) => handleLabelChange(e.target.value)}
            className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
          >
            <option value="">All Issues</option>
            <option value="good first issue">Good First Issue</option>
            <option className="text-l text-gray-500" value="hacktoberfest">
              Hacktober Fest
            </option>
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : error ? (
            <div className="text-white text-center">
              <p>Error: {error}</p>
              <button onClick={() => fetchData(searchTerm)}>Retry</button>
            </div>
          ) : issues.length === 0 ? (
            <div className="text-white  w-full text-center">
              <p className="text-3xl text-center">Data Not Found</p>
              <button onClick={() => fetchData(searchTerm)}>Retry</button>
            </div>
          ) : (
            issues.map((issue) => (
              <IssueComponent
                key={issue.id}
                issue={issue}
                usecalculateTimeDifference={usecalculateTimeDifference}
                extractRepoName={extractRepoName}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Issues;
