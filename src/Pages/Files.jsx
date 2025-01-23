import React, { useRef } from 'react';

const Files = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='w-auto bg-gray-300 min-h-screen p-5'>
      
      {/* Header Section */}
      <br />
      <div>
        <h1 className='text-blue-950 text-3xl font-semibold'>Files</h1>
        <div className='flex justify-between text-gray-500 text-sm'>
          <p>Ac fermentum nunc sociis neque nec nunc vivamus.</p>
          <p>Dashboard / Files</p>
        </div>
      </div>

      {/* Upload Box */}
      <div className='bg-white border-2 border-dashed border-gray-400 rounded-lg p-10 mt-6 flex flex-col items-center justify-center pt-20 pb-20'>
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden"
        />
        
        {/* Upload Button */}
        <button 
          className='bg-white text-black border border-black py-2 px-6 rounded-md' 
          onClick={handleUploadClick}
        >
          Upload Your File
        </button>

        {/* Drag & Drop Text */}
        <p className='text-gray-500 mb-4 text-center pt-4'>
          Drag and drop your images anywhere or <br />
          Browse files from your computer
        </p>
      </div>

      {/* Files Uploaded Section */}
      <div className='bg-white rounded-lg p-6 mt-8'>
        {/* Header Row */}
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-semibold text-blue-950'>Files Uploaded</h2>
          <div className='flex space-x-4'>
            <button className='text-blue-600 underline'>Download All</button>
            <button className='text-blue-600 underline'>See All</button>
          </div>
        </div>

        {/* Table Grid */}
        <div className='mt-4 overflow-x-auto'>
          <table className='w-full border-collapse border-spacing-2'>
            <thead>
              <tr className='border-b bg-gray-100 text-left text-gray-600'>
                <th className='p-2'>File Name</th>
                <th className='p-2'>Size</th>
                <th className='p-2'>Date</th>
                <th className='p-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Data Rows */}
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>38%</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>74%</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>100%</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>May 12, 2019</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>May 12, 2019</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr className='border-b'>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>May 12, 2019</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
              <tr>
                <td className='p-2'>Turpis morbi pulvinar</td>
                <td className='p-2'>4,569 KB</td>
                <td className='p-2'>May 12, 2019</td>
                <td className='p-2'><span className='text-blue-600 underline cursor-pointer'>Automate</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default Files;
