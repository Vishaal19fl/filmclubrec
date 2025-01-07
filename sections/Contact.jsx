'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const ContactForm = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-6`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="w-full max-w-[800px] flex flex-col p-10 rounded-[32px] relative bg-gray-100"
      >
        <h3 className="font-bold sm:text-[36px] text-[28px] sm:leading-[42px] leading-[38px] text-gray-700 mb-8 text-center">
         Contact Us
        </h3>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-4 rounded-[16px] bg-white border-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Roll Number"
            className="p-4 rounded-[16px] bg-white border-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-[16px] bg-white border-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 h-[150px] rounded-[16px] bg-white border-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 p-4 rounded-[16px] bg-red-500 text-white font-bold hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,1)] transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,1)]"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  </section>
);

export default ContactForm;
