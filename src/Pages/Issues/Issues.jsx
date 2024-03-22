import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { SaveFill } from "react-bootstrap-icons";
import { databases, DATABASE_ID, COLLECTION_ID_SAVEDISSUE } from "../../config";
import { ID, Permission, Role } from "appwrite";
import { useAuth } from "../../utils/AuthContext";
import usecalculateTimeDifference from "../../CustomHooks/useTimeDifference";
import LoadingSkeleton from "../../Components/IssueSkeleton";
import { extractRepoName } from "../../utils/BasicUtils";

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
          : selectedLabel.toLowerCase() === "hacktoberfest"
          ? "Hacktoberfest Issues For You"
          : `Issues Labeled "${selectedLabel}"`}
      </h1>
      <h1 className="text-xl my-2 text-white capitalize">
        {bio === ""
          ? "appwrite : End to end backend server for frontend and mobile developers. 👩‍💻👨‍💻"
          : `${name} : ${bio}`}
        {/* {name} : {bio} */}
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
          {/* <button className="px-2.5 border-2 mx-2 bg-slate-300 rounded-lg ">Save Organzation</button> */}
        </div>
        {/* {label.map((label) => (
          <div key={label.id} className="flex justify-center m-6 text-black">
            <select name="label" id="">
              <option value={label.name}>{label.name}</option>
            </select>
          </div>
        ))} */}
        <div className="flex justify-center m-6 text-black">
          <select
            value={selectedLabel}
            onChange={(e) => handleLabelChange(e.target.value)}
            className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
          >
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
            <option value="funcselecttions">Functions</option>
          </select>
        </div>
        {/* <button className="px-6 border-2 mx-2 bg-slate-300 rounded-lg ">Save</button> */}
        {/* 
        {label.length > 0 && (
          <div key={label[0].id} className="flex justify-center m-6 text-black">
              <select
                value={selectedLabel}
                onChange={(e) => handleLabelChange(e.target.value)}
                className="px-4 w-11/12 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-200"
              >
                {label.map((label) => (
                  <option key={label.id} value={label.name}>
                    {label.name}
                  </option>
                ))}
              </select>
          </div>
        )} */}
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
              <div
                key={issue.id}
                className="bg-zinc-900  border border-zinc-700 rounded-xl h-60 p-4"
              >
                <div className="h-3/5">
                  <div className="flex justify-between">
                    <h3 className="text-lg md:text-2xl font-sans mb-2">
                      # {issue.number}
                    </h3>
                    <h3 className="flex">
                      {" "}
                      <p
                        className=""
                        style={{
                          color:
                            Object.keys(issue.assignees).length === 0
                              ? "lime"
                              : "yellow",
                        }}
                      >
                        {Object.keys(issue.assignees).length === 0
                          ? "<Not Assigned>"
                          : "<Assigned>"}
                      </p>
                      <button
                        onClick={async () => {
                          const permissions = [
                            Permission.write(Role.user(user.$id)),
                          ];
                          const payload = {
                            users: user.$id,
                            name: issue.title,
                            url: issue.html_url,
                            org: issue.url.split("/")[4],
                            repo: issue.url.split("/")[5],
                          };
                          const response = await databases.createDocument(
                            DATABASE_ID,
                            COLLECTION_ID_SAVEDISSUE,
                            ID.unique(),
                            payload,
                            permissions
                          );
                          // alert("Issue Saved");

                          // console.log(user.$id, "  ", user),
                          console.log("RESPONSE:", response);
                        }}
                        className="flex hover:text-blue-600"
                      >
                        <p className="px-2">
                          {user ? "Save" : "Login To Save"}
                        </p>{" "}
                        <SaveFill className="mr-2 h-6 w-5" />
                      </button>
                    </h3>
                  </div>

                  <p className="text-slate-200">
                    [{issue.title.split(" ").slice(0, 20).join(" ")} ...]
                  </p>
                </div>
                <div className="flex justify-between ">
                  <div className="w-1/2">
                    <p className="bg-slate-700 border border-zinc-600 text-green-500 rounded-xl mb-2 w-3/4 px-3 text-center">
                      {issue.url.split("/")[4]}
                    </p>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                    <p className="bg-slate-700 border border-zinc-600 text-green-400 rounded-xl mb-2 w-full  text-center">
                      {extractRepoName(issue.html_url)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-evenly mt-3 items-center">
                  <p className="rounded-xl mt-2 mb-2 w-1/2">
                    {usecalculateTimeDifference(issue.created_at)}
                  </p>

                  <button className="px-4  py-1.5 bg-slate-300 hover:text-slate-100 hover:bg-zinc-950 border border-zinc-800  duration-200 text-black rounded-xl border-0.5">
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
