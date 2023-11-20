import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';


function Error() {
  return (
    <div className='bg-bn-navy h-screen'>
      <Navbar />
      <div className='flex justify-center items-center text-white flex-col py-10'>
        <h1 className=' font-montserrat font-semibold text-xl pb-6'>We know your excited to have us at your event!</h1>
        <p className=' font-raleway font-medium text-lg'>But seems we've ran into a slight problem, please return to a different page</p>
      </div>

      <Footer />
    </div>
  )
}

export default Error