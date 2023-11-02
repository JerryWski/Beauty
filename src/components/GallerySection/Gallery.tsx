import React from 'react';
import './swiper.css';
import './Gallery.css';
// import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id='gallery' className='gallery-section'>
      <p className='gallery-section-bg'>galeria</p>
      <div className='gallery-welcome'>
        <h2 className='gallery-welcome-header'>
          Każdy zabieg, to nowa histora
        </h2>
        <p className='gallery-welcome-text'>
          Odwiedź nas na&nbsp;
          <a
            className='gallery-welcome-text_link'
            href='https://www.instagram.com/p/CoFEx07NS2H/'
          >
            Instagramie
          </a>
          &nbsp;i&nbsp;
          <a
            className='gallery-welcome-text_link'
            href='https://www.facebook.com/SalonKosmetykiiKosmetologiiEstetycznej/'
          >
            Facebooku
          </a>
        </p>
      </div>

      <div className='gallery-container'>
        <Swiper
          className='mySwiper'
          effect='coverflow'
          breakpoints={{
            220: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            950: {
              slidesPerView: 4,
            },
            1250: {
              slidesPerView: 4,
            },
            
          }}
          slidesPerView={1}
          loop={true}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <div className='swiper mySwiper'>
            <div className='swiper-wrapper'>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img2.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img3.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img4.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img5.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img6.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img7.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img8.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='../../public/gallery-img9.png' alt='beauty-salon' />
                </div>
              </SwiperSlide>
            </div>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-pagination'></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
