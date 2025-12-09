
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <section id="about" className="w-full flex flex-col-reverse md:flex-row gap-10">
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
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        {/* Optional Description */}
        <p className="text-white text-base sm:text-xl md:text-2xl mt-4 leading-relaxed">
          I create responsive and user-friendly web applications with modern
          technologies. Passionate about clean UI, efficient code, and
          continuous learning.
        </p>
        <a href="" target="_blank" rel="noopener norefrre" 
        className=" inline-block pt-1 hover:text-green-600 items-center  px-8 rounded-full mt-5 text-xl font-bold transition duration-300  transform hover:scale-105 btn btn-outline btn-success text-white bg-[rgb(29,28,30)] hover:bg-[#101828] "
        >Download CV / Resume</a>
      </div>
          {/* Right Side  */}
      <div className=" md:w-1/2  flex justify-center md:justify-end  ">
      <Tilt className=" w-48 h-48 sm:w64 sm:h-64 md:h-[30rem] md:w-[30rem] border-4 border-purple-700 rounded-full " 
      
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
      >
            <img className=" w-full h-full rounded-full object-cover  drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] " src={'/Profile.png'} alt="Peyal Hasan" />
      </Tilt>
      </div>
    </section>
  );
};

export default Hero;
