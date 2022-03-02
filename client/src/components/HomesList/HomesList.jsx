import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { HomesCard } from '../HomesCard/HomesCard'
import { Link } from 'react-router-dom';
import { reactRouter } from '../../utils/utils';


export const HomesList = () => {

  const { homes } = useSelector(state => state.homesReducer)
  console.log(homes);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch])

  return (
    <>
      <h1>Homes List</h1>
      {homes?.length ? homes.map(el => <><HomesCard key={el.id} homes={el} /><Link key={el.id} to={`${reactRouter.user.house}/${el.id}`}>ff</Link></>) : <div>There are not homes</div>}
    </>
  );
};
