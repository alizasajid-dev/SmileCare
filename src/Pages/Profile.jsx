import React from 'react';

const Profile = () => {
  const files = [
    { name: "Brackets-846327627889.stl", date: "10/25/2023", size: "18.37MB", imgSrc: "/assets/fourteen.png" },
    { name: "Project-123456.stl", date: "11/15/2023", size: "32.50MB", imgSrc: "/assets/fifteen.png" },
    { name: "Design-789654.stl", date: "12/01/2023", size: "10.12MB", imgSrc: "/assets/fifteen.png" },
  ];

  return (
    <div className='w-auto bg-gray-300 pb-20 pt-10'>
      <div className='bg-pink-950 text-white ml-2 mr-2 pt-4 pb-28 pl-4 rounded-lg'>
        <h1 className='font-semibold text-3xl'>Profile</h1>
        <p>Hi, Samantha. Welcome to your profile settings</p>
      </div>
      <div className='mx-auto max-w-[90%] mt-[-60px] relative z-10'>
        <div className='bg-white pt-4 shadow-lg rounded-lg p-6'>
          <div className='flex items-center pt-8'>
            <img src="/assets/sixteen.png" alt="Profile" className='w-20 h-20 rounded-full' />
            <div className='pl-4'>
              <h1 className='text-blue-950 font-semibold text-2xl'>Samantha Davis</h1>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className='flex flex-wrap justify-between ml-4 mr-10'>
            <div className='mt-6 pt-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <h2 className='text-blue-950 font-semibold text-lg'>Profile Information</h2>
              <p className='text-gray-600 mt-2 text-sm leading-relaxed'>
                In donec mi morbi consectetur. Gravida est ante ultricies <br />vulputate. Ultricies morbi dictum dolor vulputate <br />scelerisque. Lectus tristique convallis tincidunt ac gravida <br /> sit risus.
              </p>
              <div className='mt-4 space-y-2 text-sm text-gray-700'>
                <p><strong className='text-gray-900'>Full Name:</strong> Alec M. Thompson</p>
                <p><strong className='text-gray-900'>Mobile:</strong> (44) 123 1234 123</p>
                <p><strong className='text-gray-900'>Email:</strong> alecthompson@mail.com</p>
                <p><strong className='text-gray-900'>Location:</strong> USA</p>
              </div>
            </div>
            <div className='mt-6 pt-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <h2 className='text-blue-950 font-semibold text-lg'>Account Settings</h2>
              <div className='mt-2 space-y-2'>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  Email me when lectus pulvinar sit quis
                </label>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  Email me when someone answers on my p..
                </label>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  Email me when someone mentions me
                </label>
              </div>
            </div>
            <div className='mt-6 pt-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <h3 className='text-blue-950 font-semibold text-lg'>Platform Settings</h3>
              <div className='mt-2 space-y-2'>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  New launches and projects
                </label>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  Monthly product updates
                </label>
                <label className='flex items-center text-sm text-gray-700'>
                  <input type="checkbox" className='mr-2 accent-blue-600' />
                  Subscribe to newsletter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ml-4 mr-4 mt-8">
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

export default Profile;
