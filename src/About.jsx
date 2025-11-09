// About.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="max-w-4xl w-full text-left">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[rgb(5,248,165)] mb-4 leading-tight">
          Peyal Hasan
        </h2>

        {/* Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Enthusiast",
              "UI Focused Engineer",
              "Lifelong Learner",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        {/* Optional Description */}
        <p className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
          I create responsive and user-friendly web applications with modern
          technologies. Passionate about clean UI, efficient code, and
          continuous learning.
        </p>
      </div>
    </section>
  );
};

export default About;
