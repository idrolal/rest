import React from 'react';

function Booking2(props) {
  // Это делает недоступным в календаре прошлые дни
  const thisDate = new Date().toLocaleDateString()
  // console.log(thisDate);
  const day = thisDate.slice(0, 2)
  const month = thisDate.slice(3, 5)
  const year = thisDate.slice(-4)
  const nowDate = year + '-' + month + '-' + day
  // console.log(nowDate)

 const getDateIn = (event) => {
   event.preventDefault();
  const select = event.target.value;
   console.log('datein', select);
  return select
 }

 const getDateOut = (event) => {
  event.preventDefault();
  const select = event.target.value;
  // console.log(select);
  return select
}
function foo(max, min) {
  const maxDay = Date.parse(max);
  const minDay = Date.parse(min)
  console.log(maxDay);



  // for(let i = minDay; i < maxDay; i = 60 * 60 * 24 * 1000 ){
  //   a = (new Date(i))
  // }
return Date(((maxDay - minDay) / (60 * 60 * 24 * 1000)))
}

  return (
    <div>
  <p>Выберите дату от: <input type="date" onChange={getDateIn} name="calendar_in" min={nowDate} /></p>
   <p>Выберите дату до: <input type="date" onChange={getDateOut} name="calendar_out" min={nowDate}/></p>
   <button onClick={() => foo('2022-03-05', '2022-03-01')}></button>
    </div>
  );
}

export default Booking2;
