import React from 'react';

const Join = () => {
  return (
    <div className='mx-auto max-w-[90%] sm:max-w-[80%] mt-20 bg-[#008080] pt-20 rounded-lg'>
      <div>
        <h1 className='font-semibold text-3xl sm:text-4xl text-center text-white'>
          Become a Member of Smile Care Today
        </h1>
      </div>
      <br />
      <div>
        <p className='text-center text-white text-sm sm:text-base md:text-lg'>
          Join a community of innovators and leaders! Our platform helps you expand your skills and connect with top-tier professionals in your field. Take the next step <br /> toward success and be part of something great. 
          Start your journey with us today!
        </p>
      </div>
      <br />
      <div className='mt-4 mb-4 flex justify-center items-center pb-10'>
        <button className='bg-purple-600 p-2 px-8 rounded-md text-white hover:bg-purple-500'>
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Join;
