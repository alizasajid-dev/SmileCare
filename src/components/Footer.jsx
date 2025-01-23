import React from 'react';

const Footer = () => {
  return (
    <div className='mx-auto max-w-[90%] sm:max-w-[80%] mt-20 mb-10 flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex flex-col sm:flex-row items-center'>
        <h1 className="text-[#008080] text-2xl sm:text-3xl font-bold flex justify-center items-center mb-2 sm:mb-0">SmileCare</h1>
        <p className='text-gray-600 pt-1.5 text-sm sm:text-base'>@ 2023. All rights reserved.</p>
      </div>
      <div>
        <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 justify-center sm:justify-end'>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>Our Services</li>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>FAQs</li>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>Customer Support</li>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>About Us</li>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>Blog</li>
          <li className='text-gray-600 hover:text-blue-950 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
