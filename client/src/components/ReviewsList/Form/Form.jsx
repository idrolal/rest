import React, { useRef } from 'react';
import { useDispatch } from "react-redux";

function Form(props) {
  const nameInput = useRef();
  const descInput = useRef();
  const dispatch = useDispatch();
// SDELAT RATING 
  const formHandler = (e) => {
    e.preventDefault();

    const newReview = {
      house_id: 1,
      nameUser: nameInput.current.value,
      description: descInput.current.value,
      rating: 5,
      status: false,
    }
    dispatch({type: "FETCH_POST_REVIEW", payload: newReview});
  }


  return (
    <div className="central-form">
    <div className="col">
      <h2 className="title">
        <p className="styles_typicalWrapper__1_Uvh">Напишите свой отзыв 📨</p>
      </h2>
    </div>
    <div className="back-form">
      <div className="img-back">
      </div>
      <form>
        <p></p>
        <label className='label-text'>
          Имя
          <input ref={nameInput} className='name-input' type="text" />
        </label>
        <label  className='label-text'>
          Сообщение
          <textarea ref={descInput} placeholder="Вам понравилось?" type="text"></textarea>
        </label>
        <div>
          <button onClick={formHandler} type="submit">
            <span className="send-text">Отправить</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Form;
