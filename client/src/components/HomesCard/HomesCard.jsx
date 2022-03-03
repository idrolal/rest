import React from 'react';
import { router } from '../../utils/utils';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomesCard.css'
import RatingHomes from '../RatingHomes/RatingHomes';
SwiperCore.use([Autoplay]);


export const HomesCard = ({ homes }) => {

  return (
    <div className='allHomes_box'>
      <div className='allHomes_info'>
        <div className='allHomes_title'>
          <h4>{homes?.name.toUpperCase()}</h4>
          <h6>{homes?.price} &#8381;</h6>
          <RatingHomes id={homes} />
        </div>
        <div className='allHomes_description'>{homes?.description}</div>
        {/* <div className='allHomes_reservBtn'> */}
        {/* <Link key={homes.id} to={`${reactRouter.user.booking}/${homes.id}`} className='allHomes_reservBtn_font'>Перейти к бронированию</Link> */}
        {/* <Link key={homes.id} to={`${reactRouter.user.house}/${homes.id}`} className='allHomes_reservBtn_font'>Перейти к бронированию</Link> */}
        {/* </div> */}

      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
        }}
        speed={3000}
        // pagination={{ clickable: true }}
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

