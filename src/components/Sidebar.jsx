import React from "react";
import AddProduct from './modals/AddProduct'
import AddCustomer from './modals/AddCustomer'


const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-52 p-4 hidden md:block">
      <div className="items-center mb-4">
        {/* <AddProduct /> */}
      </div>
      <div className="items-center mb-4">
        <AddCustomer />
      </div>
    </div>
  );
};

export default Sidebar;