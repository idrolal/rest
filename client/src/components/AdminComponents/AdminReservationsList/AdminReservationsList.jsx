import React from 'react';
import AdminEditReservations from '../AdminEditReservations/AdminEditReservations.jsx'
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js'

function AdminReservationsList(props) {

  return (
    <div>
      <p>Бронирование 1</p>
      <Link to={reactRouter.admin.editReservations} element={<AdminEditReservations />}>Изменить бронь</Link>
      <button>Отменить бронь</button>
    </div>
  );
}

export default AdminReservationsList;
