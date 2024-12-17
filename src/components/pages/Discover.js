import React from 'react';

function Discover() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Discover Our Expertise
        </h2>
        <p className="flex justify-center mt-4 text-lg text-gray-500">
          Unlock the Power of Innovative Software
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="immersive-3d.jpg"
                alt="Immersive 3D"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">Immersive 3D</h3>
              <p className="mt-4 text-gray-500">Transform Your Digital</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="intuitive-app.jpg"
                alt="Intuitive App"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">Intuitive App</h3>
              <p className="mt-4 text-gray-500">Elevate Your Digital</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="seamless-website.jpg"
                alt="Seamless Website"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">Seamless Website</h3>
              <p className="mt-4 text-gray-500">Augue vesticu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;