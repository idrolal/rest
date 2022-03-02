import React from 'react';
import { router } from '../../utils/utils';


export const HomesCard = ({ homes }) => {

  return (
    <div className='homesCard_box'>
      <div>{homes?.name}</div>
      <div>{homes?.description}</div>
      <div>{homes?.price}</div>
      
      {/* <div>{homes?.chips[0].map(el=> <h3>{el}</h3>)}</div> */}
      {
        homes.ImageHouses
          ?
          homes.ImageHouses.map(img =>
            <img
              src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name}`}
              alt={img.name}
              key={img.name}
              style={{ height: '100px', width: '100px' }} />
          )
          :
          <></>
      }
    </div>  
  );
};

