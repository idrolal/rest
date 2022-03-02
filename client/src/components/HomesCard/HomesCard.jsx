import React from 'react';
import { reactRouter } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { router } from '../../utils/utils';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomesCard.css'
SwiperCore.use([Autoplay]);


export const HomesCard = ({ homes }) => {

  return (
    <div className='allHomes_box'>
      <div>
        <div>{homes?.name}</div>
        <div>{homes?.description}</div>
        <div>{homes?.price}</div>
        <Link key={homes.id} to={`${reactRouter.user.booking}/${homes.id}`}>Перейти к бронированию</Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={10}
        slidesPerView={1}
        // navigation
        autoplay={{
          delay: 2000,
        }}
        speed={2000}
        pagination={{ clickable: true }}
        className='swiper_style'
      >
        {
          homes.ImageHouses?.map(img =>
            <SwiperSlide className='swiper_style' style={{ backgroundImage: `url(${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name})` }} key={img.name} >
              <div></div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

