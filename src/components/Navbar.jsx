import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg w-full mb-20'>
      <div className='container mx-auto px-5 py-3 flex justify-between items-center'>
        <div className='text-[#008080] text-2xl font-bold cursor-pointer'>
          SmileCare
        </div>
        
        {/* Hamburger Menu */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700 focus:outline-none'>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 font-semibold'>
          <li className='hover:bg-slate-200 p-2 rounded-sm cursor-pointer'>OUR PRODUCTS</li>
          <li className='hover:bg-slate-200 p-2 rounded-sm cursor-pointer'>OUR SOLUTIONS</li>
          <li className='hover:bg-slate-200 p-2 rounded-sm cursor-pointer'>OUR SERVICES</li>
          <li className='hover:bg-slate-200 p-2 rounded-sm cursor-pointer'>SUPPORT</li>
          <li className='hover:bg-slate-200 p-2 rounded-sm cursor-pointer'>GET STARTED</li>
        </ul>

        {/* Buttons */}
        <div className='hidden md:flex space-x-3'>
          <Link to="/client">
            <button className='bg-[#3498db] p-2 px-6 rounded-md text-white'>Dashboard</button>
          </Link>
          <Link to="/login">
            <button className='bg-[#2c3e50] p-2 px-6 rounded-md text-white'>Login</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#f1f1f1] shadow-md'>
          <ul className='flex flex-col items-center space-y-3 py-4 font-semibold'>
            <li className='hover:bg-slate-200 p-2 w-full text-center cursor-pointer'>OUR PRODUCTS</li>
            <li className='hover:bg-slate-200 p-2 w-full text-center cursor-pointer'>OUR SOLUTIONS</li>
            <li className='hover:bg-slate-200 p-2 w-full text-center cursor-pointer'>OUR SERVICES</li>
            <li className='hover:bg-slate-200 p-2 w-full text-center cursor-pointer'>SUPPORT</li>
            <li className='hover:bg-slate-200 p-2 w-full text-center cursor-pointer'>GET STARTED</li>
            <Link to="/client" className='w-full text-center'>
              <button className='bg-[#3498db] p-2 w-4/5 rounded-md text-white'>Dashboard</button>
            </Link>
            <Link to="/login" className='w-full text-center'>
              <button className='bg-[#2c3e50] p-2 w-4/5 rounded-md text-white'>Login</button>
            </Link>
          </ul>
        </div>
      
      )}
    </nav>
  );
}

export default Navbar;
