import React from 'react';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js'
import { useDispatch } from 'react-redux';

function AdminReservationsList({ reserve }) {

  const dispatch = useDispatch()

  function deleteReservation(id) {
    dispatch({ type: "FETCH_DELETE_RESERVATION", payload: `${id}` });
  }

  return (
    <>
      
        <div>
          <p>Бронирование {reserve.id}</p>
          <p>Заезд: {reserve.dataIn}</p>
          <p>Выезд: {reserve.dataIn}</p>
          <p>Сумма: {reserve.summa}</p>
          {
            reserve?.payded ?
              <p>Оплачено</p>
              :
              <p>Оплата на месте</p>
          }
          <p>{reserve.comment}</p>
          <p>{reserve.house_id}</p>
          <Link to={reactRouter.admin.editReservationForParamas + reserve.id} key={reserve.id}>Изменить бронь</Link>
          <button onClick={() => deleteReservation(reserve.id)}>Отменить бронь</button>
        </div>
      
    </>
  );
}

export default AdminReservationsList;
