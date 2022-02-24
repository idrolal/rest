import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { initHomes } from '../../redux/actionCreators/homesAC';

export const HomesList = () => {

  const { homes } = useSelector(state => state.homesReducer)
  console.log(homes)
  

  return (
    <div>
      
    </div>
  );
};
