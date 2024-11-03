
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-300">Dashboard</a>
        <a href="#" className="hover:text-gray-300">Notifications</a>
        <a href="#" className="hover:text-gray-300">Profile</a>
      </div>
      <Avatar />
    </div>
  );
};

export default Navbar;