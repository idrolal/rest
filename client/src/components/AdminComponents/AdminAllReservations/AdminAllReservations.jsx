import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservationsList from '../AdminReservationsList/AdminReservationsList.jsx'
import { FIND_RESERVATIONS_FETCH } from '../../../redux/actionType/reservationAT.js'
import './AdminAllReservations.css'

function AdminAllReservations(props) {
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationsReducer)

  useEffect(() => {
    dispatch({ type: FIND_RESERVATIONS_FETCH })
  }, [dispatch])

  return (
    <>
      {localStorage.getItem('token') &&
        <div className='app-container'>
          <h1 className="title-text">Все бронирования</h1>
          <div className='all-reservations-container'>
          {
            reservations?.length ?
              reservations.map(reserve => <AdminReservationsList key={reserve.id} reserve={reserve} />)
              :
              <div>None!</div>
          }
          </div>
        </div>
      } </>
  );
}

export default AdminAllReservations;
