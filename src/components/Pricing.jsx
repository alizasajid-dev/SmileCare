import React from 'react';

const PricingPlans = () => {
  return (
       <div>
                 <h1 className="font-semibold text-4xl md:text-5xl text-[#008080] mt-40 text-center">Plans & Pricing</h1>

    <div className="flex justify-center py-14">
      <div className="w-[90%] shadow-xl rounded-lg p-14 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 flex-1 h-[400px]">
            <h3 className="text-xl font-semibold">Basic Plan</h3>
            <p className="mt-2">Ideal for small projects and individuals.</p>
            <div className="mt-4">
              <h2 className="text-4xl font-bold">$15</h2>
              <p className="text-sm">per month</p>
            </div>
            <ul className="mt-4 text-gray-600">
              <li className="mt-2">10 GB Storage</li>
              <li className="mt-2">Email Support</li>
              <li className="mt-2">Basic Security</li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Choose Plan</button>
          </div>

          {/* Premium Plan - Fully responsive */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-10 text-white shadow-lg flex-1 h-[400px]">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="mt-2">Everything you need to scale your business to the next level.</p>
            <div className="mt-4">
              <h2 className="text-4xl font-bold">$45</h2>
              <p className="text-sm">per month</p>
            </div>
            <ul className="mt-4">
              <li className="flex items-center mt-2">
                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L19 7" />
                </svg>
                100 GB Storage
              </li>
              <li className="flex items-center mt-2">
                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L19 7" />
                </svg>
                Dedicated Support
              </li>
              <li className="flex items-center mt-2">
                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L19 7" />
                </svg>
                Custom Integrations
              </li>
            </ul>
            <button className="mt-4 w-full bg-white text-blue-950 p-2 rounded-md hover:bg-gray-100">Choose Plan</button>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 flex-1 h-[400px]">
            <h3 className="text-xl font-semibold">Advanced Plan</h3>
            <p className="mt-2">For businesses needing more advanced features.</p>
            <div className="mt-4">
              <h2 className="text-4xl font-bold">$30</h2>
              <p className="text-sm">per month</p>
            </div>
            <ul className="mt-4 text-gray-600">
              <li className="mt-2">50 GB Storage</li>
              <li className="mt-2">Priority Support</li>
              <li className="mt-2">Advanced Security</li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
       </div>
  );
};

export default PricingPlans;
