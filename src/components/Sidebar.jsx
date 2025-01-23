import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCubes, FaArrowLeft } from 'react-icons/fa';

const Sidebar = ({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:translate-x-0 sm:relative sm:w-64 bg-blue-950 text-gray-200`}
    >
      {/* Sidebar back button for small screens */}
      <div className="p-3">
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl sm:hidden"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* Sidebar content for large screens */}
      <div className="p-3 text-lg font-bold flex justify-center">
        <div className="text-[#008080] text-2xl font-bold cursor-pointer">
          SmileCare
        </div>
      </div>

      {/* Links */}
      <ul className={`space-y-4 p-5 ${isCollapsed ? 'hidden' : 'block'}`}>
        <li>
          <Link
            to="/client"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/modelroom"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Model Room</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/checkout"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>My Purchase</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/profile"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/files"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Files</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/getstarted"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Get Started</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/support"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Support</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/documentation"
            className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <FaCubes />
            <span>Documentation</span>
          </Link>
        </li>
      </ul>

      {/* Sidebar for small devices - icons only */}
      <div className={`p-5 space-y-4 ${!isCollapsed ? 'hidden' : 'block'}`}>
        <ul>
          <li>
            <Link
              to="/client"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
            >
              <FaTachometerAlt />
            </Link>
          </li>
          <li>
            <Link
              to="/client/modelroom"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
            >
              <FaCubes />
            </Link>
          </li>
          <li>
            <Link
              to="/client/checkout"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
            >
              <FaCubes />
            </Link>
          </li>
          <li>
            <Link
              to="/client/profile"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
            >
              <FaCubes />
            </Link>
          </li>
          <li>
            <Link
              to="/client/files"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-200 hover:text-indigo-700"
            >
              <FaCubes />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
