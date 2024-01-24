import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrgRepo = () => {
  const [repos, setRepos] = useState([]);
  const [repoIssues, setRepoIssues] = useState([]);
  const { org } = useParams();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/orgs/${org}/repos`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRepoIssues = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${org}/appwrite/issues?page=2&per_page=100`);
        const data = await response.json();
        setRepoIssues(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
    fetchRepoIssues();
  }, [org]);

  return (
    <div className="flex flex-wrap justify-center mt-2 mb-2">
      <h1 className="text-7xl">Repositories</h1>
      {repos.map((repo) => (
        <div key={repo.id} className="flex flex-col items-center w-64 mx-2 my-2 bg-slate-400 p-4 rounded-lg">
          <h1 className="text-2xl my-2">{repo.name}</h1>
        </div>
      ))}
      {repoIssues.map((repoIssue) => (
        <p key={repoIssue.id}>{repoIssue.title}</p>
      ))}
    </div>
  );
};

export default OrgRepo;
