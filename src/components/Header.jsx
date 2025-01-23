import React, { useState } from 'react';
import { FaBars, FaSearch, FaSmile, FaHeart, FaUserMd, FaArrowLeft } from 'react-icons/fa'; // Imported SmileCare-related icons

const Header = ({ setIsCollapsed, isCollapsed }) => {
  const [searchQuery, setSearchQuery] = useState(''); // Manage search input value

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  return (
    <div className="bg-gradient-to-r bg-gray-300 flex items-center justify-between p-4">
      {/* Left Section (Hamburger and Search) */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsCollapsed((prevState) => !prevState)} className="text-xl text-gray-700">
          <FaBars />
        </button>

        <div className="flex items-center space-x-2 bg-white p-2 rounded-md border border-gray-300 w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="outline-none px-4 py-2 rounded-sm w-full"
          />
          <FaSearch className="text-gray-600" />
        </div>
      </div>

      {/* Right Section (Icons, Separator, Text, and Avatar) */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Icons */}
        <FaSmile className="text-teal-600 text-2xl cursor-pointer" />
        <FaHeart className="text-red-600 text-2xl cursor-pointer" />
        <FaUserMd className="text-blue-600 text-2xl cursor-pointer" />

        {/* Separator */}
        <p style={{ fontSize: '24px', lineHeight: '50px', height: '55px' }}>|</p>

        {/* User Text */}
        <h1 className="text-gray-700 text-xl">Welcome, <span className="font-semibold">User</span></h1>

        {/* Avatar */}
        <img src="/assets/five.png" alt="User Avatar" className="rounded-full w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;
