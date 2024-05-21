import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const imagePaths = [
  "/public/Main Slider/chains-desktop.jpg",
  "/public/Main Slider/earrings-desktop.jpg",
  "/public/Main Slider/Exchange.jpg",
  "/public/Main Slider/glamdays-desktop.png",
  "/public/Main Slider/rivaah-rb-desktop.jpg",
  "/public/Main Slider/rings-desktop.jpg",
  "/public/Main Slider/mangalsutra-desktop.jpg",
];

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds (3000ms = 3s)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <img src={path} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
