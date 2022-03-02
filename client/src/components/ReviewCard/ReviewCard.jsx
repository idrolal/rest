import React from 'react';
import avatar from '../../img/avatar.svg'




// TODO VITYA ВЫВОДИТЬ ТОЛЬКО ОТЗЫВЫ ПОДТВЕРЖДЕННЫЕ АДМИНОМ
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './ReviewCard.css'
import { confirmReviewsAC } from '../../redux/actionCreators/reviewsAC'

function ReviewCard({ review }) {

  const dispatch = useDispatch()
  const descriptionRef = useRef()

  const handlerUpdate = (e) => {
    e.preventDefault()
    dispatch({ type: "FETCH_PUT_REVIEW", payload: { id: `${review.id}`, info: descriptionRef.current.value } })
  }


  return (
    <>
      {review.status === false ?
        <div></div>
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
