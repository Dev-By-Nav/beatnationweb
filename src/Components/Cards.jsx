import React from 'react';
import img1 from '../assets/Gallery/image1.jpeg';
import img2 from '../assets/Gallery/image2.jpeg';
import img3 from '../assets/Gallery/image3.jpeg';
import img4 from '../assets/Gallery/image4.jpeg';
import img5 from '../assets/Gallery/image6.jpeg';
import img23 from '../assets/Gallery/image23.jpeg';


import package1img from '../assets/Packages/package1.jpg'
import package2img from '../assets/Packages/package2.jpg'
import package3img from '../assets/Packages/package3.jpg'
import package4img from '../assets/Packages/package4.jpg'

import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='flex flex-col w-full justify-center overflow-x-hidden py-10'>
      <Link to='/package1'>
        <div className="text-center py-10 hover:scale-105">
          <img src={package1img} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Beat Nation Petite</p>
          </div>
        </div>
      </Link>

      <Link to='/package2'>
        <div className="text-center py-10 hover:scale-105">
          <img src={package2img} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Beat Nation Essentials</p>
          </div>
        </div>
      </Link>

      

      <Link to='/package3'>
        <div className="text-center py-10 hover:scale-105">
          <img src={package3img} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Beat Nation Magestic</p>
          </div>
        </div>
      </Link>

      <Link to='/package4'>
        <div className="text-center py-10 hover:scale-105">
          <img src={package4img} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Beat Nation Cinematic</p>
          </div>
        </div>
      </Link>

      <Link to='/custom-package'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img4} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Custom Package</p>
          </div>
        </div>
      </Link>

      <Link to='/band'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img23} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Band Baaja</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
