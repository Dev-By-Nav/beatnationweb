import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-bn-navy  py-6 text-bn-gold">
      <hr style={{ border: '1px solid #d4af37', margin: '0 0' }} />
      {/* For mobile, stack the sections below each other */}
      <div className="flex flex-col sm:flex-row pl-10 md:pl-20 pt-4">
        <div className="footer-section mb-4 sm:mb-0 md:w-1/3">
          {/* Content for the first section */}
          <h1 className=" font-semibold pb-3 white">Beat Nation Entertainment</h1>
          <p>Phone: 07742007295 </p>
          <p>Email: info@beatnationentertainment.com</p><br/>
        </div>
        
        <div className="footer-section mb-4 sm:mb-0 w-1/3 md:ml-auto  md:pl-48">
          {/* Content for the second section */}
          <h1 className=""></h1>
          <a href='https://www.instagram.com/beatnationent/' target="_blank" rel="noopener noreferrer">
            <span className="inline-block align-middle text-4xl pr-2 py-3">
              <FaInstagram />
            </span>
          </a>
          <a href='https://www.tiktok.com/@beatnationent' target="_blank" rel="noopener noreferrer">
            <span className="inline-block align-middle text-3xl pl-2 pr-2 py-3">
              <FaTiktok />
            </span>
          </a>
          <a href='https://api.whatsapp.com/send?phone=447742007295' target="_blank" rel="noopener noreferrer">
            <span className="inline-block align-middle text-4xl pl-2 py-3">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>

      <div className="text-center mt-16 text-sm">
        <p>
          Web Design & Development by Bold Edge Media |{' '}
          <a href='https://www.instagram.com/boldedgemedia/' target="_blank" rel="noopener noreferrer">
            <span className="inline-block align-middle text-xl">
              <FaInstagram />
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
