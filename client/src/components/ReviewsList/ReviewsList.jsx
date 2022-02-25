import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Typical from "react-typical";
import ReviewCard from '../ReviewCard/ReviewCard';
import Form from './Form/Form';
import './ReviewsList.css';

function ReviewsList(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);

  useEffect(() => { 
    dispatch({type: "FETCH_GET_REVIEWS"})
  }, [dispatch]);
  return (
    <>
    <div className="reviews">
      <button onClick={() => setOpen(!open)} className="header-button"><span className="button-text">Оставить отзыв</span></button>

      {open ? <Form/> : <></>}
      </div>


      <h1>Отзывы</h1>
    <div>
    {reviews.length ? reviews.map(review => <ReviewCard key={review.id} review={review}/>) : <p>Пусто</p>}
    </div>
    </>
  );
}

export default ReviewsList;
