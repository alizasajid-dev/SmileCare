import React from 'react';

const Dashboard = () => {
  const cards = [
    { title: "New Users", value: 28, percentage: 4, imgSrc: "/assets/twelve.png" },
    { title: "New Users", value: 28, percentage: 4, imgSrc: "/assets/twelve.png" },
    { title: "New Users", value: 28, percentage: 4, imgSrc: "/assets/twelve.png" },
    { title: "New Users", value: 28, percentage: 4, imgSrc: "/assets/twelve.png" },
  ];

  const files = [
    { name: "Brackets-846327627889.stl", date: "10/25/2023", size: "18.37MB", imgSrc: "/assets/fourteen.png" },
    { name: "Project-123456.stl", date: "11/15/2023", size: "32.50MB", imgSrc: "/assets/fifteen.png" },
    { name: "Design-789654.stl", date: "12/01/2023", size: "10.12MB", imgSrc: "/assets/fifteen.png" },
  ];

  return (
    <div className="w-full bg-gray-300 p-4">
      {/* Header Section */}
      <header>
        <h1 className="text-3xl text-blue-950 font-semibold">Dashboard</h1>
        <p className="text-gray-500">Hi, Samantha. Welcome back to Smile Care Admin!</p>
      </header>

      {/* Card Container */}
      <section className="flex flex-wrap lg:flex-nowrap justify-between mt-6 gap-2">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-1/2 flex justify-center">
                <img src={card.imgSrc} alt="Image" className="w-[80%]" />
              </div>
              <div className="w-1/2 pl-4">
                <h1 className="font-semibold text-3xl text-blue-950">{card.value}</h1>
                <p className="text-gray-500">{card.title}</p>
                <div className="flex items-center mt-2">
                  <img src="/assets/thirteen.PNG" alt="Percentage" className="w-[5%] rounded-sm mr-2" />
                  <p className="text-gray-500">{card.percentage}% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Recent Items */}
      <section className="mt-6">
        <h1 className="text-3xl text-blue-950 font-semibold">Recent Items</h1>
        <p className="text-gray-500">Eum fuga consequuntur utadsjn et.</p>
        <div className="flex flex-wrap justify-between mt-4 gap-4">
          {files.map((file, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <img src={file.imgSrc} alt="File" className="pt-4 w-[100px] h-[100px] object-contain mx-auto" />
                <p className="pt-4 text-lg font-semibold">{file.name}</p>
                <div className="flex justify-between text-gray-400">
                  <p>{file.date}</p>
                  <p>{file.size}</p>
                </div>
                <div className="flex justify-evenly pt-4">
                  <img src="/assets/eye.png" alt="View" className="cursor-pointer" />
                  <img src="/assets/pen.png" alt="Edit" className="cursor-pointer" />
                  <img src="/assets/auto.png" alt="Auto" className="cursor-pointer" />
                  <p className="text-purple-500">Automated</p>
                  <div>
                    <img src="/assets/dlt.png" alt="Delete" className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Files */}
      <section className="mt-6">
        <header>
          <h1 className="text-3xl text-blue-950 font-semibold">Recent Files</h1>
          <p className="text-gray-500">Here are your recent files</p>
        </header>
        <div className="overflow-x-auto mt-6">
          <div className="bg-white flex justify-between items-center rounded-md pt-4 pb-2">
            <div>
              <h1 className="pl-2">Files Uploaded</h1>
            </div>
            <div className="w-30vh mt-2 mb-2">
              <button className="bg-gray-200 p-2 px-4 rounded-md text-gray-900">Download all</button>
              <button className="ml-3 bg-blue-950 p-2 px-4 rounded-md text-white pr-2">See All</button>
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">File Name</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Size</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900">{file.name}</td>
                  <td className="px-6 py-4">{file.date}</td>
                  <td className="px-6 py-4">{file.size}</td>
                  <td className="px-6 py-4 flex space-x-4">
                    <img src="/assets/eye.png" alt="View" className="cursor-pointer" />
                    <img src="/assets/pen.png" alt="Edit" className="cursor-pointer" />
                    <img src="/assets/auto.png" alt="Auto" className="cursor-pointer" />
                    <img src="/assets/dlt.png" alt="Delete" className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
