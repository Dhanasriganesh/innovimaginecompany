import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import logo from "../images/innov.png";
import { useTheme } from '../ThemeContext'; // Theme context for dark mode support

function Digital() {
  const { isDarkMode } = useTheme(); // Access the theme state
  const headingRef = useRef();
  const subtextRef = useRef();





  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtextRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);
  const RotatingModel = () => {
    const modelRef = useRef();
    const { scene } = useGLTF("/models/space_boi.glb");
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const dragRotation = useRef({ x: 0, y: 0 });

    useFrame(() => {
      if (modelRef.current && !isDragging) {
        modelRef.current.rotation.y += 0.002; // Smooth auto-rotation
      }
    });

    useEffect(() => {
      const handleMouseDown = (event) => {
        setIsDragging(true);
        dragStart.current = { x: event.clientX, y: event.clientY };
        if (modelRef.current) {
          dragRotation.current = {
            x: modelRef.current.rotation.x,
            y: modelRef.current.rotation.y,
          };
        }
      };

      const handleMouseMove = (event) => {
        if (isDragging && modelRef.current) {
          const deltaX = (event.clientX - dragStart.current.x) * 0.01;
          const deltaY = (event.clientY - dragStart.current.y) * 0.01;

          modelRef.current.rotation.x = dragRotation.current.x + deltaY;
          modelRef.current.rotation.y = dragRotation.current.y + deltaX;
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging]);

    return (
      <primitive
        ref={modelRef}
        object={scene}
        scale={[0.8, 0.8, 0.8]} // Adjusted scale to fit the model
        position={[0, -1.5, 0]} // Adjusted position to center the model
      />
    );
  };
 return (
 
      <div className="relative min-h-screen">
        {/* 3D Viewer Background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundColor: "#000000", // Explicit black background
          }}
        >
          <Canvas
            camera={{
              position: [0, 2, 10], // Set the camera further back
              fov: 45, // Adjusted FOV for a better fit
              near: 0.1,
              far: 100,
            }}
          >
            {/* Ambient light for general illumination */}
            <ambientLight intensity={0.3} />

            {/* Directional light with a higher intensity to highlight the model */}
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Add a spotlight for dynamic highlighting */}
            <spotLight position={[0, 5, 5]} intensity={1.5} angle={Math.PI / 6} penumbra={1} />

            {/* Rotating model */}
            <RotatingModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Revolutionizing the Digital
          </h2>
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            Unlock the Power of Innovative Software Solutions for Your Business
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
            >
              Explore Our Work
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={logo}
            alt="Office Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="crafting-icon.svg"
              alt="Crafting Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">Our Story</h3>
          <p className="mt-2 text-base">Crafting Digital Masterpieces</p>
        </div>

        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="mission-icon.svg"
              alt="Mission Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">About Us</h3>
          <p className="mt-2 text-base">Our Mission</p>
        </div>

        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="empowering-icon.svg"
              alt="Empowering Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">Empowering Businesses</h3>
          <p className="mt-2 text-base">Through Innovative</p>
        </div>
      </div>
    </div>
  );
}

export default Digital;
