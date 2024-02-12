import React from "react";

function Dashboard() {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <div className="flex h-screen">
          <div className="w-1/4 rounded-xl bg-slate-600  mx-2 h-screen">
            <ul>
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
          <div className="w-2/4 rounded-xl bg-slate-600  mx-2 h-screen">
            div
          
          </div>
          <div className="w-1/3 rounded-xl bg-slate-600  mx-2 h-screen"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
