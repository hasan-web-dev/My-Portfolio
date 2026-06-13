import React from 'react'
import { Skills as skills } from '../data/skills'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="px-5 sm:px-8 md:px-16 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto cursor-pointer">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            key={index}
            className="bg-white/80 dark:bg-white/5
            backdrop-blur-xl
          
            border border-slate-200 dark:border-white/10
          
            rounded-2xl
            py-6
            px-2
            text-center
            hover:-translate-y-3
            hover:shadow-2xl
            hover:shadow-cyan-500/10
            hover:border-cyan-400
            transition-all duration-500"
          >
            <h3 className="font-semibold text-xl">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
