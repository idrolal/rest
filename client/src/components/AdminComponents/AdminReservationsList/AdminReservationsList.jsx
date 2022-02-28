import React from 'react';
import AdminEditReservations from '../AdminEditReservations/AdminEditReservations.jsx'
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js'
import { useDispatch, useSelector } from 'react-redux';

function AdminReservationsList({ reserve }) {
  return (
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
      {/* вытащить по id имя дома  */}
      <p>{reserve.house_id}</p>
      <Link to={reactRouter.admin.editReservationForParamas + reserve.id} key={reserve.id}>Изменить бронь</Link>
      <button>Отменить бронь</button>
    </div>
  );
}

export default AdminReservationsList;
