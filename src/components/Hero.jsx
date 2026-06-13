import React from 'react'
import Img from '../assets/images/profilepic.jpeg'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="px-5 sm:px-8 md:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-14">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="max-w-2xl text-center lg:text-left"
      >
        <p className="text-cyan-400 mb-4 text-lg">
          Frontend / React Developer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
          Hi, I'm Hasan 👋
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
          Frontend Developer specializing in React.js, JavaScript, and Tailwind CSS. I create modern, responsive, and user-friendly web applications with clean UI and smooth user experiences.
        </p>

        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <button className="text-white px-7 py-3 rounded-2xl font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
            <a href="#projects">View Projects</a>
          </button>

          <button className="border border-cyan-400 px-7 py-3 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black transition cursor-pointer">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className="flex gap-5 mt-8 justify-center lg:justify-start">

          <a
            href="https://github.com/hasan-web-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="
                text-3xl
                text-slate-700
                dark:text-slate-300
                hover:text-cyan-500
                hover:scale-125
                hover:-translate-y-1
                transition-all duration-300
                "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/hasan-raza-web-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="
                text-3xl
                text-slate-700
                dark:text-slate-300
                hover:text-cyan-500
                hover:scale-125
                hover:-translate-y-1
                transition-all duration-300
                "
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20"
        src={Img}
        alt="profile"
      />
    </section>
  )
}

export default Hero
