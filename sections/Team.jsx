import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import React from 'react';
import { teamData } from '../constants/teamdata';

const teamMembers = [
  { 
    name: 'Alice Johnson', 
    img: '/rakhul1.png', 
    links: {
      instagram: 'https://instagram.com/alice',
      linkedin: 'https://linkedin.com/in/alice'
    }
  },
  { 
    name: 'John Smith', 
    img: '/shak1.png', 
    links: {
      instagram: 'https://instagram.com/john',
      linkedin: 'https://linkedin.com/in/john'
    }
  },
  { 
    name: 'Emma Brown', 
    img: '/vishaal1.png', 
    links: {
      instagram: 'https://instagram.com/emma',
      linkedin: 'https://linkedin.com/in/emma'
    }
  },
  { 
    name: 'Michael Lee', 
    img: '/vikram1.png', 
    links: {
      instagram: 'https://instagram.com/michael',
      linkedin: 'https://linkedin.com/in/michael'
    }
  },
  { 
    name: 'Sophia Davis', 
    img: '/sakthi1.png', 
    links: {
      instagram: 'https://instagram.com/sophia',
      linkedin: 'https://linkedin.com/in/sophia'
    }
  }
];



const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
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
                ${index === 2 ? 'w-[250px] h-[420px]' : 'w-[200px] h-[335px]'} 
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

        <button
          onClick={toggleModal}
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
        >
          View All Team Members
        </button>

        {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-4 sm:p-6 w-11/12 max-w-xs sm:max-w-md md:max-w-3/4 lg:max-w-5xl xl:max-w-6xl max-h-[60vh] overflow-auto relative">
      {/* Close Button */}
      <button
        onClick={toggleModal}
        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">All Team Members</h3>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm sm:text-base">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2 text-left">Domain</th>
              <th className="px-2 sm:px-4 py-2 text-left">Name</th>
              <th className="px-2 sm:px-4 py-2 text-left">Department</th>
              <th className="px-2 sm:px-4 py-2 text-left">Year</th>
              <th className="px-2 sm:px-4 py-2 text-left">Roll Number</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member, index) => (
              <React.Fragment key={index}>
                {member.isBreak ? (
                  <tr>
                    <td colSpan="7">
                      <hr className="my-2 sm:my-4 border-gray-300" />
                    </td>
                  </tr>
                ) : (
                  <tr className="border-t">
                    <td className="px-2 sm:px-4 py-2">{member.domain}</td>
                    <td className="px-2 sm:px-4 py-2">{member.name}</td>
                    <td className="px-2 sm:px-4 py-2">{member.department}</td>
                    <td className="px-2 sm:px-4 py-2">{member.year}</td>
                    <td className="px-2 sm:px-4 py-2">{member.rollNo}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={toggleModal}
        className="mt-4 px-4 sm:px-6 py-2 text-sm sm:text-base bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
)}


      </motion.div>
    </section>
  );
};

export default OurTeam;
