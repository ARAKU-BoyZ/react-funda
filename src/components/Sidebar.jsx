import React, { useState } from "react";
import AddProduct from './modals/AddProduct'
import AddCustomer from './modals/AddCustomer'
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState()
  const navigate = useNavigate()


  const handleClick = (path) => {
    setIsOpen(!isOpen)
    navigate(path)
  }

  return (
    <div className="bg-gray-800 text-white w-52 p-4 hidden md:block">
      <div className="items-center mb-4">
      </div>
      <div className="flex flex-col items-center">
        <button className="mb-8" onClick={() => handleClick("/Dashboard") }>Customer</button>
        <button className="mb-8" onClick={() => handleClick("/product")}>Product</button>
        <button onClick={() => handleClick("/transaksi")}>Transaksi</button>
      </div>
    </div>
  );
};

export default Sidebar;