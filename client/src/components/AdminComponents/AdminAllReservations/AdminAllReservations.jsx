import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservationsList from '../AdminReservationsList/AdminReservationsList.jsx'

function AdminAllReservations(props) {

  const dispatch = useDispatch()
  // const { reservations } = useSelector(state => state.reservationsReducer)
  // console.log(reservations)

  return (
    <div>
      <h1>Admin All Reservations</h1>
      <AdminReservationsList />

      {/* {
        reservations?.length > 0 ?
          <div>hello</div>
          :
          <div>None!</div>

      } */}

    </div>
  );
}

export default AdminAllReservations;
