import React from 'react';
import { router } from '../../../utils/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CalendarBook from '../../CalendarBook/CalendarBook';

function HomeCardCurrent(props) {
  const { id } = useParams()
  const { homes } = useSelector(state => state.homesReducer)
  const currentHome = homes.find(el => el.id === +id);
  return (
    <div className='homesCard_box'>
      <div>{currentHome?.name}</div>
      <div>{currentHome?.description}</div>
      <div>{currentHome?.price}</div>

      {
        currentHome?.ImageHouses
          ?
          currentHome?.ImageHouses?.map(img =>
              <img
                src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name}`}
                alt={img.name}
                key={img.name}
                style={{ height: '100px', width: '100px' }} />
              )

        :
          <></>
      }

      <CalendarBook currentHome={currentHome}/>
      
    </div>
  );
}

export default HomeCardCurrent;
