// import React from "react";

// function App() {
  
//   return (
//     <div>
//       <h1 className="text-yellow-100 text-center text-5xl">Hello World</h1>
//       <div className="bg-slate-600 grid place-content-center h-screen">
//         <div>
          
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/repos/appwrite/appwrite/issues");
        setData(response.data);
        console.log(response.data.label);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-yellow-100 text-center text-5xl">Hello World</h1>
      {/* Your JSX code */}
      <div className="bg-slate-600 grid place-content-center h-screen">
        <div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        </div>
    </div>
  );
}

export default App;