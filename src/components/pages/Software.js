import React from 'react';

function Software() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Innovative Software
        </h2>
        <p className="flex justify-center mt-4 text-lg text-gray-500">
          Discover the Power of Innovative Software Solutions: Website Development, App Creation, and College Project Assistance
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            <div className="relative px-6 py-10 sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-white">
                Explore Website
              </h3>
              <p className="mt-4 text-gray-300">
                Revolutionize Your Online Presence with Our Advanced 3D Design and Visualization Capabilities
              </p>
              <div className="mt-6">
                
                <a  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            <div className="relative px-6 py-10 sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-white">
                Streamline Your App
              </h3>
              <p className="mt-4 text-gray-300">
                Elevate Your College Projects with Our Specialized Assistance in Website Development
              </p>
              <div className="mt-6">
                
                 <a href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            <div className="relative px-6 py-10 sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-white">
                College Project Support
              </h3>
              <p className="mt-4 text-gray-300">
                Unlock the Full Potential of Your College Projects with Our Comprehensive Solutions in Website Development
              </p>
              <div className="mt-6">
                
                  <a href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;