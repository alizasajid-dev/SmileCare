import React, { useState, useEffect } from "react";

const GetStarted = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      title: "Get Started",
      description:
        "Find answers to your questions and get help from our support team. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. questions and get help from our support team.",
      image: "/assets/seventeen.png",
      textPosition: "left",
      description2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
    },
    {
      title: "Software Features",
      description:
        "Find answers to your questions and get help from our support team. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. questions and get help from our support team.",
      image: "/assets/eighteen.png",
      textPosition: "left",
      description2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
    },
    {
      title: "",
      description: "",
      image: "",
      textPosition: "",
    },
  ];

  // Automatic Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full bg-gray-300 py-10">
      {/* Header */}
      <div className="w-auto p-4">
        <h1 className="text-blue-950 text-3xl font-semibold">Support</h1>
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <p>En mauris elementum sollicitudin.</p>
          <p>Dashboard / Support</p>
        </div>
      </div>

      {/* Get Started Card */}
      <div className="bg-white shadow-lg rounded-sm border border-gray-300 mt-12 mx-4 flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-20 pb-5">
        {/* Layout - Left Text & Right Image */}
        {activeIndex < 2 && (
          <div className="flex flex-col md:flex-row items-center w-full">
            {content[activeIndex].textPosition === "left" && (
              <>
                <div className="md:w-1/2 text-left">
                  <h2 className="text-2xl font-semibold text-blue-900">
                    {content[activeIndex].title}
                  </h2>
                  <p className="text-gray-600 mt-4">{content[activeIndex].description}</p>
                  <p className="text-gray-600 mt-4">{content[activeIndex].description2}</p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                  <img
                    src={content[activeIndex].image}
                    alt="Illustration"
                    className="w-60 h-60 object-cover"
                  />
                </div>
              </>
            )}
          </div>
        )}

        {/* Empty Step */}
        {activeIndex === 2 && <div className="h-40"></div>}

        {/* Dots Navigation */}
        <div className="flex space-x-3 mt-6 pb-5 pt-20">
          {content.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
