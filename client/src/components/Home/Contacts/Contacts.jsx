import React from 'react';
import './Contacts.css'

function Contacts(props) {
  return (
    <>
    <div className="container-options">
      <div className="options-title">
        <div className="options-logo"><img src={require("../../../img/clock.png")} alt="" /></div>
        <h6 className="h6_options">ВРЕМЯ ЗАЕЗДА И ВЫЕЗДА</h6>
        <span className="options-text">Заезд в купола начинается с 15:00, выезд - до 12:00. 
        Ранний заезд или поздний выезд возможен по предварительной договоренности 
        с администрацией и при наличии свободных мест.</span>
      </div>
      <div className="options-title">
       <div className="options-logo"><img src={require("../../../img/son.png")} alt="" /></div>
       <h6 className="h6_options">ЗАСЕЛЕНИЕ С ДЕТЬМИ</h6>
       <span className="options-text">Дети младше 3 лет не занимающие отдельного спального места, размещаются бесплатно. 
      Если ребенок занимает спальное место, то считается 
      отдельным гостем и за дополнительное место нужна доплата.</span>
      </div>
      <div className="options-title">
       <div className="options-logo"><img src={require("../../../img/dog.png")} alt="" /></div>
       <h6 className="h6_options">ДОМАШНИЕ ЖИВОТНЫЕ</h6>
       <span className="options-text">Мы всегда рады вашим домашним питомцам. Размещаем с животными без доплат, 
       а для аллергиков есть 2 купола "строго без животных", чтобы вам было комфортно.</span>
      </div>
      </div>
      <div className="container-options">
      <div className="options-title">
        <div className="options-logo"><img src={require("../../../img/guests.png")} alt="" /></div>
        <h6 className="h6_options">КОЛИЧЕСТВО ГОСТЕЙ</h6>
        <span className="options-text">Стоимость за разное количество гостей отличается. 
        Пожалуйста, обращайте внимание на количество человек в модуле бронирования.</span>
      </div>
      <div className="options-title">
       <div className="options-logo"><img src={require("../../../img/discount.png")} alt="" /></div>
       <h6 className="h6_options">СКИДКИ ОТ 2 НОЧЕЙ</h6>
       <span className="options-text">Скидка 20% действует за бронирование от 2 ночей и 
       она закреплена в модуле бронирования. Никаких 
       дополнительных промокодов вводить не нужно.</span>
      </div>
      <div className="options-title">
       <div className="options-logo"><img src={require("../../../img/100-percent.png")} alt="" /></div>
       <h6 className="h6_options">ПРЕДОПЛАТЫ И ОТМЕНЫ</h6>
       <span className="options-text">Бронирование только по 100% предоплате.
        При отмене средства не возвращаются. 
       Перенос на другие даты обсуждается в индивидуальном порядке
        и возможен только по уважительной причине.</span>
      </div>
      </div>
  </>
  );
}

export default Contacts;
