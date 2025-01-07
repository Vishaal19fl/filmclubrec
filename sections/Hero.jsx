'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee'
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
      {/* Add your background layers, circles, arcs, etc. */}

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
      </motion.div>
    </motion.div>

    {/* Marquee Section */}
    <div className="marquee-section">
      <Marquee className="marquee" autoFill speed={20}>
        <div className="gallery">
          {['/filmevents3.png', '/moviedisc1.png', '/filmworkshops1.png'].map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt=""
                width={300}
                height={320}
                style={{ marginTop: "80px" }}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>

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
        animation: rotate 8s linear infinite; /* Rotate every 8 seconds */
      }
    `}</style>
  </section>
);

export default Hero;
