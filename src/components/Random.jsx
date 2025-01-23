import React from "react";

const Random = () => {
  return (
    <div className="mx-auto max-w-[90%] flex flex-wrap justify-center items-center mt-40 space-y-12 space-x-6">
      {/* First Card */}
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-[350px]">
        <div className="flex justify-center items-center">
          <img src="/assets/six.PNG" alt="Image 1" className="w-[60%] rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="font-semibold text-[#008080] text-2xl text-center mt-4">
            Empowering Your Success
          </h1>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            "We deliver solutions that drive progress and help you stay ahead of the competition. Join us on a journey of innovation."
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-[350px]">
        <div className="flex justify-center items-center">
          <img src="/assets/seven.PNG" alt="Image 2" className="w-[60%] rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="font-semibold text-[#008080] text-2xl text-center mt-4">
            Innovation at Its Best
          </h1>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            "Through cutting-edge solutions, we ensure your business thrives. We understand your needs and tailor strategies that work."
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-[350px]">
        <div className="flex justify-center items-center">
          <img src="/assets/eight.PNG" alt="Image 3" className="w-[60%] rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="font-semibold text-[#008080] text-2xl text-center mt-4">
            Achieve Your Vision
          </h1>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            "Our team works tirelessly to turn your vision into reality. With every project, we aim for excellence and lasting impact."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Random;
