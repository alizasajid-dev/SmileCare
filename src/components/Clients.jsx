import React from "react";
import { TbStarFilled } from "react-icons/tb";

const Clients = () => {
  return (
    <div className="mx-auto max-w-[80%] mt-40">
      {/* Section Header */}
      <div>
        <h1 className="font-semibold text-4xl text-center text-[#008080]">
          What Our Clients Say About Our Services
        </h1>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-wrap justify-center items-center space-x-4 mt-10 gap-6 md:gap-10">
        {/* Testimonial 1 */}
        <div className="mt-20 shadow-xl bg-white p-6 rounded-lg w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/assets/five.png" alt="client" className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h1 className="font-semibold text-[#008080]">Samantha Winter</h1>
              <p className="text-center text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              "This service exceeded my expectations! The team was quick to respond, and their attention to detail made all the difference. I highly recommend them!"
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gray" />
            <span className="ml-2 text-gray-600">4.5</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="mt-20 shadow-xl bg-white p-6 rounded-lg w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/assets/five.png" alt="client" className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h1 className="font-semibold text-[#008080]">John Doe</h1>
              <p className="text-center text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              "Incredible experience working with this team! They understood our requirements perfectly and delivered a quality solution on time."
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gray" />
            <span className="ml-2 text-gray-600">4.5</span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="mt-20 shadow-xl bg-white p-6 rounded-lg w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/assets/five.png" alt="client" className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h1 className="font-semibold text-[#008080]">Emily Green</h1>
              <p className="text-center text-sm text-gray-500">3 weeks ago</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              "Excellent service! The team's professionalism and expertise made this project a success. They were always available to answer questions and provided regular updates."
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gold" />
            <TbStarFilled size={20} color="gray" />
            <span className="ml-2 text-gray-600">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
