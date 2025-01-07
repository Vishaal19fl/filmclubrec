'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} ${styles.xPaddings} sm:pl-16 pl-6 mt-[150px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
    >
      {/* Parallax background layers */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: 'url("/background-layer1.png") no-repeat center center',
          backgroundSize: 'cover',
          transform: 'translateZ(-2px) scale(3)', // Parallax effect
        }}
        whileInView={{ y: ['0px', '20px'] }}  // Consistent px units
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: 'url("/background-layer2.png") no-repeat center center',
          backgroundSize: 'cover',
          transform: 'translateZ(-1px) scale(2)',
        }}
        whileInView={{ y: ['0px', '10px'] }}  // Consistent px units
        viewport={{ once: false, amount: 0.25 }}
      />

      {/* Parallax circles */}
      <motion.div
        className="absolute z-0 top-[0%] lg:left-[20%] left-[0%] w-[300px] h-[300px] rounded-full bg-red-400 opacity-5"
        style={{
          transform: 'translateZ(-3px) scale(1.5)',
        }}
        whileInView={{ y: ['0px', '30px'] }}  // Consistent px units
        viewport={{ once: false, amount: 0.3 }}
      />
      <motion.div
        className="absolute z-0 top-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-red-500 opacity-10"
        style={{
          transform: 'translateZ(-4px) scale(2)',
        }}
        whileInView={{ y: ['0px', '20px'] }}  // Consistent px units
        viewport={{ once: false, amount: 0.3 }}
      />

      {/* Parallax arcs */}
      <motion.div
        className="absolute z-0 lg:top-[10%] -top-[12%] lg:left-[5%] -left-[16%] w-[500px] h-[500px] bg-transparent border-t-8 border-red-500 rounded-full opacity-20"
        style={{
          transform: 'translateZ(-5px) scale(1.2)',
        }}
        whileInView={{ y: ['0px', '15px'] }}  // Consistent px units
        viewport={{ once: false, amount: 0.3 }}
      />
     

      <div className="flex justify-center items-center flex-col relative z-10">
      <motion.h1
  variants={textVariant(1.1)}
  className={`${styles.heroHeading1} font-road text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9.5xl`}
>
  REC
</motion.h1>




        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} font-fight`}>
            <br />
          </h1>
          <h1 className={`${styles.heroHeading} font-fight`}>Film Club</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[40px] sm:-mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-[40px] z-[0] -top-[30px]" />

        <video
          src="/cinema.mp4"  // Replace with your video path
          alt="hero_video"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-[40px] z-10 relative"
          autoPlay
          loop
          playsInline
          muted
        />

<a href="#explore">
  <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
    <img
      src="/roll1.png"
      alt="stamp"
      className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rotate-animation"
    />
  </div>
</a>

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
  </section>
);

export default Hero;
