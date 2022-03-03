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
import './HomeCardCurrent.css';
import wifi2 from '../../../img/wifi2.svg';
import kitchen from '../../../img/kitchen.svg';
import bed from '../../../img/bed.svg';
import tv from '../../../img/tv.svg';
import shower from '../../../img/shower.svg';
import pol from '../../../img/pol.svg';
SwiperCore.use([Autoplay]);

function HomeCardCurrent(props) {
  const { id } = useParams()

  const { homes } = useSelector(state => state.homesReducer)
  const currentHome = homes.find(el => el.id === +id)
  return (
    // div className='allHomes_box'>
    //   <div className='allHomes_info'>
    //     <div className='allHomes_title'>
    //       <h5>{currentHome?.name.toUpperCase()}</h5>
    //       <h6>{currentHome?.price} &#8381;</h6>
    //     </div>
    //   </div>
    <div className="app-container">
      <div className='homesCard_box'>
        <div className='homesCard-header-container'>
          <div className='homesCard-header'>
            <div></div>
            <div className='nameHome-card'><span className='nameHome-span'>Коттедж: "{currentHome?.name}"</span></div>
            <div className='descHome-card'><span>{currentHome?.description}</span></div>
            <div className='priceHome-card'><span>Стоимость за 1 ночь {currentHome?.price} руб.</span></div>
            <div className='optionsHome-card'>
              <div className='squareHome-options'><img className='squareHome-logo' src={wifi2} alt='' /><span className='text-options'>Wi-Fi</span></div>
              <div className='squareHome-options'><img className='squareHome-logo' src={bed} alt='' /><span className='text-options'>Двуспальная кровать</span></div>
              <div className='squareHome-options'><img className='squareHome-logo' src={tv} alt='' /><span className='text-options'>Телефизор</span></div>
              <div className='squareHome-options'><img className='squareHome-logo' src={shower} alt='' /><span className='text-options'>Душ</span></div>
              <div className='squareHome-options'><img className='squareHome-logo' src={pol} alt='' /><span className='text-options'>Теплый пол</span></div>
              <div className='squareHome-options'><img className='squareHome-logo' src={kitchen} alt='' /><span className='text-options'>Посуда</span></div>
            </div>
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
    </div>
  );
}

export default HomeCardCurrent;
