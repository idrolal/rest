import React from 'react';
import { useSelector } from 'react-redux';


export const AdminConfirmReviews = () => {

  const { reviews } = useSelector(state => state.reviewsReducer)
  console.log(reviews)
  return (
    <div>
      <p>hey</p>
    </div>
  );
};


