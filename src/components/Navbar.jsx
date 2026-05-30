import React from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between h-20
         px-8 py-5
         sticky top-0 z-50
       
         bg-white/90
         dark:bg-[#0f172a]/80
       
         backdrop-blur-xl
       
         border-b
         border-gray-200
         dark:border-white/10
       
         text-gray-800
         dark:text-white
       
         transition-all duration-500"
        >
      <h1 className="text-2xl font-bold">
        Hasan<span className="text-cyan-400"> Web Developer</span>
      </h1>
      <div className="hidden md:flex items-center justify-center gap-8 text-lg font-medium h-full">
        <a href="#about" className="text-slate-500 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-105">
          About
        </a>
        <a href="#skills" className="text-slate-500 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-105">
          Skills
        </a>
        <a href="#projects" className="text-slate-500 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-105">
          Projects
        </a>
        <a href="#contact" className="text-slate-500 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-105">
          Contact
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg shadow-cyan-400/30 cursor-pointer"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30"
        >
          {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white dark:bg-[#111827] border-t border-black/10 dark:border-white/10 flex flex-col items-center gap-6 py-8 md:hidden animate__animated animate__fadeInDown shadow-2xl">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
