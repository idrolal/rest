import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from '../ReviewCard/ReviewCard';

function ReviewsList(props) {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);

  useEffect(() => { 
    dispatch({type: "FETCH_GET_REVIEWS"})
    // fetch('/api/reviews')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
  }, [dispatch]);
  return (
    <div>
      <h1>Отзывы</h1>
    {reviews.length ? reviews.map(review => <ReviewCard key={review.id} review={review}/>) : <p>Пусто</p>}
    </div>
  );
}

export default ReviewsList;
