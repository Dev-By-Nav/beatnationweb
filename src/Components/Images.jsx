import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../Content';

function Images() {
  return (
    <div className='max-w-[90vw] mx-auto columns-1 xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 py-6'>
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className='hover:scale-105 transform-gpu'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Images;
