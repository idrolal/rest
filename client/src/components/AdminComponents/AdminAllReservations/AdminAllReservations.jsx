import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservationsList from '../AdminReservationsList/AdminReservationsList.jsx'
import { FIND_RESERVATIONS_FETCH } from '../../../redux/actionType/reservationAT.js'
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';
import NotFound from '../../NotFound/NotFound.jsx';

function AdminAllReservations(props) {
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationsReducer);
  const { admin } = useSelector(state => state.adminReducer);

  const navigate = useNavigate()
  useEffect(() => {
    dispatch({ type: FIND_RESERVATIONS_FETCH })
  }, [dispatch]);



  return (
    <>
      {admin?.email ?
        <div className='app-container'>
          <h1>Admin All Reservations</h1>
          {
            reservations?.length ?
              reservations.map(reserve => <AdminReservationsList key={reserve.id} reserve={reserve} />)
              :
              <div>None!</div>
          }
          <button onClick={()=>navigate(reactRouter.admin.main)}>Назад</button>
        </div> : <NotFound/>
      } </>
  );
}

export default AdminAllReservations;
