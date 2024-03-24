import { useState, useEffect, useCallback } from "react";

function IssueApis() {
  const [label, setLabel] = useState([]);
  const [issues, setIssues] = useState([]);
  const [orgDetails, setOrgDetails] = useState({});

  const fetchIssues = useCallback((org, label) => {
    fetch(`https://api.github.com/repos/${org}/appwrite/issues?labels=${label}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch labels
    fetchLabels();
    // Fetch organization details
    fetchOrgDetails();
  }, []);
  function fetchLabels() {
    fetch(`https://api.github.com/repos/appwrite/appwrite/labels`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLabel(data);
      })
      .catch((error) => console.log(error));
    return label;
  }


//   const fetchLabels = useCallback(() => {
//     fetch(`https://api.github.com/repos/appwrite/appwrite/labels`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setLabel(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

  const fetchOrgDetails = useCallback(() => {
    fetchOrg("organizationName").then((data) => {
      console.log(data);
      setOrgDetails(data);
    });
  }, []);

  const fetchOrg = useCallback((org) => {
    return fetch(`https://api.github.com/orgs/${org}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }, []);

  return { label, issues, orgDetails, setLabel, setIssues, setOrgDetails };
}

export default IssueApis;
