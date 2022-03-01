import React from "react";
import './About.css';
import girl from '../../../img/girl.jpeg';

function About(props) {
  return (
    <>
    <div className="about-container" id="AboutUs">
    <div className="about-picture"><img src={girl} alt="" /></div>
    <div className="about-options">
      <h3 className='about-h1'>о нас</h3>
      <p className='about-text'>
      <p>Что такое <span className='text-span'>eco</span><span className='text-p'>PARK</span>?</p>
        Уединённое место для побега из шумных мегаполисов, возможность
        насладиться безмятежностью и прикоснуться к возвышенному. Безусловная,
        первозданная чистота природы и всеобъемлющая тишина. Даже в шторм на
        контрасте с силой природы ваши впечатления будут лишь ярче.
      </p>
      <button className='btn-about'><a href="#contacts">Как добраться</a></button>
      </div>
    </div>

    </>
  );
}

export default About;
