import React,{ useRef }  from 'react';
import { useState } from 'react';
import CalendarBook from '../CalendarBook/CalendarBook'


function Booking(props) {

  const [step,setStep] = useState(1);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef();


function funcRend(event) {
  event.preventDefault()
  setStep(step + 1)
}

function funcBack(event) {
  event.preventDefault()
  setStep(step - 1)
}

function dataOnBase(event) {
  event.preventDefault()
const newService={
  name: inputName.current.value,
  email: inputEmail.current.value,
  phone: inputPhone.current.value
}
console.log(newService);
}


  return (
    <form id="regForm">





{step === 1 && <div>
<h1>Параметры бронирования</h1>
   {/* <p>Выберите дату от: <input type="date" name="calendar"/></p>
   <p>Выберите дату от: <input type="date" name="calendar"/></p> */}

   <CalendarBook/>
   
</div>}

{step === 2 && <div className="tab">
<h1>Персональные данные</h1>
  <p><input ref={inputName} placeholder="Your name" /></p>
  <p><input ref={inputEmail} placeholder="Your email"/></p>
  <p><input ref={inputPhone} placeholder="Your phone"/></p>
</div>}

{step === 3 && <div>
<h1>Оплата</h1>
 <input pattern="^[0-9]+$"/><p>рублей</p>
 <h3>Способ оплаты</h3>
 <select name="select">
  <option value="value1">PayPal</option>
  <option value="value2">Денежный перевод</option>
</select>
    <input type="text" placeholder="Your comment"/>
   <input type="submit" value="Забронировать" onClick={dataOnBase}/>
</div>}


{step !== 1  && <input type="submit" value="Назад" onClick={funcBack} />}
{step !== 3  && <input type="submit" value="Далее" onClick={funcRend}/>}


</form>

    
  );
}

export default Booking;
