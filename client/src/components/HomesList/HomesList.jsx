import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { HomesCard } from '../HomesCard/HomesCard'


export const HomesList = () => {

  const { homes } = useSelector(state => state.homesReducer.homes)
  const { homesReducer } = useSelector(state => state)
  console.log(homesReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch])

  return (
    <>
      <h1>Homes List</h1>
      {homes?.length ? homes.map(el => <HomesCard key={el.id} homes={el} />) : <div>There are not homes</div>}
    </>
  );
};
