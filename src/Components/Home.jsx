import React from "react";
import BlurBlob from "./BlurBlob";
import About from "../About";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Animated blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
        color="#a855f7" // optional
        animation="animate-blob"
      />

        <About></About>
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold">
      </div>
    </div>
  );
};

export default Home;
