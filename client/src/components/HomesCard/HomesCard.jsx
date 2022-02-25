import React from 'react';
import { useDispatch, useSelector } from 'react-redux'



export const HomesCard = ({home}) => {

  const { homes } = useSelector(state => state.homesReducer)

  const dispatch = useDispatch();

 const deleteHome = (e) =>{
  e.preventDefault()
  dispatch({type:"FETCH_DELETE_HOME",payload:`${home.id}`})
 }

  return (
    <>
    <div>{home?.description}</div>
    <div>{home?.price}</div>
    <div>{home?.chips[0].map(el=> <h3>{el}</h3>)}</div>
    <button onSubmit={deleteHome}></button>
    </>
  );
};

