import BlurBlob from "./BlurBlob";
import Hero from "../Hero";


const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated blobs */}
      <BlurBlob
        position={{ top: "35%", left: "35%" }}
        size={{ width: "35%", height: "40%" }}
        color="#22d3ee"
      />
      <BlurBlob
        position={{ top: "60%", left: "60%" }}
        size={{ width: "25%", height: "30%" }}
        color="#22d3ee"
      />

      {/* About content aligned top-left */}
      <div className="relative z-10 px-8 pt-10 md:pt-24">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
