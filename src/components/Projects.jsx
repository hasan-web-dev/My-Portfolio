import React from 'react'
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="px-8 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>

      <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
        A collection of projects showcasing my skills in React.js, JavaScript, Tailwind CSS, and modern frontend development.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      max-w-7xl
      mx-auto
      ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 shadow-xl border dark:border-white/10 overflow-hidden rounded-3xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-56
              object-cover
              object-top
              rounded-t-3xl
              hover:scale-110
              transition duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-slate-600 dark:text-slate-300 mb-6">{project.desc}</p>

              <div className="flex gap-3">
                <button onClick={() => window.open(project.live, '_blank')} className="text-white px-7 py-3 rounded-2xl font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
                  Live Demo
                </button>

                <button onClick={() => window.open(project.github, '_blank')} className="border border-cyan-400 px-5 py-2 rounded-xl font-semibold cursor-pointer hover:bg-cyan-400 hover:text-black transition">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
