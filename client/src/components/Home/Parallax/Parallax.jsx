import React from 'react';
import Typical from "react-typical";
import fon from "../../../img/fon.jpeg";
import './Parallax.css'

function Parallax(props) {
  return (
    <>
          <div class="parallax-container">
      <div class="parallax"><img src={fon} alt=''/></div>
      <div class="parallax-text">
      <p>Подарите <br></br>незабываемые выходные в загородном доме</p>
      <div class="parallax-text-2">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Идеальный подарок на 23 февраля",
                    1000,
                    "Идеальный подарок на 8 марта",
                    1000,
                    "Идеальный подарок на любой случай",
                    1000,
                  ]}
                />
                </div>
                <button className='bnt-buy'>  <a href="/boking"><span>БРОНИРОВАТЬ</span></a></button>






                
                </div>
    </div>
    </>
  );
}

export default Parallax;
