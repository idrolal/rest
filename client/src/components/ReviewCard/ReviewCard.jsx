import React from 'react';
import avatar from '../../img/avatar.svg';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './ReviewCard.css'

function ReviewCard({ review }) {

  const dispatch = useDispatch();
  const descriptionRef = useRef();

  const handlerUpdate = (e) => {
    e.preventDefault()
    dispatch({ type: "FETCH_PUT_REVIEW", payload: { id: `${review.id}`, info: descriptionRef.current.value } });
    dispatch({ type: "FETCH_GET_REVIEWS" });
  };


  return (
    <>
      {review.status === false && localStorage.getItem('token') ?
        <div className='reviewcard-container'>
          <form onSubmit={handlerUpdate}>
            <div className='reviewcard-name'>
              <div className='reviewcard-photo'>
                <img src={avatar} alt="" />
              </div>
              {review.nameUser}
            </div>
            <div className='reviewcard-description'>
              <input defaultValue={review.description} ref={descriptionRef} />
            </div>
            <div className='reviewcard-rating'>
              Оценка: {review.rating}
            </div>

            <button>Изменить</button>
          </form>
        </div>
        :
        <div className='reviewcard-container'>
          <div className='reviewcard-name'>
            <div className='reviewcard-photo'>
              <img src={avatar} alt="" />
            </div>
            {review.nameUser}
          </div>
          <div className='reviewcard-description'>
            “{review.description}”
          </div>
          <div className='reviewcard-rating'>
            Оценка: {review.rating}
          </div>
        </div>
      }
    </>
  );
}

export default ReviewCard;
