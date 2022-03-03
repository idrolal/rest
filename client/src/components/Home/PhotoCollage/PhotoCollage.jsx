import React, {useState, useEffect}from "react";
import "./PhotoCollage.css";
import aaa from '../../../img/aaa.webp';
import ServicesList from "../../ServicesList/ServicesList";

function PhotoCollage({services}) {

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
    </>
  );
}

export default PhotoCollage;
