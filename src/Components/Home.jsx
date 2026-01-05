import React from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import BlurBlob from "./BlurBlob";
import Hero from "../Hero";

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  const trailX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const trailY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden cursor-none"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#22d3ee]"
      />

      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <BlurBlob
            position={{ top: "35%", left: "35%" }}
            size={{ width: "35%", height: "40%" }}
            color="#22d3ee"
          />
        </motion.div>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        >
          <BlurBlob
            position={{ top: "60%", left: "60%" }}
            size={{ width: "25%", height: "30%" }}
            color="#22d3ee"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 px-8 pt-10 md:pt-24"
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default Home;