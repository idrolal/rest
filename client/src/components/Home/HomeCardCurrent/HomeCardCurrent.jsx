import React, { useEffect } from 'react';
import { router } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CalendarBook from '../../CalendarBook/CalendarBook';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../HomesCard/HomesCard.css'
SwiperCore.use([Autoplay]);

function HomeCardCurrent(props) {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { homes } = useSelector(state => state.homesReducer)
  const currentHome = homes.find(el => el.id === +id);
  return (
    <div className='allHomes_box'>
      <div className='allHomes_info'>
        <div className='allHomes_title'>
          <h5>{currentHome?.name.toUpperCase()}</h5>
          <h6>{currentHome?.price} &#8381;</h6>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
        }}
        speed={4000}
        // pagination={{ clickable: true }}
        className='swiper_style'
      >
        {
          currentHome?.ImageHouses?.map(img =>
            <SwiperSlide className='swiper_style' style={{ backgroundImage: `url(${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name})` }} key={img.name} >
              <div></div>
            </SwiperSlide>
          )
        }
      </Swiper>

      <CalendarBook currentHome={currentHome} />

    </div>
  );
}

export default HomeCardCurrent;
