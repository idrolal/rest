import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';
import NotFound from '../../NotFound/NotFound.jsx';
import AdminHomesCard from '../AdminHomesCard/AdminHomesCard.jsx';

function AdminAllHouses() {
  const { homes } = useSelector(state => state.homesReducer);
  const { admin } = useSelector(state => state.adminReducer)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch])

  return (
    <>
      {admin?.email ?
        <div className='app-container'>
          <h1>Homes List</h1>
          {
            homes?.length ?
              homes.map(el => <AdminHomesCard key={el.name} home={el} />)
              :
              <div>There are not homes</div>
          }
          <button onClick={() => navigate(reactRouter.admin.main)}>Назад</button>
        </div> : <NotFound />
      } </>

  )
}

export default AdminAllHouses;

