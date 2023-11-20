// import React from 'react'
// import image from '../assets/logo2.png'

// function About() {
//   return (
//     <div className="flex flex-col items-center justify-center  p-8">
//   <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">About Us</h1>
//   <div className="flex flex-col md:flex-row items-center justify-center">
//     <div className="md:pr-4">
//       <img
//         className="rounded-lg shadow-md h-60 w-auto"
//         src={image}
//         alt="Your Image"
//       />
//     </div>
//     <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left">
//       <p className='font-raleway text-white'>
//       At Beat Nation, we live and breathe the rhythm of Punjabi beats, and our passion is to infuse your parties and weddings with the pulsating energy of the vibrant Punjabi music scene. Committed to delivering unparalleled music services, we take pride in transforming your ideas into a sonic reality. Whether you envision a simple, intimate gathering or a grand, production-scale celebration, Beat Nation has you covered. We understand the heartbeat of Punjabi culture and bring it to life through our music services. Join us in creating unforgettable moments where every beat resonates with the joy and spirit of your special occasions.
//       </p>
//     </div>
//   </div>
// </div>
//   )
// }

// export default About


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/logo3.png';

function About() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('about-section').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsAnimated(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="about-section" className="flex flex-col items-center justify-center p-8">
     <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">About Us</h1>


      <div className="flex flex-col md:flex-row items-center justify-center">

        <motion.div
          initial="hidden"
          animate={isAnimated ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="md:pr-4"
        >
          <img
            className="rounded-lg shadow-md sm:h-96 h-721 w-auto"
            src={image}
            alt="Your Image"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isAnimated ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left"
        >
          
          <p className='font-raleway text-bn-gold'>
            At Beat Nation, we live and breathe the rhythm of music, and our passion is to infuse your parties and weddings with the pulsating energy. We are Committed to delivering unparalleled music services, we take pride in transforming your ideas into a sonic reality. Whether you envision a simple, intimate gathering or a grand, production-scale celebration, Beat Nation has you covered. We understand the heartbeat of music and bringing it to life . Join us in creating unforgettable moments where every beat resonates with the joy and spirit of your special occasions.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default About;

