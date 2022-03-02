import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HomesCard } from '../HomesCard/HomesCard';
import {saveInterval} from '../../redux/actionCreators/orderAC'
import './Booking2.css';

function Booking2(props) {
  const dispatch = useDispatch()

  const inputMin = useRef();
  const inputMax = useRef()

  // Это делает недоступным в календаре прошлые дни
  const thisDate = new Date().toLocaleDateString()
  const day = thisDate.slice(0, 2)
  const month = thisDate.slice(3, 5)
  const year = thisDate.slice(-4)
  const nowDate = year + '-' + month + '-' + day;

  const getDateIn = (event) => {
    event.preventDefault();
    const select = event.target.value;
    return select
  }

  const getDateOut = (event) => {
    event.preventDefault();
    const select = event.target.value;
    return select
  }

  const searchFreeHouse = (event) => {
    event.preventDefault()
    const info = {
      dataInUser: inputMin.current.value,
      dataOutUser: inputMax.current.value,
    }
    dispatch({ type: 'FETCH_GET_FREE_HOUSE', payload: info })
    dispatch(saveInterval(info))
  }
  const { orders } = useSelector(state => state.orderReducer)
  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch, orders]);


  return (
    <>
      <div className='app-container'>
        <div className='booking-main-container'>
          <h4 className='booking-h4'>Выберите даты заезда и выезда</h4>
        <div className='booking-options'>
        <span className='booking-text'>Дата заезда: <input className='booking-input1' type="date" defaultValue={nowDate} onChange={getDateIn} min={nowDate} name="calendar_in" ref={inputMin} required /></span>
        <span className='booking-text'>Дата выезда: <input className='booking-input2' type="date" defaultValue={nowDate} onChange={getDateOut} name="calendar_out" ref={inputMax} required/></span>
        </div>
        <button onClick={searchFreeHouse}>Найти</button>
        
        {orders.length ? orders.map(el => <HomesCard homes={el} key={el.id}  /> ) : <div>{orders.message}</div>}

        </div>
        </div>
    </>
  );
}

export default Booking2;
