import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import gsap from "gsap";

const RotatingModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/computer.glb"); // Ensure the model is in your public folder

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Smooth rotation (can be adjusted)
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (modelRef.current) {
        const scrollY = window.scrollY; // Get scroll position
        const rotationFactor = scrollY * 0.002; // Adjust rotation based on scroll
        const translationFactor = scrollY * 0.001; // Adjust position based on scroll

        // Scroll moves the model's rotation and position
        gsap.to(modelRef.current.rotation, {
          x: rotationFactor,
          z: rotationFactor,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(modelRef.current.position, {
          y: -translationFactor, // Moves model vertically based on scroll
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <primitive ref={modelRef} object={scene} scale={[2, 2, 2]} />;
};

const ThreeDBackground = () => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Add OrbitControls to allow free movement */}
        <OrbitControls />
        
        <RotatingModel />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
