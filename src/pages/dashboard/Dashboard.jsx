import React from "react";
import Customer from "./Customer";

const Dashboard = () => {
  return (
    <>
      <h2 className="text-xl font-bold">User Data</h2>
          <div className="mb-8">
            <Customer />
          </div>
    </>
  );
};

export default Dashboard;