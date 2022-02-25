import React from 'react';
import { NavLink } from "react-router-dom";
import { reactRouter } from '../../utils/utils.js'
import phone from "../../img/phone.svg";
import logo from "../../img/logo.svg";
import 'animate.css';

import './Nav.css';

function Nav(props) {
  return (
    <div className="header-container animate__animated animate__headShake">
      <NavLink to={reactRouter.user.homepage} className="header-logo">
        <img src={logo} alt="" />
      </NavLink>
      {/* <span className="header-logo-text">ECOHOME</span> */}
      <div className="header-parent">
        <NavLink to={reactRouter.user.booking} className={({isActive}) =>`${isActive ? 'nav-text-booking_none' : 'nav-text-booking'}`}>Бронировать</NavLink>
        <NavLink to={reactRouter.user.about} className={({isActive}) =>`${isActive ? '' : 'nav-tex'}`}>О нас</NavLink>
        <NavLink to={reactRouter.user.house} className={({isActive}) =>`${isActive ? '' : 'nav-tex'}`}>Домики</NavLink>
        <NavLink to={reactRouter.user.services} className={({isActive}) =>`${isActive ? '' : 'nav-tex'}`}>Услуги</NavLink>
        <NavLink to={reactRouter.user.contacts} className={({isActive}) =>`${isActive ? '' : 'nav-tex'}`}>Контакты</NavLink>

        <div className="header-contacts-logo">
        <img src={phone} alt="" />
        <a href="tel:+79218683650" className="header-contacts-link">
              +7 (921) 868-36-50
            </a>
        </div>

      </div>
    </div>
  );
}

export default Nav;
