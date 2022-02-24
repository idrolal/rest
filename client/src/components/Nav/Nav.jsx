import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav(props) {
  return (
    <nav className="header-container">
      <Link to={"/"} className="header-logo">
        <img src={require("../../img/biodegradable.png")} alt="" />
      </Link>
      {/* <span className="header-logo-text">ECOHOME</span> */}
      <div className="header-parent">
        <Link to="/about" className="nav-text">О нас</Link>
        <Link to="/booking" className="nav-text-booking">Бронировать</Link>
        <Link to="/house" className="nav-text">Домики</Link>
        <Link to="/services" className="nav-text">Услуги</Link>
        <Link to="/contacts" className="nav-text">Контакты</Link>
      </div>
    </nav>
  );
}

export default Nav;
