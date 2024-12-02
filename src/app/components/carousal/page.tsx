'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Navigation, Pagination, Autoplay
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Carousal() { 
    return(
        <div className={"w-full"}>
  <Swiper 
   modules={[Navigation, Pagination, Autoplay]} // Register modules
   loop={true}
   autoplay={{
     delay: 2000,
     disableOnInteraction: false,
   }}
   navigation // Enable navigation arrows
   pagination={{ clickable: true }} // Enable dots pagination
  >
    <SwiperSlide>
      <Image src="/7-eleven-ad.jpg" alt="Banner 1" width= {300} height={200} className="w-full rounded-lg" />
    </SwiperSlide>
    <SwiperSlide>
      <Image src="/7-eleven-ad-2.jpg" width= {300} height={200}  alt="Banner 2" className="w-full rounded-lg" />
    </SwiperSlide>
    <SwiperSlide>
      <Image src="/7-eleven-ad-3.jpg" width= {300} height={200}  alt="Banner 2" className="w-full rounded-lg" />
    </SwiperSlide>
    {/* Add more SwiperSlide components as needed */}
  </Swiper>
  </div>
);
}

