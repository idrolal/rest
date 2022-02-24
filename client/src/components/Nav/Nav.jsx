import React from 'react';
import { Link } from "react-router-dom";
import { reactRouter } from '../../utils/utils.js'

import './Nav.css';

function Nav(props) {
  return (
    <div className="header-container">
      <Link to={reactRouter.user.homepage} className="header-logo">
        <img src={require("../../img/biodegradable.png")} alt="" />
      </Link>
      {/* <span className="header-logo-text">ECOHOME</span> */}
      <div className="header-parent">
        <Link to={reactRouter.user.about} className="nav-text">О нас</Link>
        <Link to={reactRouter.user.booking} className="nav-text-booking">Бронировать</Link>
        <Link to={reactRouter.user.house} className="nav-text">Домики</Link>
        <Link to={reactRouter.user.services} className="nav-text">Услуги</Link>
        <Link to={reactRouter.user.contacts} className="nav-text">Контакты</Link>
      </div>
    </div>
  );
}

export default Nav;
