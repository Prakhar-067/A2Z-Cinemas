import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="min-h-[70vh] w-full bg-[#1F1E24] flex flex-col justify-center items-center text-white bg-[#0F0F0F] px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#6556CD]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let's Connect!
      </motion.h1>

      <motion.p
        className="text-zinc-300 max-w-xl text-center mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Whether you're a fellow movie lover, developer, or just curious about A2Z Cinemas, feel free to connect with me on LinkedIn!
      </motion.p>

      <motion.a
        href="https://www.linkedin.com/in/prakhar-srivastava-42a5a3319/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        className="text-3xl hover:text-[#6556CD] transition-all duration-300"
      >
        <FaLinkedin />
      </motion.a>
    </motion.div>
  );
};

export default Contact;
