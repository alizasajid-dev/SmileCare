import React from 'react';

const Main = () => {
  return (
    <div className="mx-auto max-w-5xl px-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="w-full md:w-1/2">
        <h1 className="font-semibold text-4xl md:text-5xl text-[#008080]">
          SmileCare: 3D Dental Solutions
        </h1>
        <p className="text-gray-500 mt-4">
          Simplifying dental prosthesis modeling with cutting-edge 3D technology, empowering dentists to create flawless smiles.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img src="/assets/one.jpeg" alt="Dental Image" className="w-[90%] max-w-md rounded-md" />
      </div>
    </div>
  );
};

export default Main;
