import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';


import img3 from '../../assets/Gallery/image3.jpeg';

import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';


function Custom() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Custom Package</h1>


      <div className='flex justify-center'>

        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          width="75%"
          height="75%"
          className="video-background"
        />
      </div>

      
      <div className='flex flex-col items-center justify-center p-8'>
          <h1 className="text-xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">Want something different ?</h1>

          <p className='font-raleway text-white text pb-8'>
            Want to bring a diiferent vision to life, send us a message through our form, send us a email or give us a call to share your ideas with our team to build the ultimate package, however big or small. Exactly how you want it.
          </p>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={img3} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

          </div>

          <Link to='/contact-us'>
            <button className='hover:scale-105 bg-bn-gold text-bn-navy font-semibold font-montserrat py-2 px-4 rounded'>
              Send Us A Message
            </button>
          </Link>

        </div>


      <div className='flex flex-col pt-10'>
        
        
        <Footer />
      </div>
    </div>
  );
}

export default Custom;
