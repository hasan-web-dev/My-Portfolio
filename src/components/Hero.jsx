import React from 'react'
import Img from '../assets/images/mypic.jpeg'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="px-8 md:px-16 py-24 flex flex-col lg:flex-row items-center justify-between gap-14">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-cyan-400 mb-4 text-lg">
          Frontend / React Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Hi, I'm Hasan 👋
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
          I build modern responsive websites using React.js.
        </p>

         <div className="flex gap-4 flex-wrap">
          <button className="text-white px-7 py-3 rounded-2xl font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
            <a href="#projects">View Projects</a>
          </button>

          <button className="border border-cyan-400 px-7 py-3 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black transition cursor-pointer">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400"
        src={Img}
        alt="profile"
      />
    </section>
  )
}

export default Hero
