import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminAllHouses() {
  const { homes } = useSelector(state => state.homesReducer)

  const dispatch = useDispatch();

  function deleteHome(id) {
    dispatch({ type: "FETCH_DELETE_HOME", payload: `${id}` })

  }


  return (
    <>
      {homes?.length ? homes.map(el => {
        return <>
          <div>{el?.description}</div>
          <div>{el?.price}</div>
          <div>{el?.chips[0].map(el => <h3>{el}</h3>)}</div>
          <button onClick={deleteHome(el.id)}></button>
        </>
      }) : <div>None!</div>}

    </>
  )
}

export default AdminAllHouses;
