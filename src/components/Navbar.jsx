import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import AddCutomer from '../components/modals/AddCustomer'



const Navbar = () => {
  const [isOPen, setIsOpen] = useState()


  const toogleMenu = () => {
    setIsOpen(!isOPen)
  }

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">EnigmaCamp</h1>
        <Button onClick={toogleMenu} className="md:hidden bg-blue-700 px-2 py-1 rounded">
          Menu
        </Button>
        {isOPen && (
          <ul>
            <AddCutomer />
          </ul>
        )}
        <ul className="hidden md:flex gap-4">
          <Avatar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
