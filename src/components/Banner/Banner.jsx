// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner1 from '/img/bg/slider-1.avif'
import banner2 from '/img/bg/slider-2.webp'
import banner3 from '/img/bg/slider-3.avif'

const Banner = () => {
  return (
    <div className="banner-area ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
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
                  <img src={banner1} alt="banner" lazyload width={`100%`} height={600} preload="auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img src={banner2} alt="banner" lazyload width={`100%`} height={600} preload="auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img src={banner3} alt="banner" lazyload width={`100%`} height={600} preload="auto" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
