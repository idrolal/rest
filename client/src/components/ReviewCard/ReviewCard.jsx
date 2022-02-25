import React from 'react';


// ВЫВОДИТЬ ТОЛЬКО ОТЗЫВЫ ПОДТВЕРЖДЕННЫЕ АДМИНОМ
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
