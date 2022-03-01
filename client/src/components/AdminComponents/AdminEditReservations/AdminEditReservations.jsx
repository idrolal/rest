import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AdminEditReservations() {
  const { id } = useParams()
  const { reservations } = useSelector(state => state.reservationsReducer.reservations)
  const reserv = reservations.find(el => el.id === +id)

  return (
    <div>
      <input type="text" defaultValue={reserv.dataIn} />
      <input type="text" defaultValue={reserv.dataOut} />
      <input type="number" defaultValue={reserv.summa} />
      {
        reserv?.payded ?
          <p>Оплачено</p>
          :
          <p>Оплата при заселении</p>
      }
      <textarea defaultValue={reserv.comment} />
      <p>Выбранный дом: {reserv.house_id}</p>
      <select name="" id="">
        <option defaultValue=""></option>
      </select>

    </div>
  );
}

export default AdminEditReservations;
