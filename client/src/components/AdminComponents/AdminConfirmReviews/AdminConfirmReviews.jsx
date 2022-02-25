import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewCard from '../../ReviewCard/ReviewCard';


export const AdminConfirmReviews = () => {

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)
  // console.log(reviews)

  useEffect(() => { 
    dispatch({type: "FETCH_GET_REVIEWS"})
  }, [dispatch]);

  return (
    <div>
      { reviews?.length ? reviews.map(review => {
        if (review.status === false){
        return <ReviewCard key={review.id} review={review}/>
        }
      }
      ) : <div>None!</div>}
    </div>
  );
};


