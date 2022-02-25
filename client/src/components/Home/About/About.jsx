import React from "react";
import './About.css';

function About(props) {
  return (
    <>
    <div className="about-container">
      <h1 className='about-h1'>о нас</h1>
      <p>Что такое Nordic SPA?</p>
      <p className='about-text'>
        Уединённое место для побега из шумных мегаполисов, возможность
        насладиться безмятежностью и прикоснуться к возвышенному. Безусловная,
        первозданная чистота природы и всеобъемлющая тишина. Даже в шторм на
        контрасте с силой природы ваши впечатления будут лишь ярче.
      </p>
      <button className='btn-about'><a href="#contacts">Как добраться</a></button>
    </div>
    <div className="flex">
    <div className='about-photo'>
    <div className='about-photo-1'></div>
    </div>
    <div className='about-photo'>
    <div className='about-photo-1'></div>
    </div>
    <div className='about-photo'>
    <div className='about-photo-1'></div>
    </div>
    </div>
    





    <h2 className='about-h2'>ГЕО-КУПОЛА В МАЙТРИ КЭМП:</h2>
    <span className='about-text'>ГЕО-КУПОЛА НА ПЕРВОЙ ЛИНИИ
Шатёр-купол с панорамным окном и видом на Финский залив. Располагается на границе леса и пляжа, до воды около 50 метров. 
Внутри есть все необходимое для вашего отдыха: электричество, 
две комфортных двуспальных кровати, кухонный уголок с холодильником, микроволновкой, чайником и набором посуды.
В куполе теплые полы и дровяная печь для комфортного отдыха даже в холодное время года.
Максимальная вместимость купола - 
4 человека (две двуспальные кровати, одна из них на втором уровне).
У нас есть скидка за длительное проживание: 20% от двух ночей.</span>
    </>
  );
}

export default About;
