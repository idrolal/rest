import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AdminEditReservations() {

  const dispatch = useDispatch()
  const { id } = useParams()
  // console.log(id)
  const { reservations } = useSelector(state => state.reservationsReducer)
  // console.log(reservations)
  const reserv = reservations.find(el => el.id === +id)

  const dataInInput = useRef();
  const dataOutInput = useRef();
  const summa = useRef();
  const comment = useRef()

  const handlerUpdate = (e) => {
  e.preventDefault()
  // console.log(dataInInput.current.value)
  const updateData = {
  id,
  dataIn: dataInInput.current.value,
  dataOut: dataOutInput.current.value,
  summa: summa.current.value,
  comment: comment.current.value
  }
  dispatch({ type: "FETCH_UPDATE_RESERVATIONS", payload: updateData })
}

  


  return (
    <div>
      <form onSubmit={handlerUpdate}> 
      <input ref={dataInInput} type="date" defaultValue={reserv.dataIn} />
      <input ref={dataOutInput} type="date" defaultValue={reserv.dataOut} />
      <input ref={summa} type="number" defaultValue={reserv.summa} />
      {
        reserv?.payded ?
          <p>Оплачено</p>
          :
          <p>Оплата при заселении</p>
      }
      <textarea ref={comment} defaultValue={reserv.comment} />
      <p>Выбранный дом: {reserv.house_id}</p>
      <button>Сохранить изменения</button>
      </form>
    </div>
  );
}

export default AdminEditReservations;
