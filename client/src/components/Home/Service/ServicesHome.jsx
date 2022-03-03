import React from "react";
import './ServicesHome.css'

function ServicesHome({services}) {
  // console.log(services)
  // /favicon.ico
  return (
    <>
      <h3 className='services-h3'>услуги</h3>
      <div className="review-container" id='Reviews'>
      <div className="review-options">
      <div className="background">
    <div className="container">
      <div className="panel pricing-table">
        
        {services.length ? services.map(el=>{
          return (
          <div className="pricing-plan">
          <img src={el.img} alt="" class="pricing-img"/>
          <h2 className="pricing-header">{el.name}</h2>
          <ul className="pricing-features">
            <li className="pricing-features-item">{el.description}</li>
            <li className="pricing-features-item">{el.price} ₽.</li>
          </ul>
        </div>
          )

        }) : <></>}

      </div>
    </div>
   </div>
   </div>
  </div>
   </>
  );
}

export default ServicesHome;
