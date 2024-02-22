import React, { useState } from "react";

function Dashboard() {
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Dashboard;
