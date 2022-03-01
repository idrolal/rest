import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservationsList from '../AdminReservationsList/AdminReservationsList.jsx'
import { FIND_RESERVATIONS_FETCH } from '../../../redux/actionType/reservationAT.js'

function AdminAllReservations(props) {

  const dispatch = useDispatch()

  const { reservations } = useSelector(state => state.reservationsReducer)
  // console.log(reservations);
  // console.log(reservations[0].dataIn);

  useEffect(() => {
    dispatch({ type: FIND_RESERVATIONS_FETCH })
  }, [dispatch])


  return (
    <div>
      <h1>Admin All Reservations</h1>
      {
        reservations?.length ?
          reservations.map(reserve => <AdminReservationsList key={reserve.id} reserve={reserve} />)
          :
          <div>None!</div>
      }
    </div>
  );
}

export default AdminAllReservations;
