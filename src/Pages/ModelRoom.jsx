import React from 'react';

const ModelRoom = () => {
  const files = [
    { name: "Brackets-846327627889.stl", date: "10/25/2023", size: "18.37MB", imgSrc: "/assets/fourteen.png" },
    { name: "Project-123456.stl", date: "11/15/2023", size: "32.50MB", imgSrc: "/assets/fifteen.png" },
    { name: "Design-789654.stl", date: "12/01/2023", size: "10.12MB", imgSrc: "/assets/fifteen.png" },
  ];

  return (
    <div className="bg-gray-300 h-[100vh]">
      <br />
      <br />
      {/* Recent Items */}
      <section className="ml-4 mr-4">
        <h1 className="text-3xl text-blue-950 font-semibold">Recent Items</h1>
        <p className="text-gray-500">Eum fuga consequuntur utadsjn et.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-white px-4 sm:px-6 py-4 sm:py-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <img
                src={file.imgSrc}
                alt="File"
                className="pt-4 w-[80px] h-[80px] object-contain mx-auto sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
              />

              <p className="pt-4 text-lg font-semibold">{file.name}</p>
              <div className="flex justify-between text-gray-400">
                <p>{file.date}</p>
                <p>{file.size}</p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="flex space-x-3">
                  <img src="/assets/eye.png" alt="View" className="cursor-pointer" />
                  <img src="/assets/pen.png" alt="Edit" className="cursor-pointer" />
                  <img src="/assets/auto.png" alt="Auto" className="cursor-pointer" />
                </div>
                <p className="text-purple-500 text-xs sm:text-sm">Automated</p>
                <div>
                  <img src="/assets/dlt.png" alt="Delete" className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModelRoom;
