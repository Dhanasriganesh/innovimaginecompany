import React from 'react';

function Explore() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         Explore Us
        </h2>
        <p className="flex justify-center mt-4 text-lg text-gray-500">
          From Website Development to 3D Visualization
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="sports-car.jpg"
                alt="Sports Car"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Embrace the Future: 
              </h3>
              <div className="mt-4 text-gray-500">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="hiking-boots.jpg"
                alt="Hiking Boots"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Explore Our Services
              </h3>
              <div className="mt-4 text-gray-500">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;