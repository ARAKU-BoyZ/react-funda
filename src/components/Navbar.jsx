import { Avatar } from "@nextui-org/react";
import React from "react";

const Navbar = () => {

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">EnigmaCamp</h1>
        <button className="md:hidden bg-blue-700 px-2 py-1 rounded">
          Menu
        </button>
        <ul className="hidden md:flex gap-4">
          <Avatar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
