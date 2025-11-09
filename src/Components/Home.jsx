// Home.jsx
import React from "react";
import BlurBlob from "./BlurBlob";
import About from "../About";


const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated blobs */}
      <BlurBlob
        position={{ top: "35%", left: "30%" }}
        size={{ width: "35%", height: "40%" }}
        color="#22d3ee"
      />
      <BlurBlob
        position={{ top: "60%", left: "60%" }}
        size={{ width: "25%", height: "30%" }}
        color="#22d3ee"
      />

      {/* About content aligned top-left */}
      <div className="relative z-10 px-8 pt-24">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
