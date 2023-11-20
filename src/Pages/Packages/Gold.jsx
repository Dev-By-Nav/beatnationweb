import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';
import package3img from '../../assets/Packages/package3.jpg'
import img1 from '../../assets/Gallery/image1.jpeg';
import img2 from '../../assets/Gallery/image2.jpeg';
import img3 from '../../assets/Gallery/image3.jpeg';
import img4 from '../../assets/Gallery/image4.jpeg';
import img5 from '../../assets/Gallery/image5.jpeg';
import img6 from '../../assets/Gallery/image6.jpeg';
import img7 from '../../assets/Gallery/image7.jpeg';
import img8 from '../../assets/Gallery/image8.jpeg';
import Footer from '../../Components/Footer';

function Gold() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Gold</h1>


      <div className='flex justify-center'>

      <img src={package3img} alt="" className="w-full h-auto px-20" />
      </div>

      
      <div className='flex flex-col items-center justify-center p-8'>
          <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">What's Included</h1>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={package3img} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

            <ul className='text-bn-gold text-left'>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced DJ</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced Host</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Professional Sound System</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Turntables & Mixer</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Computer Controlled Moving Lights</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Chrome Truss Pillars</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Truss Covers</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Haze Machine (Dependent on Venue Allowance)</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">DJ Booth with Initals</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Wireless Microphone</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">3 x 1.5m LED Video Screen</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">2 x 2m Side Returns</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">8 x 4 x 1ft Dressed DJ Stage</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Confetti Blast</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">£10m Public Liability Insurance</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">PAT Testing Certificate</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Tailored Music for your Event Stage</li>
            </ul>
          </div>
        </div>


      <div className='flex flex-col pt-10'>
        

        <Footer />
      </div>
    </div>
  );
}

export default Gold;
