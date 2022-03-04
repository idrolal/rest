import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminHomesCard from '../AdminHomesCard/AdminHomesCard.jsx';

function AdminAllHouses() {
  const { homes } = useSelector(state => state.homesReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch])

  return (
    <>
      {localStorage.getItem('token') &&
        <div className='app-container'>
          <h1 className='title-text'>Список домиков</h1>
          {
            homes?.length ?
              homes.map(el => <AdminHomesCard key={el.name} home={el} />)
              :
              <div>There are not homes</div>
          }
        </div>
      } </>

  )
}

export default AdminAllHouses;

