import React from 'react';

function AdminEditReservations({ reserv }) {
  return (
    <div>
      <input type="text" defaultValue={reserv.dataIn} />
      <input type="text" defaultValue={reserv.dataOut} />
      <input type="number" defaultValue={reserv.summa} />
      {
        reserv ?
          <p>Оплачено</p>
          :
          <p>Оплата при заселении</p>
      }
      <textarea value={reserv.comment} />
      <p>Выбранный дом: </p><p>{reserv.house_id}</p>
      <select name="" id="">
        <option value=""></option>
      </select>

    </div>
  );
}

export default AdminEditReservations;
