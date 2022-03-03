import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import './Galeria.css';
import dom1 from '../../img/galeria1.webp';
import dom2 from '../../img/galeria2.jpeg';
import dom3 from '../../img/galeria3.webp';

function Galeria(props) {
  return (
    <>
    <div className="app-container-galeria">
    <div className="galeria-text">
      <h3 className="h3-text">Галерея</h3>
        <p>ВСЕГО 2 ЧАСА ЕЗДЫ ОТ ПЕТЕРБУРГА</p>
        <p>БЕРЕГ ОЗЕРА И ЧИСТЫЙ ВОЗДУХ</p>
        <p>КОМФОРТ ГОРОДСКОГО ОТЕЛЯ НА ПРИРОДЕ</p>
        </div>
      <div className="galeria-container">
       
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={dom1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dom2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dom3} />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
}

export default Galeria;
