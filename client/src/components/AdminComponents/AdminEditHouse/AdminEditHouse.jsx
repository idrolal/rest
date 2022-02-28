import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdminEditHouseCard } from '../AdminEditHouseCard/AdminEditHouseCard';


export function AdminEditHouse(props) {

  const dispatch = useDispatch()
  const { homes } = useSelector(state => state.homesReducer)
  // console.log(homes)

  useEffect(() => {
    dispatch({ type: "FETCH_GET_HOMES" })
  }, [dispatch])

  return (
    <div>
      {homes?.length ? homes.map(home => {
        return <AdminEditHouseCard key={home.id} homes={home} />

      }) : <div>None!</div>
      }
    </div>
  );
}

