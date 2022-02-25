import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ReviewCard({review}) {
  return (
    <>

    <div>
      {review.nameUser}
      {review.description}
      {review.rating}
    </div>
    
    </>
  );
}

export default ReviewCard;
