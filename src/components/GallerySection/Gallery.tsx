import React from 'react';
import './swiper.css';
import './Gallery.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

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
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor={true}
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
          slidesPerView={'auto'}
          loop={true}
          spaceBetween={10}
          navigation={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Navigation, EffectCoverflow]}
        >
          <div className='swiper mySwiper'>
            <div className='swiper-wrapper'>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img2.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img3.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img4.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img5.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img6.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img7.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img8.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img9.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img10.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img11.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img12.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img13.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img14.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img15.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img16.webp' alt='beauty-salon' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <img src='/gallery-img17.webp' alt='beauty-salon' />
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
