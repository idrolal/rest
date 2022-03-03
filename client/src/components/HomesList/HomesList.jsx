import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { HomesCard } from '../HomesCard/HomesCard'
import { Link } from 'react-router-dom';
import { reactRouter } from '../../utils/utils';


export const HomesList = () => {
  const { homes } = useSelector(state => state.homesReducer)

  return (
    <div className='app-container'>
      <h1>Все домики</h1>
      {homes?.length ? homes.map(el => <><HomesCard key={el.id} homes={el} />

        <div className='allHomes_reservBtn'>
          <Link key={el.id} to={`${reactRouter.user.house}/${el.id}`} className='allHomes_reservBtn_font'>{el.name}: перейти к бронированию</Link>
        </div>

      </>) : <div>There are not homes</div>}
      
    </div>
    // <div className='app-container'>
    //   <h1>Все домики</h1>
    //   {homes?.length ? homes.map(el => <><HomesCard key={el.id} homes={el} /><Link key={el.id} to={`${reactRouter.user.house}/${el.id}`}>Перейти к бронированию</Link></>) : <div>There are not homes</div>}
    // </div>
  );
};
