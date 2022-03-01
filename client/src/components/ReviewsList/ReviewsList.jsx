import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import ReviewCard from '../ReviewCard/ReviewCard';
import Form from './Form/Form';
import './ReviewsList.css';

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]

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
      <Carousel   breakPoints={breakPoints}>
 
    {reviews.length ? reviews.map(review => 
    <Item><ReviewCard key={review.id} review={review}/></Item>) 
    : 
    <p>Пусто</p>
    }
  
    </Carousel>
    </div>
    </>
  );
}

export default ReviewsList;
