import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';


function AdminHomesCard({ home }) {
  // const { homes } = useSelector(state => state.homesReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch]);

  function deleteHome() {
    const { id } = home
    dispatch({ type: "FETCH_DELETE_HOME", payload: id })
  }
  return (
    <div className='house_card'>
      <div>{home?.description}</div>
      <div>{home?.price}</div>
      {/* <div>{home?.chips[0].map(el => <h3>{home}</h3>)}</div> */}
      <button onClick={deleteHome}>Удалить домик</button>
      <Link to={`${reactRouter.admin.editHouse}${home.id}`} key={home?.id}>Изменить дом</Link>
    </div>
  );
}

export default AdminHomesCard;
