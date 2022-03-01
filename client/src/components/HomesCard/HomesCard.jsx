import React from 'react';
import {reactRouter} from '../../utils/utils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { router } from '../../utils/utils';


export const HomesCard = ({ homes }) => {
  const { imagesHomes } = useSelector(state => state.homesReducer.homes)

  const curImg = imagesHomes.filter(img => img.house_id === homes.id)
  console.log(curImg);

  // console.log(homes.id);

  return (
    <div className='homesCard_box'>
      <div>{homes?.name}</div>
      <div>{homes?.description}</div>
      <div>{homes?.price}</div>
      <Link key={homes.id} to={`${reactRouter.user.booking}/${homes.id}`}>Click</Link>
      {/* <div>{homes?.chips[0].map(el=> <h3>{el}</h3>)}</div> */}
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
          <div></div>
      }
    </div>
  );
};

