import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const teamMembers = [
  { 
    name: 'Alice Johnson', 
    img: '/vishaal2.png', 
    links: {
      instagram: 'https://instagram.com/alice',
      linkedin: 'https://linkedin.com/in/alice'
    }
  },
  { 
    name: 'John Smith', 
    img: '/vishaal2.png', 
    links: {
      instagram: 'https://instagram.com/john',
      linkedin: 'https://linkedin.com/in/john'
    }
  },
  { 
    name: 'Emma Brown', 
    img: '/vishaal2.png', 
    links: {
      instagram: 'https://instagram.com/emma',
      linkedin: 'https://linkedin.com/in/emma'
    }
  },
  { 
    name: 'Michael Lee', 
    img: '/vishaal2.png', 
    links: {
      instagram: 'https://instagram.com/michael',
      linkedin: 'https://linkedin.com/in/michael'
    }
  },
  { 
    name: 'Sophia Davis', 
    img: '/vishaal2.png', 
    links: {
      instagram: 'https://instagram.com/sophia',
      linkedin: 'https://linkedin.com/in/sophia'
    }
  }
];

const OurTeam1 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.h2
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center text-[36px] sm:text-[48px] font-bold text-white mb-[32px]"
      >
        Our Executives
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-[24px]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={fadeIn('up', 'tween', index * 0.2, 1)}
            className={`relative flex flex-col justify-center items-center 
              ${index === 2 ? 'w-[300px] h-[370px]' : 'w-[240px] h-[320px]'} 
              hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={member.img}
              alt={member.name}
              className={`w-full h-full object-cover rounded-lg shadow-xl ${index === 2 ? 'shadow-2xl' : ''}`}
            />
            <div className="mt-4 flex gap-3">
              <a 
                href={member.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href={member.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default OurTeam1;
