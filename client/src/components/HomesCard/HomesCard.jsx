import React from 'react';
import { useDispatch, useSelector } from 'react-redux'



export const HomesCard = ({ homes }) => {
  const { imagesHomes } = useSelector(state => state.homesReducer.homes)

  // console.log(imagesHomes);
  // const curHomeImages = []

  // console.log(homes.id);

  return (
    <div className='homesCard_box'>

      <div>{homes?.description}</div>
      <div>{homes?.price}</div>
      {/* <div>{homes?.chips[0].map(el=> <h3>{el}</h3>)}</div> */}
    </div>
  );
};

