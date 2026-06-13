import React from 'react';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="
      mt-24

      bg-white/70 dark:bg-white/5
      backdrop-blur-xl

      border-t border-slate-200 dark:border-white/10

      py-16 px-6
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* 4 Columns */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          "
        >

          {/* Column 1 */}
          <div className="text-center md:text-left lg:text-left">
            <h2
              className="
              text-3xl
              font-black

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              bg-clip-text
              text-transparent
              "
            >
              Hasan Web Developer
            </h2>

            <p
              className="
              mt-4
              text-slate-600 dark:text-slate-300
              leading-relaxed
              "
            >
              Frontend Developer specializing in React.js, JavaScript, and Tailwind CSS. Passionate about creating modern, responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left lg:text-left">
            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 items-center md:items-start lg:items-start">

              <a
                href="#home"
                className="
                text-slate-600 dark:text-slate-300
                hover:text-cyan-500
                transition duration-300
                "
              >
                Home
              </a>

              <a
                href="#about"
                className="
                text-slate-600 dark:text-slate-300
                hover:text-cyan-500
                transition duration-300
                "
              >
                About
              </a>

              <a
                href="#skills"
                className="
                text-slate-600 dark:text-slate-300
                hover:text-cyan-500
                transition duration-300
                "
              >
                Skills
              </a>

              <a
                href="#projects"
                className="
                text-slate-600 dark:text-slate-300
                hover:text-cyan-500
                transition duration-300
                "
              >
                Projects
              </a>

              <a
                href="#contact"
                className="
                text-slate-600 dark:text-slate-300
                hover:text-cyan-500
                transition duration-300
                "
              >
                Contact
              </a>

            </div>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left lg:text-left">
            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Technologies
            </h3>

            <div className="flex flex-col gap-3 items-center md:items-start lg:items-start">

              <p className="text-slate-600 dark:text-slate-300">
                React.js
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                Tailwind CSS
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                JavaScript
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                Node.js
              </p>

            </div>
          </div>

          {/* Column 4 */}
          <div className="text-center md:text-left lg:text-left">
            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Connect
            </h3>

            <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">

              <a
                href="https://github.com/hasan-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-3xl

                text-slate-700 dark:text-slate-300

                hover:text-cyan-500
                hover:scale-125
                hover:-translate-y-1

                transition duration-300
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

                text-slate-700 dark:text-slate-300

                hover:text-cyan-500
                hover:scale-125
                hover:-translate-y-1

                transition duration-300
                "
              >
                <FaLinkedin />
              </a>

            </div>

            <p className="mt-6 text-slate-600 dark:text-slate-300">
              📧 hasan4cd@gmail.com
            </p>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              📍 Karachi, Pakistan
            </p>

          </div>

        </div>

        {/* Bottom Footer */}
        <div
          className="
          mt-14
          pt-6

          border-t border-slate-200 dark:border-white/10

          text-center
          text-slate-600 dark:text-slate-400
          "
        >
          <p>
            © {new Date().getFullYear()} Hasan Raza | All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;