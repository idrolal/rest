import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';
import { router } from '../../../utils/utils.js';


function AdminHomesCard({ home }) {
  const dispatch = useDispatch();

  const { imagesHomes, homes } = useSelector(state => state.homesReducer.homes)
  const curImg = imagesHomes.filter(img => img.house_id === home.id)

<<<<<<< HEAD
  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, []);
=======
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_GET_HOMES' })
  // }, [dispatch, home]);
>>>>>>> e229fd7e59bb4110e308e9438ea3774646e88d5a

  function deleteHome(id) {
    dispatch({ type: "FETCH_DELETE_HOME", payload: `${id}` });
    dispatch({ type: 'FETCH_GET_HOMES' })
  }

  return (
    <div className='house_card'>
      <div>{home?.description}</div>
      <div>{home?.price}</div>

      {/* <div>{home?.chips[0].map(el => <h3>{home}</h3>)}</div> */}
      {
        curImg
          ?
          curImg.map(img =>
            <img
              src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name}`}
              alt={img.name}
              key={img.name}
              style={{ height: '100px', width: '100px' }} />
          )
          :
          <div>None</div>
      }
      <button onClick={() => deleteHome(home.id)}>Удалить домик</button>
      <Link to={`${reactRouter.admin.editHouse}${home.id}`} key={home?.id}>Изменить дом</Link>
    </div>
  );
}

export default AdminHomesCard;
