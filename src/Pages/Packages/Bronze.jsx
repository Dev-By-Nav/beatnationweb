import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';
import package1img from '../../assets/Packages/package1.jpg'
import Footer from '../../Components/Footer';

function Bronze() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Beat Nation Petite</h1>


      <div className='flex justify-center'>

      <img src={package1img} alt="" className="w-full h-auto px-20" />
      </div>

      
      <div className='flex flex-col items-center justify-center p-8'>
          <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">What's Included</h1>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={package1img} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

            <ul className='text-bn-gold text-left'>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced DJ</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced Host</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Professional Sound System</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Turntables & Mixer</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Computer Controlled Moving Lights</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Gloss Pillars</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Haze Machine (Dependent on Venue Allowance)</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">£10m Public Liability Insurance</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">PAT Testing Certificate</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Tailored Music for your Event Stage (Optional Extra)</li>
            </ul>
          </div>
        </div>


      <div className='flex flex-col pt-10'>
        

        <Footer />
      </div>
    </div>
  );
}

export default Bronze;
