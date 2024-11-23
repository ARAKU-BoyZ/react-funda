import { Avatar } from '@nextui-org/react';


const Navbar = () => {
  return (
    <>
      <div className='w-full bg-blue-300 flex justify-between'>
        <div>
          <a>Logo</a>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default Navbar;