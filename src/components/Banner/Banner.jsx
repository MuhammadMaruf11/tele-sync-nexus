// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner1 from '/img/bg/banner-bg.webp'
import banner2 from '/img/bg/BGBG2.webp'
import banner3 from '/img/bg/BG-Buble.webp'

const Banner = ({ h1Title, textTheme, bannerDescription, buttons }) => {
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
                  <img loading="lazy" className="w-100" src={banner1} alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img loading="lazy" className="w-100" src={banner2} alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img loading="lazy" className="w-100" src={banner3} alt="banner" />
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
