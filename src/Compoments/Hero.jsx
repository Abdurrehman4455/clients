import React from "react";
import r from"./Picture1.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-main-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Content */}
        <div className="text-white text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Syeda Sidra: From Local Triumphs to Global Glory
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Olympic Champion, National Hero, and an Inspiration for Future Generations.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#journey"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg transition duration-300"
            >
              Explore Her Journey
            </a>
            <a
              href="#achievements"
              className="bg-white hover:bg-gray-800 text-black px-6 py-3 rounded-md text-lg transition duration-300"
            >
              View Achievements
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block max-w-md">
          <img
            src={r}
            alt="Syeda Sidra Medal Moment"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
