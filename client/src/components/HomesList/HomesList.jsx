import React from 'react';
import { useSelector } from 'react-redux'
import { HomesCard } from '../HomesCard/HomesCard'
import { Link } from 'react-router-dom';
import { reactRouter } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';


export const HomesList = () => {
  const { homes } = useSelector(state => state.homesReducer)

  return (
    <div className='app-container'>
      <h1 className='title-text'>Все домики</h1>
      {homes?.length ? homes.map(el => <><HomesCard key={uuidv4()} homes={el} />

        <div  key={uuidv4()} className='allHomes_reservBtn'>
          <Link  key={uuidv4()}  to={`${reactRouter.user.house}/${el.id}`} className='allHomes_reservBtn_font'>{el.name}: перейти к бронированию</Link>
        </div>

      </>) : <div>There are not homes</div>}
      
    </div>
  );
};
