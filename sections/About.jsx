'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="show"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Our Film Club" textStyles="text-center font-fight" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Gentlemen, Welcome to <span className="font-extrabold text-white">Film Club</span>, 
        where we celebrate the art of storytelling through cinema. Our club is a 
        haven for movie enthusiasts, a place to explore the magic of films, and an 
        opportunity to connect with like-minded individuals who share a passion for 
        the big screen.

        We host regular movie screenings, 
        engaging discussions, and hands-on workshops to bring out the filmmaker 
        in you. So, step into the world of cinema, and let’s create unforgettable 
        moments together.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
