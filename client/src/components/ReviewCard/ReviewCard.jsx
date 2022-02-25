import React from 'react';

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
