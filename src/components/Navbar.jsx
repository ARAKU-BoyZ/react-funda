import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import Customer from "../pages/dashboard/Customer";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState()
  const navigate = useNavigate()


  const toogleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (path) => {
    setIsOpen(!isOpen)
    navigate(path)
  }

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">EnigmaCamp</h1>
        <Button onClick={toogleMenu} className="md:hidden bg-blue-700 px-2 py-1 rounded">
          Menu
        </Button>
        {isOpen && (
          <div className="flex flex-col items-center">
            <button className="mb-8" onClick={() => handleClick("/Dashboard") }>Customer</button>
            <button className="mb-8" onClick={() => handleClick("/product")}>Product</button>
            <button onClick={() => handleClick("/transaksi")}>Transaksi</button>
          </div>
        )}
        <ul className="hidden md:flex gap-4">
          <Avatar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
