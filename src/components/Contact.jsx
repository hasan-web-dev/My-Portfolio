import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <section id="contact" className="px-8 md:px-16 py-20">
            <h2 className="text-4xl font-bold mb-14 text-center">Contact Me</h2>

            <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: false }}
             className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8"
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
                        className="bg-white dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-gray-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400
                        focus:border-cyan-400
                        transition-all duration-300"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        className="bg-white/80 dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-slate-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none
                        
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400
                        
                        focus:border-cyan-500
                        transition-all duration-300"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        name="message"
                        required
                        className="bg-white dark:bg-black/40
                        text-gray-800 dark:text-white
                        border border-gray-300 dark:border-white/10
                        rounded-xl px-5 py-4 outline-none
                      
                        placeholder:text-gray-500
                        dark:placeholder:text-gray-400
                      
                        focus:border-cyan-400
                        transition-all duration-300"
                    ></textarea>

                    <button type="submit" className="bg-cyan-400 text-black py-4 rounded-2xl font-bold cursor-pointer hover:bg-cyan-500 transition">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    )
}

export default Contact
