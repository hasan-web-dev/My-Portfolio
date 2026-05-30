import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-8 md:px-16 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl"
      >
        <p className="text-slate-600 dark:text-slate-300 text-lg text-center leading-relaxed">
          I am a passionate frontend developer focused on building modern and
          responsive web applications.
        </p>
      </motion.div>
    </section>
  )
}

export default About
