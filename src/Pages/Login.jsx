import React from 'react';

const Login = () => {
  return (
    <div className="w-full">
      <div className="max-w-[90%] mx-auto flex mt-20 justify-center items-center flex-col lg:flex-row">
        {/* Left Section: Form */}
        <div className="flex justify-center items-center w-full lg:w-[50%] pl-10 lg:pl-0">
          <div className="w-full sm:w-auto">
            <h1 className="text-[#008080] text-4xl font-bold text-center lg:text-left">SmileCare</h1>
            <h1 className="text-2xl text-center lg:text-left">Welcome Back</h1>
            <p className="text-center lg:text-left">
              Today is a new day. It's your day. You shape it. <br /> Sign in to start managing your projects.
            </p>
            <br />
            
            {/* Email Input */}
            <p>Email</p>
            <input
              type="text"
              placeholder="Example@gmail.com"
              className="text-gray-400 bg-slate-100 border-none border-gray-200 py-1 pl-4 pr-32 rounded-md w-full"
            />

            <p><br />Password</p>
            <input
              type="password"
              placeholder="At least 8 characters"
              className="text-gray-400 bg-slate-100 border-none border-gray-200 py-1 pl-4 pr-32 rounded-md w-full"
            />

            {/* Forgot Password Link */}
            <div className="text-center lg:text-left">
              <button className="text-blue-500 mt-2"><br />Forgot Password?</button>
            </div>

            {/* Sign in Button */}
            <br />
            <div className="text-center lg:text-left">
              <button className="bg-blue-950 p-2 px-36 sm:px-12 rounded-full text-white w-full sm:w-auto">
                Sign in
              </button>
            </div>

            {/* Sign up link */}
            <br />
            <div className="text-center lg:text-left">
              <p>Don't you have an account?<span className="text-blue-500"> Sign up</span></p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[50%] mt-4 lg:mt-0">
          <img src="/assets/nineteen.png" alt="Login Illustration" className="h-[70vh] sm:h-[50vh] rounded-md mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
