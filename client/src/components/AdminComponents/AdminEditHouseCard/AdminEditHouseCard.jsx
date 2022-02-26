import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export const AdminEditHouseCard = ({homes}) => {
  
  const dispatch = useDispatch()

  const nameRef = useRef()
  const descriptionRef = useRef()
  const priceRef = useRef()

  const handlerUpdate = (e) => {
    e.preventDefault()
    const updateHouse = {
      id: `${homes.id}`,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value, 
    }

    dispatch({type: "FETCH_PUT_HOMES", payload: updateHouse})
    // console.log(descriptionRef.current.value)
  }

  return (
<form onSubmit={handlerUpdate}>
    <div>
    <input defaultValue={homes.name} ref={nameRef}/>
      <br/>
    <input defaultValue={homes.description} ref={descriptionRef}/>
      <br/>
    <input defaultValue={homes.price} ref={priceRef}/>
      <br/>
    </div>
    <button>Update</button>
    </form> 
  );
};

