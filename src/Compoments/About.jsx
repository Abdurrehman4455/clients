import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content: Animated Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Who is <span className="text-blue-600">Syeda Sidra?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Syeda Sidra is a national champion, an inspiring mentor, and an Olympic-level athlete. Her remarkable
            journey reflects resilience and unwavering determination. She has won numerous accolades and is a beacon of
            hope for young athletes worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond her sports achievements, Syeda Sidra actively mentors aspiring athletes, instilling confidence and
            guiding them toward success.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Content: Animated Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/path-to-about-image.jpg"
            alt="Syeda Sidra"
            className="rounded-lg shadow-lg border-4 border-blue-500"
          />
          <motion.div
            className="absolute top-4 -left-4 bg-blue-500 rounded-full p-4 shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-white font-bold text-sm uppercase">National Hero</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
