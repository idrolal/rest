import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RangePicker } from 'react-trip-date';
import { reactRouter } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { saveInterval } from '../../redux/actionCreators/orderAC'



function CalendarBook({ currentHome }) {
  const { unavalibleDate } = useSelector(state => state.orderReducer)

  const dispatch = useDispatch();
  const searchFreeHouse = (dates) => {
    const info = {
      dataInUser: dates.from,
      dataOutUser: dates.to,
    }

    dispatch(saveInterval(info))
    if (info.dataOutUser.length) {
      dispatch({ type: 'FETCH_GET_FREE_HOUSE', payload: info })
    }
  }
  useEffect(() => {
    dispatch({ type: 'FETCH_UNAVALIBLE_DATE', payload: currentHome })
  }, [dispatch, currentHome]);
  return (
    <>
    <div className='calendar-container'>
      <RangePicker autoResponsive={false}
        numberOfMonths={2}
        disabledBeforToday={true}
        disabledDays={unavalibleDate.slice(1, -1)}
        onChange={searchFreeHouse}
        // handleChange={data => console.log(data)}
      >
      </RangePicker >
    </div>
    <div className='link-to-booking'>
      <Link key={currentHome?.id} to={`${reactRouter.user.booking}/${currentHome?.id}`}><p>Забронировать</p></Link>
      </div>
    </>
  );
}

export default CalendarBook;
