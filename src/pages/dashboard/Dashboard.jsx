import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Customer from "./Customer";
import Footer from "../../components/Footer";
import Product from "./Product";
import Transaksi from "./Transaksi";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4">
          <h2 className="text-xl font-bold">User Data</h2>
          <div className="mb-8">
            <Customer />
          </div>
          <div className="mb-8">
            <Product />
          </div>
          <div>
            <Transaksi />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;