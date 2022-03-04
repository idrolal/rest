import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewCard from '../../ReviewCard/ReviewCard';
import './AdminConfirmReviews.css';


export const AdminConfirmReviews = () => {

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)


  useEffect(() => {
    dispatch({ type: "FETCH_GET_REVIEWS" })
  }, [dispatch]);

  return (
    <>
    <div className="app-container">
    <h1 className="title-text">Все отзывы</h1>
      {
        localStorage.getItem('token') &&
        <div className="confirmreviews">
          {reviews?.length ? reviews.map(review => {
            if (review.status === false) {
              return <ReviewCard key={review.id} review={review} />
            }
          }
          ) : <div>None!</div>}
        </div>
      }
      </div>
    </>
  );
};


