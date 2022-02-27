import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminAllReservations(props) {

  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationsReducer)

  return (
    <div>
      <h1>Admin All Reservations</h1>



    </div>
  );
}

export default AdminAllReservations;
