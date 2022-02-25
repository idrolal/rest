import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function ReviewsList(props) {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);
  console.log(reviews);
  useEffect(() => { 
    fetch('/api/reviews')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  })
  return (
    <div>
      
    </div>
  );
}

export default ReviewsList;
