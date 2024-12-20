import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const Background3D = () => {
  const { scene } = useGLTF("/models/solar.glb"); // Ensure your model is in the public/models folder

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Push the canvas behind other content
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff4500" />

      {/* Environment for Reflections */}
      <Environment preset="sunset" />

      {/* 3D Model */}
      <primitive object={scene} scale={[3, 3, 3]} position={[0, -1, 0]} />

      {/* Orbit Controls */}
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </Canvas>
  );
};

export default Background3D;
