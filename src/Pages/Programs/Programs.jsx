import React, { useEffect, useState } from "react";
import axios from "axios";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const API_URL = "https://api.gsocorganizations.dev/2022.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL,
            {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
        setPrograms(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <header>
        <h1>Welcome to GSOC 2023 Programs</h1>
        <p>Explore the exciting programs participating in GSOC 2023!</p>
      </header>

      <main>
        <h2>Programs List</h2>
        {programs.length > 0 ? (
          <ul>
            {programs.map((program) => (
              <li key={program.id}>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                {/* Add more details if needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading programs...</p>
        )}
      </main>

      <footer>
        <p>&copy; 2023 GSOC Programs</p>
      </footer>
    </div>
  );
};

export default Programs;
