import React from 'react'
import Navbar from '../Components/Navbar'
import Images from '../Components/Images'
import Footer from '../Components/Footer';
import ReactPlayer from 'react-player';
import video1 from '../assets/silvervideo.mp4'
import video2 from '../assets/platinumvideo.mp4'
import video3 from '../assets/video.mp4'
import video4 from '../assets/tractorvideo.mp4'


function Gallery() {
  return (
    <div className='bg-bn-navy h-full'>
      <Navbar />

      <div className='flex justify-center p-5'>

        <ReactPlayer
          url={video1}
          playing={true}
          loop={true}
          muted={true}
          controls={true}
          width="45%"
          height="45%"
          className="video-background"
        />

        <ReactPlayer
          url={video2}
          playing={true}
          loop={true}
          muted={true}
          controls={true}

          width="45%"
          height="45%"
          className="video-background"
        />
        
      </div>

      <div className='flex justify-center p-5'>

        <ReactPlayer
          url={video3}
          playing={true}
          loop={true}
          muted={true}
          controls={true}

          width="45%"
          height="45%"
          className="video-background"
        />

        <ReactPlayer
          url={video4}
          playing={true}
          loop={true}
          muted={true}
          controls={true}

          width="45%"
          height="45%"
          className="video-background"
        />
        
      </div>

      <Images />
      <Footer />
    </div>
  )
}

export default Gallery