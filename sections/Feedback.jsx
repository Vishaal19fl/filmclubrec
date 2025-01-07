'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
  variants={fadeIn('right', 'tween', 0.2, 1)}
  className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
>
  
  
  {/* Profile Picture */}
  <div className="flex items-center mb-4">
    <img
      src="/vishaal3.jpg" // Replace with the actual image path
      alt="Samantha"
      className="w-[150px] h-[150px] object-cover rounded-[15px] border-[2px] border-white"
    />
  </div>
  
  {/* Name and Title */}
  <div>
    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
      Vishaal Krishna
    </h4>
    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
      Founder - Film Club REC
    </p>
  </div>

  {/* Feedback */}
  <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[45.6px] leading-[39.6px] text-white">
  “Film Club was started with the motive of bringing together like-minded individuals passionate about filmmaking. Find your team, collaborate on projects, and leave with a portfolio that will help you stand out in the real world.”
</p>


</motion.div>


      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="https://i.imgur.com/ZtlnPkf.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
       
    <img
      src="/roll1.png"
      alt="stamp"
      className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rotate-animation"
    />
<style jsx>{`
  /* Create the rotation animation */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Apply the animation to the image */
  .rotate-animation {
    animation: rotate 8s linear infinite; /* Rotate every 4 seconds */
  }
`}</style>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
