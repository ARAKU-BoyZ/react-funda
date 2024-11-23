// Sidebar.js

const Sidebar = () => {
    return (
      <div className="h-screen w-22 bg-blue-300 text-white flex flex-col">
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Produk</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Konsumen</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Transaksi</span>
          </a>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  