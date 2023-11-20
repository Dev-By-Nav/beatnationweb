import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/dholvideo.mp4';

import img23 from '../../assets/Gallery/image23.jpeg';

import Footer from '../../Components/Footer';


function Band() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Band Baaja</h1>


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
          <h1 className="text-xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">Looking For A Band ?</h1>
          <p className='font-raleway text-bn-gold text-center text pb-8'>
           We have you covered, for a full band or just dhol. For enterances, parties, receptions, alongside DJ's or anything else.<br/> Send us a message today.
          </p>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={img23} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

           
          </div>
        </div>


      <div className='flex flex-col pt-10'>
        

        <Footer />
      </div>
    </div>
  );
}

export default Band;
