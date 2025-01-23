import React from 'react';

const Main = () => {
  return (
    <div className="mx-auto max-w-5xl  px-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-20 md:mt-40">
      <br />
      <div className="w-full md:w-1/2 flex justify-center md:justify-start space-x-4">
        <img src="/assets/two.png" className='w-[30%] mt-10' alt="Dental Model 1" />
        <img src="/assets/three.png" className='w-[30%]' alt="Dental Model 2" />
        <img src="/assets/four.png" className='w-[30%] mt-5' alt="Dental Model 3" />
      </div>
      <div className="w-full md:w-1/2 md:pl-20 mt-10 md:mt-0">
        <h1 className="font-semibold text-4xl md:text-5xl text-[#008080]">About SmileCare</h1>
        <p className="text-gray-500 mt-4">
          Our mission is to automate digital model work for dental technicians and generate print-ready files. While you may have the skills or manpower to handle model design manually, we make this first step faster and more efficient.
        </p>
        <p className="text-gray-500 mt-4">
          We understand that this is just the beginning of the process. Our goal is to simplify the early stages of fabrication, so you can focus on the final steps of creating perfect smiles.
        </p>
      </div>
    </div>
  );
};

export default Main;
