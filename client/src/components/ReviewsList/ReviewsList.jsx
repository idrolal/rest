import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import ReviewCard from '../ReviewCard/ReviewCard';
import Form from './Form/Form';
import './ReviewsList.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 150, itemsToShow: 2 },
  { width: 368, itemsToShow: 3 },
  { width: 400, itemsToShow: 4 },
  { width: 500, itemsToShow: 5 },
]

function ReviewsList(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);
  // const state = useSelector((state) => state);


  useEffect(() => {
    dispatch({ type: "FETCH_GET_REVIEWS" })
  }, [dispatch]);
  return (
    <>
    <div className="reviews">
      <button onClick={() => setOpen(!open)}  className="header-button"><span className="button-text">Оставить отзыв</span></button>

      {open ? <Form onSubmit={() => setOpen(false)}/> : <></>}
      </div>


      <center><h3 className="title-text">отзывы</h3></center>

    <div>
      <Carousel breakPoints={breakPoints}>
 
    {reviews.length ? reviews.map(review => {
    if (review.status) {
      return <Item><ReviewCard key={review.id} review={review}/></Item>
    } 
    })
    : 
    <p>Пусто</p>
    }
    </Carousel>
    </div>
    </>
  );
}

export default ReviewsList;
