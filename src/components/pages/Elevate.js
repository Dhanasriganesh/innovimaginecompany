import React from 'react';

function Elevate() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Elevate Your Project
        </h2>
        <p className="flex justify-center mt-4 text-lg text-gray-500">
          From Concept to Reality: College Project Assistance That Exceeds Expectations
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="college-project.jpg"
                alt="College Project"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">College Project</h3>
              <p className="mt-4 text-gray-500">
                Comprehensive assistance to bring your college project to life.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="concept-to-reality.jpg"
                alt="Concept to Reality"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">Concept to Reality</h3>
              <p className="mt-4 text-gray-500">
                Transform your project idea into a tangible solution.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="exceeds-expectations.jpg"
                alt="Exceeds Expectations"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative bg-white rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8">
              <h3 className="text-2xl font-bold text-gray-900">Exceeds Expectations</h3>
              <p className="mt-4 text-gray-500">
                Our assistance goes above and beyond to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elevate;