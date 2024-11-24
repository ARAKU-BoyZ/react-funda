import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Table from "../../components/Tabel";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">User Data</h2>
          <Table />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;