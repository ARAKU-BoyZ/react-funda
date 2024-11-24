import React from "react";
import Navbar from "../Navbar";
import LoginPage from "./LoginPage";

function Homepage() {
  return (
    <div>
        <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
        <header className="bg-blue-600 text-white py-4">
        <h1 className="text-2xl font-bold text-center">Selamat Datang di Homepage</h1>
      </header>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <p className="text-center">&copy; 2024 - Dibuat dengan ❤</p>
      </footer>
    </div>
    </div>

  );
}

export default Homepage;
