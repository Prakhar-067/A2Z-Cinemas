import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "🔥", title: "Trending & Top-Rated Content" },
  { icon: "🎞️", title: "Watch Trailers & Find Streaming Options" },
  { icon: "🎭", title: "Browse Cast & Crew Details" },
  { icon: "💡", title: "Personalized Recommendations" },
  { icon: "🌍", title: "Multilingual Support" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#1F1E24] text-white px-8 py-16 flex flex-col items-center">
      <motion.h1
        className="text-5xl font-bold mb-6 text-center text-[#6556CD]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Welcome to A2Z Cinemas 🎬
      </motion.h1>

      <motion.p
        className="text-lg text-zinc-300 max-w-3xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        At <span className="text-white font-semibold">A2Z Cinemas</span>, we bring the magic of cinema to your fingertips. Whether you're hunting for your next binge-worthy series, exploring cast details, or watching trailers – we make discovery fun and effortless.
      </motion.p>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {features.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="bg-[#1c1c2b] p-5 rounded-xl shadow-md border border-[#2e2e3f] hover:shadow-[#6556CD]/40 transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        className="text-md text-zinc-400 mt-10 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        A2Z Cinemas is your personalized gateway to the world of entertainment — from A to Z.
      </motion.p>
    </div>
  );
};

export default About;
