'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| FC Teaser" textStyles="text-center" />
      <TitleText
        title={(
          <>Watch the Film Club Teaser Here
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-full justify-center items-center"
      >
        <div
          className="relative"
          style={{
            height: '500px',
            width: '100%',
            maxWidth: '1100px', // Optional: Restrict max width for better responsiveness
            borderRadius: '15px',
            overflow: 'hidden', // Ensures iframe doesn't overflow the border radius
            boxShadow: '0 0 20px 5px rgba(15, 0, 0, 0.1), 0 0 30px 15px rgba(225, 0, 0, 0.2)', // Red neon glow effect
            position: 'relative', // To help with positioning the pseudo-element
          }}
        >
          {/* This will create the edge blur effect */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              borderRadius: '15px',
              background: 'rgba(0, 0, 0, 0.5)', // Adding a semi-transparent background to enhance the glow
              filter: 'blur(10px)', // Blurring the edges
              zIndex: -1, // Make sure it stays behind the iframe
            }}
          />
          
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9zUpIBV8Yqw?si=f6Wew4HisqbEG42u"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              borderRadius: '10px', // Inner border radius for the iframe
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
