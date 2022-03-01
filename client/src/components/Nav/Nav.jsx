import React from 'react';
import { NavLink } from "react-router-dom";
import { reactRouter } from '../../utils/utils.js'
import insta from "../../img/insta.svg";
import logo from "../../img/logo.svg";
// import 'animate.css';
import './Nav.css';


function Nav(props) {
  return (
    <>
    <div className="nav-123">
    <div className="nav-main">
  <NavLink to={reactRouter.user.homepage} className="header-logo">
    <img src={logo} alt="" />
  </NavLink>
  
  <div className="header-logo-text2">
  <NavLink to={reactRouter.user.homepage} className="header-logo-park">
      <span className='header-logo-text'>eco</span>PARK
      </NavLink>
      </div>
      <div className="header-contacts-logo">
        {/* <img src={insta} alt="" /> */}
        <a href="tel:+79218683650" className="header-contacts-link">
              8 (812) 300 0 300
            </a>
        </div>
        </div>
    </div>
      <div className="header-container">
      <div className="header-parent animate__animated animate__headShake">
        <NavLink to={reactRouter.user.booking} className={({isActive}) =>`${isActive ? 'nav-text-booking_none' : 'nav-text-booking'}`}>Бронировать</NavLink>
        <a className='nav-text' href="#AboutUs">О нас</a>
        <NavLink to={reactRouter.user.house} className={({isActive}) =>`${isActive ? '' : 'nav-text'}`}>Домики</NavLink>
        <a className='nav-text' href="#Reviews">Услуги</a>
        <NavLink to={reactRouter.user.contacts} className={({isActive}) =>`${isActive ? '' : 'nav-text'}`}>Контакты</NavLink> 
        {localStorage.getItem('token') && <NavLink to={reactRouter.admin.logout} className='nav-text'>Выйти</NavLink>}
     
     
      </div>
    </div>
    
    </>
  );
}

export default Nav;
