import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-5 sm:px-8 md:px-16 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Me</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="max-w-5xl mx-auto bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
      >
        <p className="text-slate-600 dark:text-slate-300 text-lg text-center leading-relaxed">
          I am a dedicated Frontend Developer specializing in React.js and modern web technologies. I have experience building responsive, interactive, and user-friendly web applications while following modern development practices. Passionate about continuous learning and problem-solving, I am currently enhancing my skills in the MERN Stack and actively working on real-world projects to grow as a professional developer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          <div className="bg-cyan-500/10 p-4 rounded-2xl">
            <h3 className="font-semibold">Full Name</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Hasan Raza
            </p>
          </div>

          <div className="bg-cyan-500/10 p-4 rounded-2xl">
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-600 dark:text-slate-300 break-words">
              hasan4cd@gmail.com
            </p>
          </div>

          <div className="bg-cyan-500/10 p-4 rounded-2xl">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-slate-600 dark:text-slate-300">
              +923142971702
            </p>
          </div>

          <div className="bg-cyan-500/10 p-4 rounded-2xl">
            <h3 className="font-semibold">Location</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Azizabad, Karachi, Pakistan
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default About
