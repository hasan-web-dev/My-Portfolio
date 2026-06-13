import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <section id="contact" className="px-3 sm:px-5 md:px-16 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Contact Me</h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
                className="max-w-3xl mx-auto bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl"
            >
                <form
                    action="https://formsubmit.co/hasan4cd@gmail.com"
                    method="POST"
                    className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                        className="w-full bg-white dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-gray-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/30
                        transition-all duration-300"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        className="w-full bg-white/80 dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-slate-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/30
                        transition-all duration-300"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        name="message"
                        required
                        className="w-full bg-white dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-gray-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none                      
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400                     
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/30
                        transition-all duration-300"
                    ></textarea>

                    <input
                        type="hidden"
                        name="_subject"
                        value="New Message from Portfolio Website"
                    />

                    <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                    />

                    <input
                        type="hidden"
                        name="_next"
                        value="https://hasanwebdeveloper.netlify.app/#contact"
                    />

                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-2xl font-bold cursor-pointer shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    )
}

export default Contact
