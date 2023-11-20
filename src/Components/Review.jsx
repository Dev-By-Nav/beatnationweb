import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Review() {
  return (
    <div className="h-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#d4af37',
          '--swiper-pagination-color': '#d4af37',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-80 h-128 bg-bn-navy"
      >
        <SwiperSlide className="text-center text-xl bg-bn-navy flex justify-center items-center flex-col ">
          <h1 className='text-2xl text-bn-gold font-montserrat'>Review #1 Event Type</h1>
          <p className=' text-base w-3/4 text-bn-gold font-raleway'>" Thank you for making my jago party at sitara hall amazing 🤩 
The lighting provided by yourself created a fantastic ambience to the whole venue ! 
Most importantly the djing and entertainment provided made my jago party pop, all my friends and family will not stop saying how amazing and fantastic the dj set and entertainment was🔥🤩 

I will highly recommend yourself, great host too!"</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center text-xl bg-bn-navy flex justify-center items-center flex-col">
          <h1 className="text-2xl text-bn-gold font-montserrat">Review #2 Event Type</h1>
          <p className="text-base w-3/4 text-bn-gold font-raleway">"Hey Sunny, a massive thank you for everything. You did an amazing job - eternally grateful. Everything was on point. From the music, your ability to get the crowd going, hosting skills, decor, dancefloor - attention to detail. Really was happy. Thank you so much."</p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl bg-bn-navy flex justify-center items-center flex-col">
          <h1 className="text-2xl w-1/3 text-bn-gold font-montserrat whitespace-nowrap">Review #3 Event Type</h1>
          <p className="text-base w-3/4 text-bn-gold font-raleway ">"Hi just wanted to say we saw you guys over the. Weekend at Hilton and it’s the 1st time we have seen a dj  who can speak Panjabi so good on the mic and even the music and mixes was great."</p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Review;