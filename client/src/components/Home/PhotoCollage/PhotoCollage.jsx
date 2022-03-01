import React, {useState, useEffect}from "react";
import "./PhotoCollage.css";
import aaa from '../../../img/aaa.webp';


function PhotoCollage(props) {
  
  return (
    <>
          <div className="flex">
    <div className='about-photo'>
    <div className='about-photo-1'><div className='photo-text'><span>ВСЕГО 2 ЧАСА ЕЗДЫ ОТ ПЕТЕРБУРГА</span></div></div>
    </div>
    <div className='about-photo'>
    <div className='about-photo-2'><div className='photo-text'><span>БЕРЕГ ОЗЕРА И ЧИСТЫЙ ВОЗДУХ</span></div></div>
    </div>
    <div className='about-photo'>
    <div className='about-photo-3'><div className='photo-text'><span>КОМФОРТ ГОРОДСКОГО ОТЕЛЯ НА ПРИРОДЕ</span></div></div>
    </div>
    </div>
    <div className="review-container" id='Reviews'>
    <div className="review-picture"><img src={aaa} alt="" /></div>
    <div className="review-options">
      <h3 className='review-h1' >услуги</h3>
      <p className='review-text'>
      {/* <p>О комплексе<span className='text-span'>eco</span><span className='text-p'>PARK</span>?</p> */}
      Мы учли все детали, чтобы Вам было комфортно.⁣
На территории расположены:
- 2 видовые скандинавские сауны,
- 2 купели на дровах Dutchtub от Weltevree под открытым небом
- комната отдыха с панорамным остеклением, шезлонгами и живописными видами,
- зона отдыха на террасе, с тропическим душем и имитацией обливания из ведра
      </p>
      <button className='btn-about'><a href="#contacts">Подробнее</a></button>
      </div>
    </div>
    </>
  );
}

export default PhotoCollage;
