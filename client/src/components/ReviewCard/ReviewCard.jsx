import React from 'react';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { confirmReviewsAC } from '../../redux/actionCreators/reviewsAC'


function ReviewCard({review}) {
  
  const dispatch = useDispatch()

  const descriptionRef = useRef()

  const handlerUpdate = (e) => {
    e.preventDefault()
    dispatch({type: "FETCH_PUT_REVIEW", payload: {id: `${review.id}`, info: descriptionRef.current.value}})
    // console.log(descriptionRef.current.value)
  }


  return (
    <>

    <div>
      {review.nameUser}
      <br/>
      {review.description}
      <br/>
      {review.rating}
      <br/>
    </div>

<form onSubmit={handlerUpdate}>
    <div>
      {review.nameUser}
      <br/>
      <input defaultValue={review.description} ref={descriptionRef}/>
      <br/>
      {review.rating}
      <br/>
    </div>
    <button>Click</button>
    </form> 

        </>
  );
}

export default ReviewCard;
