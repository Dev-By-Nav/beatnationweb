import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/silvervideo.mp4';
import package2img from '../../assets/Packages/package2.jpg'

import Footer from '../../Components/Footer';

function Silver() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Beat Nation Essentials</h1>


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
          <h1 className="text-xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">What's Included</h1>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={package2img} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

            <ul className='text-bn-gold text-left'>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced DJ</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced Host</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Professional Sound System</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Turntables & Mixer</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Computer Controlled Moving Lights</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Chrome Truss Pillars</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Truss Covers Pillars</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Bespoke Printed DJ Booth</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">6 x 4m Backdrop (If Required)</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Haze Machine (Dependent on Venue Allowance)</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">£10m Public Liability Insurance</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">PAT Testing Certificate</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Tailored Music for your Event Stage (Optional Extra)</li>
            </ul>
            
          </div>
        </div>


      <div className='flex flex-col pt-10'>
        

        <Footer/>
      </div>
    </div>
  );
}

export default Silver;
