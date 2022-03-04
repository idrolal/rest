import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import ReviewCard from '../../ReviewCard/ReviewCard';


export const AdminConfirmReviews = () => {

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)
  const navigate = useNavigate()


  useEffect(() => {
    dispatch({ type: "FETCH_GET_REVIEWS" })
  }, [dispatch]);

  return (
    <>
      
        <div>
          {reviews?.length ? reviews.map(review => {
            if (review.status === false) {
              return <ReviewCard key={review.id} review={review} />
            }
          }
          ) : <div>Нет отзывов</div>}
        </div>
  
      <button onClick={()=>navigate(reactRouter.admin.main)}>Назад</button>
    </>
  );
};


