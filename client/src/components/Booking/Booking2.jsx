import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HomesCard } from '../HomesCard/HomesCard';

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
  }
  const {orders} = useSelector(state => state.orderReducer)



  return (
    <>
      <div>
        <p>Выберите дату от: <input type="date" onChange={getDateIn} min={nowDate} name="calendar_in" ref={inputMin} /></p>
        <p>Выберите дату до: <input type="date" onChange={getDateOut} name="calendar_out" ref={inputMax} /></p>
        <button onClick={searchFreeHouse}>Click</button>
      </div>

      {orders ? orders.map(el=> <HomesCard homes={el} key={el.id}/>): <div>None!</div>}
    </>
  );
}

export default Booking2;
