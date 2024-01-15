// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner1 from '/img/bg/banner-bg.jpg'
import banner2 from '/img/bg/login.webp'
import banner3 from '/img/bg/login.png'

function Banner({ h1Title, textTheme, bannerDescription, buttons }) {
  return (
    <div className="banner-area">
      {/* <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Zoom, Autoplay, Pagination, Navigation]}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-100" src={banner1} alt="banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-100" src={banner2} alt="banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-100" src={banner3} alt="banner" />
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default Banner;
