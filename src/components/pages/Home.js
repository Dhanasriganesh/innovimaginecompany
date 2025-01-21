import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Discover from "./Discover";
import Elevate from "./Elevate";
import Explore from "./Explore";
import Software from "./Software";
import Digital from "./Digital";
import Connect from "./Connect";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const headingRef = useRef();
  const subtextRef = useRef();
  const imagesRef = useRef([null, null, null]);

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
    <>
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

        {/* Foreground Content */}
        <div className="relative z-10  text-gray-200 min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1
            ref={headingRef}
            className="text-4xl font-serif sm:text-5xl font-bold text-gray-100 mb-4"
          >
            INNOVIMAGINE
          </h1>
          <p ref={subtextRef} className="text-gray-400 text-lg sm:text-xl mb-6">
            Innovative Solutions for Unparalleled Digital Experiences
          </p>
        </div>
      </div>
      
      {/* Other Sections */}
      <div>
        <Discover />
      </div>
      <div>
        <Elevate />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Software />
      </div>
      <div>
        <Digital />
      </div>
      <div>
        <Connect />
      </div>
    </>
  );
}

export default Home;
