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
          <div className='go_back'>
            <h1 className='arrow_back' onClick={() => navigate(reactRouter.admin.main)}>&#8678;</h1>
            <h1 className='title-text'>Список домиков</h1>
          </div>  
          {
            homes?.length ?
              homes.map(el => <AdminHomesCard key={el.name} home={el} />)
              :
              <div>There are not homes</div>
          }
        </div> : <NotFound />
      } </>

  )
}

export default AdminAllHouses;

