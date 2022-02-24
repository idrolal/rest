import React from 'react';

function Booking(props) {
  return (
    <form id="regForm" action="">



<div className="tab">
<h1>Персональные данные</h1>
  <p><input placeholder="Your name" /></p>
  <p><input placeholder="Your email"/></p>
  <p><input placeholder="Your phone"/></p>
</div>

<div>
<h1>Параметры бронирования</h1>
   <p>Выберите дату от: <input type="date" name="calendar"/></p>
   <p>Выберите дату от: <input type="date" name="calendar"/></p>
   <input type="submit" value="Отправить"/>
</div>

<div>
<h1>Оплата</h1>
 <input pattern="^[0-9]+$"/><p>рублей</p>
 <h3>Способ оплаты</h3>
 <select name="select">
  <option value="value1">PayPal</option>
  <option value="value2">Денежный перевод</option>
  
</select>
   <input type="submit" value="Забронировать"/>
</div>




</form>

    
  );
}

export default Booking;
